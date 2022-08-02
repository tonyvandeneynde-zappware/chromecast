/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.adsHandler = (function () {

  const isAdSkippingEnabled = CONFIG.adSkippingEnabled || false

  let activeAd = null
  let adPolicy = null
  let signallingType = 'DEFAULT'
  let adsBlocks = []
  let removedAds = {}
  let adSkippingWindows = []
  let playbackMode = ''
  let adPlaybackPreRoll

  //
  // AD RESTRICTIONS
  //

  /**
  * Specifies if any restrictions apply to the ads that are in this playback session.
  * Any AdPlaybackRestriction scenario that is included in this list is not allowed to be performed during ads in this playback session.
  * If empty or null, no restrictions are applicable.
  * Note: additional AdPlaybackRestriction types can be added in the future.
  *  In order to remain backward compatible,
  * clients must be able to ignore unknown AdPlaybackResctriction scenarios.
  * BLOCK_SKIP_AND_FAST_FORWARD => Indicates that fast forwarding through ads and skipping in ads is not allowed.
  */
  const setPolicy = (adPlayBackRestrictions, adSignallingType, preRoll) => {
    if (!isAdSkippingEnabled) return
    /**
     *If for a given timeshift mode and device category trick modes
     are blocked on the channel level, all trick modes restrictions
     on the ad level are dropped for this timeshift mode and device category.
     */
    _.forEach(adPlayBackRestrictions, res => {
      if (res === 'BLOCK_SKIP_AND_FAST_FORWARD') {
        adPolicy = {
          allow_skip: false
        }
      } else {
        adPolicy = undefined
      }
    })
    /**
     * null => DEFAULT ads handling
     * SCTE35_ZW_1 => orf2
     * not-supported / UNKNOWN => block on channel-level
     */
    if (adSignallingType === 'SCTE35_ZW_1') { // orf-2
      signallingType = com.zappware.chromecast.AdSignallingTypes.SCTE35_ZW_1
    } else if (adSignallingType === null) { // standard
      signallingType = com.zappware.chromecast.AdSignallingTypes.DEFAULT
    }
    else {
      signallingType = com.zappware.chromecast.AdSignallingTypes.UNKNOWN
    }

    adPlaybackPreRoll = preRoll
  }

  //
  // Check if the playback position needs to be forced to the start of an ads block.
  //
  const validateRequestedSeekPosition = (time, currentTime) => {
    if (!isAdSkippingEnabled) return time
    console.log('adsHandler - Validating requested playback position', time, '...')
    const mediaInfo = playerManager.getMediaInformation()
    const customData = mediaInfo && mediaInfo.metadata && mediaInfo.metadata.customData && JSON.parse(mediaInfo.metadata.customData).customData
    const isInitialSeek = customData && time === customData.startOverTVBeforeTime
    console.log('adsHandler - isInitialSeek:', isInitialSeek)
    console.log('adsHandler - adPlaybackPreRoll:', adPlaybackPreRoll)

    if (isInitialSeek) {
      if (!adPlaybackPreRoll) return time
      const firstAdsBlock = findFirstAdsBlockInInterval(time - adPlaybackPreRoll, time)
      console.log('adsHandler - firstAdsBlock:', firstAdsBlock)
      if (!firstAdsBlock) return time
      const newTime = _.min([firstAdsBlock.adStartTime, time - adPlaybackPreRoll])
      if (newTime === 0) newTime += 0.1
      console.log('adsHandler returnTime:', returnTime)
      return returnTime
    }
    let updatedTime = time

    if (adPolicy) {
      // skipping not allowed
      if (!activeAd) {
        const jumpedBackward = currentTime >= time
        // ad blocks
        if (!jumpedBackward || isInitialSeek) {
          const firstAdsBlock = findFirstAdsBlock(time, currentTime)
          if (firstAdsBlock) {
            console.log('... found a unseen ads block, jumping to it.', firstAdsBlock)
            updatedTime = firstAdsBlock.adStartTime + 0.2 // +0.2 because when jumping to adStartTime exactly the player hangs for some currently unknown reason
          }
        }
      }
    }
    return updatedTime
  }

  const checkAdEnterExit = () => {
    if (!isAdSkippingEnabled) return
    const currentTime = com.zappware.chromecast.trickplayHandler.getCurrentTimeSec();
    if (activeAd && activeAd.adEndTime < currentTime) {
      handleAdsBlockExitEvent(activeAd);
    }
    if (activeAd && activeAd.adStartTime > currentTime) {
      activeAd = null;
    }

    if (!activeAd) {
      // new adblock entered?
      let newActiveAd = null
      adsBlocks.forEach(ad => {
        if (currentTime >= ad.adStartTime && currentTime <= ad.adEndTime) {
          newActiveAd = ad
        }
      })
      if (newActiveAd) handleAdsBlockEnterEvent(newActiveAd)
    }
  }

  const canSeek = (newPosition, currentTime) => {
    if (!isAdSkippingEnabled) return true
    const media = playerManager.getMediaInformation()
    const isVod = media && media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD

    if (signallingType === 'UNKNOWN') { // Block on channel-level
        if (isVod) return true

        if (position > currentTime) {
          com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('blockTrickPlayOnChannelLevel')
          return false
        } else {
          return true
        }
    } else {
      if (activeAd && newPosition > currentTime ) {
        com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('blockSkipAd')
        return false
      }
    }
    return true
  }

  const handleAdsBlockEnterEvent = (adsBlock) => {
    if (adPolicy) {
      activeAd = adsBlock
      console.log('adsHandler - Entered SCTE35 ad block:', adsBlock)
    }
  }

  const handleAdsBlockExitEvent = (adsBlock) => {
    console.log('adsHandler - Exiting and removing SCTE35 ad block:', adsBlock)
    removedAds[adsBlock.adId] = true
    removeAdsBlock(adsBlock)
    activeAd = null
  }

  const removeAdsBlock = (adsBlockToRemove) => {
    adsBlocks = adsBlocks.filter(adsBlock => adsBlock.adId != adsBlockToRemove.adId)
  }

  const  removeAdsBlocksInWindow = () => {
    if (adPolicy && adPolicy.allow_skip) return
    console.log('adsHandler - Removing all ads blocks in live viewed window')
    _.remove(adsBlocks, (adsBlock) => {
      return _.findIndex(adSkippingWindows, (window) => adsBlock.adStartTime >= window.startTime && adsBlock.adEndTime <= window.endTime) !== -1
    })
  }

  const addAdsBlock = (adId, adStartTime, adEndTime, adType) => {
    if(!adId) return
    if(removedAds[adId]) return  // already viewed ads block
    mediaInfo = playerManager.getMediaInformation()
    const customData = mediaInfo && mediaInfo.metadata && mediaInfo.metadata.customData && JSON.parse(mediaInfo.metadata.customData)
    if (customData && adStartTime > (new Date('2000').getTime())) {
        adStartTime -= customData.start
        adEndTime -= customData.start
    }
    const nextId = (adsBlocks.length === 0 ? 0 : _.last(adsBlocks).id + 1)
    const newAdsBlock = {
      id: nextId,
      adId: adId,
      adStartTime: adStartTime,
      adEndTime: adEndTime,
      adType: adType
    }

    if (adStartTime < 0) {
      return
    }

    // ignore ad blocks with duration 0.
    if (adStartTime === adEndTime) {
      console.log('adsHandler - Ignored new ad block since the duration is 0.', newAdsBlock)
      return
    }

    // ignore if already in the list.
    const alreadyExisting = findAdsBlock(adStartTime, adEndTime, adId)
    if (alreadyExisting) {
      console.log('adsHandler - Ignored new ad block: already in the list.', alreadyExisting)
      return
    }
    adsBlocks.push(newAdsBlock)
    console.log('adsHandler - Added ad block to the list', newAdsBlock)
  }

  const setAdsBlocks = (newAdBlocks) => {
    adsBlocks = []
    if (!newAdBlocks) return
    _.map(newAdBlocks, (ad) => {
      if (!ad) return
      if (ad instanceof Array) { // for A1Now Channel
        ad.map((a) => {
          addAdsBlock(a.adId, a.adStartTime, a.adEndTime, a.adType)
        })
      }
      addAdsBlock(ad.adId, ad.adStartTime, ad.adEndTime, ad.adType)
    })
    const playbackMode = getPlaybackMode()
    if (playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) removeAdsBlocksInWindow()

  }

  const getAdsBlocks = () => {
    return adsBlocks
  }

  //
  // AD BLOCK HELPERS
  //
  const findFirstAdsBlock = (time, currentTime) => {
    console.log('adsHandler - Finding ads before', time)
    return _.find(adsBlocks, (adsBlock) => (time > adsBlock.adStartTime && adsBlock.adEndTime > currentTime))
  }

  const findFirstAdsBlockInInterval = (startInterval, endInterval) => {
    console.log('adsHandler - Finding ads in interval', startInterval, endInterval)
    return _.find(adsBlocks, (adsBlock) => adsBlock.adEndTime >= startInterval && adsBlock.adStartTime <= endInterval)
  }

  const findAdsBlock = (startTime, endTime, adId) => _.find(adsBlocks, (adsBlock) => ((!adId || adsBlock.adId === adId) && adsBlock.adStartTime === startTime && adsBlock.adEndTime === endTime))

  const logAdsBlocks = () => { console.log('adsHandler - Ads Blocks', adsBlocks) }

  const reset = () => {
    console.log('adsHandler - RESET ads:')
    adsBlocks = [];
    activeAd = null;
    adPolicy = null;
    trickplayPolicy = null;
    removedAds = {}
    let playerState = com.zappware.chromecast.player.getState();
    if (playerState === com.zappware.chromecast.PlayerState.STOPPED) {
      adSkippingWindows = []
    }
  }

  const getAdSignallingType = () => {
    return signallingType
  }

  const init = () => {
    if (!isAdSkippingEnabled) return
    reset()
    let playbackMode = getPlaybackMode()
    console.log('adsHandler - init')
    if (playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV) {
      adSkippingWindows = [{}]
    }
  }

  const getPlaybackMode = () => {
    const media = playerManager.getMediaInformation()
    playbackMode = media._playbackMode
    return playbackMode
  }

  const  setTimingForViewedWindow = (currentTime) => {
    const windowForAdskipping = _.last(adSkippingWindows)
    let playbackMode = getPlaybackMode()
    if (playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV) {
      if (!windowForAdskipping.startTime) {
        windowForAdskipping.startTime = currentTime
      }
      if (windowForAdskipping.startTime) {
        if (windowForAdskipping.endTime === undefined || currentTime > windowForAdskipping.endTime) {
          windowForAdskipping.endTime = currentTime
        }
      }
    }
  }

  /* return the public functions */
  return {
    validateRequestedSeekPosition: validateRequestedSeekPosition,
    canSeek: canSeek,
    checkAdEnterExit: checkAdEnterExit,
    setPolicy: setPolicy,
    setAdsBlocks: setAdsBlocks,
    getAdsBlocks: getAdsBlocks,
    getAdSignallingType: getAdSignallingType,
    init: init,
    setTimingForViewedWindow: setTimingForViewedWindow
  }
}())

com.zappware.chromecast.AdSignallingTypes = {
  DEFAULT: 'DEFAULT',
  SCTE35_ZW_1: 'SCTE35_ZW_1',
  UNKNOWN: 'UNKNOWN'
}
