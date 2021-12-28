/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.adshandler = (function () {

  let activeAd = null

  let adPolicy = null

  let signallingType = 'DEFAULT'

  let adsBlocks = []

  let isAdSkippingEnabled = CONFIG.adSkippingEnabled || false

  let removedAds = {}

  let initialPosition = null

  let adSkippingWindows = []

  let playbackMode = ''

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
  const setAdPolicy = (adPlayBackRestrictions, adSignallingType) => {
    if (!isAdSkippingEnabled) return
    _.map(adPlayBackRestrictions, res => {
      if (res === 'BLOCK_SKIP_AND_FAST_FORWARD') {
        // This is temp fix to align all platforms
        //  adPolicy = {
        //   allow_skip: true, // allow jumping over an ad block entirely
        //   allow_forward: false, // allow going forward during an ad block
        //   allow_backward: true, // allow going backward during an ad block
        //   allow_backward_into_ad: true // allow jumping backward into an ad block, without being redirected to the start of the ad block
        // }

        // This is what is should be eventually
        adPolicy = {
          allow_skip: false, // allow jumping over an ad block entirely
          allow_forward: false, // allow going forward during an ad block
          allow_backward: true, // allow going backward during an ad block
          allow_backward_into_ad: true // allow jumping backward into an ad block, without being redirected to the start of the ad block
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
    signallingType = com.zappware.chromecast.AdSignallingTypes.DEFAULT

}

  //
  // Check if the playback position needs to be forced to the start of an ads block.
  //
  const validateRequestedPlaybackPosition = (time, media) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Validating requested playback position', time, '...')
    console.log('adshandler adsBlocks:', adsBlocks)
    console.log('adshandler adSkippingWindows:', adSkippingWindows)
    if (initialPosition === null) {
      setInitialPosition(time)
    }
    let updatedTime = time

    if (adPolicy) {
      // skipping not allowed
      const jumpedBackward = getCurrentTimeSec() >= time
      if (!activeAd) {
        // ad blocks
        if (!jumpedBackward) {
          console.log('adshandler playerManager.getCurrentTimeSec():', getCurrentTimeSec())
          const firstAdsBlock = findFirstAdsBlock(time, getCurrentTimeSec())
          if (firstAdsBlock) {
            console.log('... found a unseen ads block, jumping to it.', firstAdsBlock)
            updatedTime = firstAdsBlock.adStartTime
          }
        }
      }
    }
    console.log('adshandler updatedTime:', updatedTime)
    return updatedTime

  }

  const checkAdEnterExit = () => {
    if (!isAdSkippingEnabled) return
    const currentTime = getCurrentTimeSec();
    // console.log('adshandler ee checkAdEnterExit:', currentTime)
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
      // console.log('adshandler ee newActiveAd:', newActiveAd)
      if (newActiveAd) handleAdsBlockEnterEvent(newActiveAd)
    }
  }

  const canSeek = (position) => {
    console.log('adshandler canSeek:', position)
    if (!isAdSkippingEnabled) return
    const currentTime = getCurrentTimeSec()
    if (signallingType === 'UNKNOWN') { // Block on channel-level
      const shouldBlockTrickPlay =  blockTrickPlay(position, currentTime)
      return shouldBlockTrickPlay ? false : true
    } else {
      console.log('adshandler activeAd:', activeAd)
      if (activeAd && position > currentTime ) {
        showAdSkippingMessage()
        return false
      }
    }
    return true
  }

  const handleAdsBlockEnterEvent = (adsBlock) => {
    if (!isAdSkippingEnabled) return
    if (adPolicy) {
      activeAd = adsBlock
      console.log('adsHandler - Entered SCTE35 ad block:', adsBlock)
    }
  }

  const handleAdsBlockExitEvent = (adsBlock) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Exiting and removing SCTE35 ad block:', adsBlock)
    removedAds[adsBlock.adId] = true
    removeAdsBlock(adsBlock)
    activeAd = null
  }

  const removeAdsBlock = (adsBlockToRemove) => {
    adsBlocks = adsBlocks.filter(adsBlock => adsBlock.adId != adsBlockToRemove.adId)
  }

  const removePastAdsBlocks = () => {
    const currentTime = getCurrentTimeSec()
    adsBlocks = adsBlocks.filter(adsBlock => adsBlock.adEndTime > currentTime)
  }

  const  removeAdsBlocksInWindow = () => {
    console.log('adshandler removeAdsBlocksInWindow before:', adsBlocks)
    if (!isAdSkippingEnabled) return
    if (adPolicy && adPolicy.allow_skip) return
    console.log('adsHandler - Removing all ads blocks in live viewed window')
    _.remove(adsBlocks, (adsBlock) => {
      return _.findIndex(adSkippingWindows, (window) => adsBlock.adStartTime >= window.startTime && adsBlock.adEndTime <= window.endTime) !== -1
    })
    console.log('adshandler removeAdsBlocksInWindow after:', adsBlocks)
  }

  const showAdSkippingMessage = () => {
    if (!isAdSkippingEnabled) return
    if (document.querySelector('#adInfo').innerText === '')
    {
      document.querySelector('#adInfo').innerText = com.zappware.chromecast.globaltext.getString('blockSkipAd');
      setTimeout(() => {
        document.querySelector('#adInfo').innerText = '';
      }, 7000);
    }
  }

  const addAdsBlock = (adId, adStartTime, adEndTime, adType) => {
    if (!isAdSkippingEnabled) return
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
    console.log('adshandler newAdBlocks:', newAdBlocks)
    adsBlocks = []
    if (!isAdSkippingEnabled) return
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

  const setInitialPosition = (time) => {
    initialPosition = time
  }
  //
  // AD BLOCK HELPERS
  //
  const findFirstAdsBlock = (time, currentTime) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Finding ads before', time)
    return _.find(adsBlocks, (adsBlock) => (time > adsBlock.adStartTime && adsBlock.adEndTime > currentTime))
  }

  const findAdsBlock = (startTime, endTime, adId) => _.find(adsBlocks, (adsBlock) => ((!adId || adsBlock.adId === adId) && adsBlock.adStartTime === startTime && adsBlock.adEndTime === endTime))

  const getAdsBlockForTime = (time) => _.find(adsBlocks, (adsBlock) => (adsBlock.adStartTime <= time && time <= adsBlock.adEndTime))

  const logAdsBlocks = () => { console.log('adsHandler - Ads Blocks', adsBlocks) }

  const getCurrentTimeSec = () => {
    const playbackMode = getPlaybackMode()
    let currentTime
    if (playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
      currentTime = playerManager.getMediaInformation().startAbsoluteTime + playerManager.getCurrentTimeSec()
    } else {
      currentTime = playerManager.getCurrentTimeSec()
    }
    return currentTime
  }

  const reset = () => {
    console.log('adshandler - RESET ads:')
    if (!isAdSkippingEnabled) return
    adsBlocks = [];
    activeAd = null;
    adPolicy = null;
    removedAds = {}
    initialPosition = null
    let playerState = com.zappware.chromecast.player.getState();
    if (playerState === com.zappware.chromecast.PlayerState.STOPPED) {
      adSkippingWindows = []
    }
  }

  /** Trickplay block on channel-level */
  const showBlockTrickplayMessage = () => {
    const blocktrickPlayInfo = document.querySelector('#blocktrickplayInfo')
    if (blocktrickPlayInfo.innerText === '') {
      blocktrickPlayInfo.innerText = com.zappware.chromecast.globaltext.getString('blockTrickPlayOnChannelLevel');
      setTimeout(() => {
        blocktrickPlayInfo.innerText = '';
      }, 7000);
    }
    return blocktrickPlayInfo
  }

  const blockTrickPlay = (position, currentTime) => {
    if (position > currentTime) {
      showBlockTrickplayMessage()
      return true
    } else {
      return false
    }
  }

  const getAdSignallingType = () => {
    return signallingType
  }

  const initAdsHandler = () => {
    if (!isAdSkippingEnabled) return
    reset()
    let playbackMode = getPlaybackMode()
    console.log('adshandler - initAdsHandler ')
    if (playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV) {
      adSkippingWindows = [{}]
    }

  }

  const getPlaybackMode = () => {
    let media = playerManager.getMediaInformation()
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
    validateRequestedPlaybackPosition: validateRequestedPlaybackPosition,
    canSeek: canSeek,
    checkAdEnterExit: checkAdEnterExit,
    setAdPolicy: setAdPolicy,
    setAdsBlocks: setAdsBlocks,
    reset: reset,
    getAdSignallingType: getAdSignallingType,
    initAdsHandler: initAdsHandler,
    setTimingForViewedWindow: setTimingForViewedWindow
  }

}())

com.zappware.chromecast.AdSignallingTypes = {
  DEFAULT: 'DEFAULT',
  SCTE35_ZW_1: 'SCTE35_ZW_1',
  UNKNOWN: 'UNKNOWN'
};

///////////////////////////////////////////////////////////////////////////////////////////////////
