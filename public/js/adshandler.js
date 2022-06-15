/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.adshandler = (function () {

  const isAdSkippingEnabled = true // CONFIG.adSkippingEnabled || false

  let activeAd = null

  let adPolicy = null

  let signallingType = 'DEFAULT'

  let adsBlocks = []

  let removedAds = {}

  let adSkippingWindows = []

  let playbackMode = ''

  // Trickplay blocking restrictions
  const isTrickplayBlockingEnabled = CONFIG.trickplayBlockingEnabled || false
  let trickplayPolicy = null
  let lastLivePoint = null
  let pausePoint = null
  let trickplayRes = null

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
  const setAdPolicy = (adPlayBackRestrictions, adSignallingType, trickplayRestrictions = null) => {
    if (!isAdSkippingEnabled || !isTrickplayBlockingEnabled) return
    /**
     *If for a given timeshift mode and device category trick modes
     are blocked on the channel level, all trick modes restrictions
     on the ad level are dropped for this timeshift mode and device category.
     */
     trickplayRestrictions = ['SKIP_FORWARD', 'REWIND', 'FAST_FORWARD']
    if (!trickplayRestrictions) {
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
    }

    // trickplayRestrictions
    trickplayRes = trickplayRestrictions
    setTrickPlayRestrictions(trickplayRestrictions)
}

  //
  // Check if the playback position needs to be forced to the start of an ads block.
  //
  const validateRequestedPlaybackPosition = (time) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Validating requested playback position', time, '...')
    const mediaInfo = playerManager.getMediaInformation()
    const customData = mediaInfo && mediaInfo.metadata && mediaInfo.metadata.customData && JSON.parse(mediaInfo.metadata.customData).customData
    if (customData && customData.startOverTVBeforeTime) {
      if (time === customData.startOverTVBeforeTime) return time
    }
    let updatedTime = time

    if (adPolicy) {
      // skipping not allowed
      if (!activeAd) {
        const jumpedBackward = getCurrentTimeSec() >= time
        // ad blocks
        if (!jumpedBackward) {
          const firstAdsBlock = findFirstAdsBlock(time, getCurrentTimeSec())
          if (firstAdsBlock) {
            console.log('... found a unseen ads block, jumping to it.', firstAdsBlock)
            updatedTime = firstAdsBlock.adStartTime + 0.2 // +0.2 because when jumping to adStartTime exactly the player hangs for some currently unknown reason
          }
        }
      }
    }
    return updatedTime
  }

  const resetTrickplayRestriction = () => {
    reset()
    trickplayPolicy = null
  }
  const checkAdEnterExit = () => {
    if (!isAdSkippingEnabled) return
    const currentTime = getCurrentTimeSec();
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

  const canSeek = (position) => {
    console.log('buuggg DO canSeek:')
    if (!isAdSkippingEnabled || !isTrickplayBlockingEnabled) return
    const currentTime = getCurrentTimeSec()
    const media = playerManager.getMediaInformation()
    const isVod = media && media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
    const trickplayRestrictionPolicy = getTrickplayRestrictionPolicy()
    console.log('buggg trickplayRestrictionPolicy:', trickplayRestrictionPolicy)
    if (trickplayRestrictionPolicy) {
      console.log('buggg isVod:', isVod)
      if (isVod) return true
      const canSeek = checkOnTrickplayPolicy(position, currentTime)
      console.log('buggg canSeek:', canSeek)
      return canSeek
    }
    console.log('buggg signallingType:', signallingType)
    if (signallingType === 'UNKNOWN') { // Block on channel-level
        if (!isVod) {
          console.log('buggg shouldBlockTrickPlay:', shouldBlockTrickPlay)
          const shouldBlockTrickPlay =  blockTrickPlay(position, currentTime)
          console.log('buggg shouldBlockTrickPlay:', shouldBlockTrickPlay)
          return shouldBlockTrickPlay ? false : true
        } else {
          return true
        }
    } else {
      if (activeAd && position > currentTime ) {
        showAdSkippingMessage()
        return false
      }
    }
    console.log('buggg return true at end:')
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
    if (!isAdSkippingEnabled) return
    if (adPolicy && adPolicy.allow_skip) return
    console.log('adsHandler - Removing all ads blocks in live viewed window')
    _.remove(adsBlocks, (adsBlock) => {
      return _.findIndex(adSkippingWindows, (window) => adsBlock.adStartTime >= window.startTime && adsBlock.adEndTime <= window.endTime) !== -1
    })
  }

  const showAdSkippingMessage = () => {
    if (!isAdSkippingEnabled  || !isTrickplayBlockingEnabled) return
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

  const getAdsBlocks = () => {
    return adsBlocks
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
    if (!isAdSkippingEnabled || !isTrickplayBlockingEnabled) return
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

  /** Trickplay block on channel-level */
  const showBlockTrickplayMessage = () => {
    const blocktrickPlayInfo = document.querySelector('#blocktrickplayInfo')
    if (blocktrickPlayInfo.innerText === '') {
      if (trickplayPolicy && trickplayPolicy !== null) {
        blocktrickPlayInfo.innerText = com.zappware.chromecast.globaltext.getString('trickPlayRestrictions');
      } else {
        blocktrickPlayInfo.innerText = com.zappware.chromecast.globaltext.getString('blockTrickPlayOnChannelLevel');
      }
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
    if (!isAdSkippingEnabled || !isTrickplayBlockingEnabled) return
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
    if (!isAdSkippingEnabled) return
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


    /****************************************************/
    // trickplayRestrition
    /****************************************************/
  const setTrickPlayRestrictions = (trickplayRestrictions) => {
    const restrictions = isTrickplayRestricted()
    if (!restrictions) return
    /**
     * trickplay restriction possibilities
     * ['SKIP_FORWARD','SKIP_BACKWARD', 'PAUSE']
     * ['SKIP_FORWARD','SKIP_BACKWARD']
     * ['SKIP_FORWARD']
     * ['SKIP_BACKWARD']
     * ['PAUSE']
     * ['SKIP_FORWARD', 'PAUSE']
     * ['SKIP_BACKWARD', 'PAUSE']
     *
     */
    const forwardRestricted = _.includes(trickplayRestrictions, (com.zappware.chromecast.TrickPlayRestriction.SKIP_FORWARD))
    const backwardRestricted = _.includes(trickplayRestrictions, (com.zappware.chromecast.TrickPlayRestriction.SKIP_BACKWARD))
    const pauseRestricted = _.includes(trickplayRestrictions, (com.zappware.chromecast.TrickPlayRestriction.PAUSE))
    trickplayPolicy = {
      allow_forward: !forwardRestricted,
      allow_backward: !backwardRestricted,
      allow_pause: !pauseRestricted
    }
  }

  const isTrickplayRestricted = () => {
    if (!isTrickplayBlockingEnabled) return false
    return trickplayRes && trickplayRes !== null && trickplayRes !== undefined && !_.isEmpty(trickplayRes)
  }

  const setLastLivePoint = (position) => {
    lastLivePoint = position
  }

  const setPausePoint = (position) => {
    pausePoint = position
  }

  const getPausePoint = () => {
    return pausePoint
 }

  const getLastLivePoint = () => {
     return lastLivePoint
  }

  const getTrickplayRestrictionPolicy = () => trickplayPolicy

  const canPause = () => {
    if (!isTrickplayBlockingEnabled) return true
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    const previousMode = playbackMode
    if (mode === com.zappware.chromecast.PlaybackMode.LIVETV || (mode === com.zappware.chromecast.PlaybackMode.PLTV && previousMode === com.zappware.chromecast.PlaybackMode.LIVETV)) return true
    const trickplayPolicy = getTrickplayRestrictionPolicy()
    if (!trickplayPolicy) return true
    const isVod = media && media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
    if (trickplayPolicy && trickplayPolicy.allow_pause === false) {
          if (isVod) return true
          const playerState = com.zappware.chromecast.player.getState();
          const pausePoint = getPausePoint()
          if (mode === com.zappware.chromecast.PlaybackMode.PLTV && pausePoint) {
            setPausePoint(null)
            return true
          }
          playerState && playerState !== com.zappware.chromecast.PlayerState.SEEKING && com.zappware.chromecast.adshandler.showBlockTrickplayMessage()
          return playerState === com.zappware.chromecast.PlayerState.PAUSED ? true : false
    } else {
       return true
    }
  }

  const checkOnTrickplayPolicy = (position, currentTime) => {
    console.log('buggg checkOnTrickplayPolicy:', position, currentTime)
    if (!trickplayPolicy || trickplayPolicy === null) return
    if (trickplayPolicy.allow_forward === false && position > currentTime) {
      console.log('buggg trickplayPolicy.allow_forward not allowed:')
      showBlockTrickplayMessage()
      return false
    } else if (trickplayPolicy.allow_backward === false && position < currentTime ) {
      console.log('buggg trickplayPolicy.allow_backward not allowed:')
      showBlockTrickplayMessage()
      return false
    }
    console.log('buggg return true at end of checkOnTrickplayPolicy:')
    return true
  }

  const checkTrickplayRestrictionOnPLTV = (position) => {
    if (!isTrickplayBlockingEnabled) return
    const restrictions = getTrickplayRestrictionPolicy()
    if (!restrictions) return
    const currentTime = position || getCurrentTimeSec()
    const lastLivePoint = getLastLivePoint()
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    let updatedPosition = null
    if (mode === com.zappware.chromecast.PlaybackMode.PLTV && currentTime !== null && lastLivePoint !== null) {
      if (lastLivePoint && currentTime < lastLivePoint  && trickplayPolicy.allow_backward === false) {
        updatedPosition = lastLivePoint
        return trickplayResMessage(updatedPosition)
      } else if (lastLivePoint && currentTime > lastLivePoint && trickplayPolicy.allow_forward === false) {
        updatedPosition = lastLivePoint
        return trickplayResMessage(updatedPosition)
      } else {
        resetDragPosition()
      }
    } else {
      return updatedPosition
    }
  }

  const trickplayResMessage = (updatedPosition) => {
    showAdSkippingMessage()
    resetDragPosition()
    return updatedPosition
  }
  const resetDragPosition = () => {
    lastLivePoint = null
  }

  const checkPauseResOnPLTV = (mediaInfo) => {
    const pltvMode = mediaInfo && mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV
    const restrictions = getTrickplayRestrictionPolicy()
    const pauseRes = restrictions && restrictions.allow_pause === false
    if (restrictions && pltvMode && pauseRes){
      return true
    } else {
      return false
    }
  }


  /* return the public functions */
  return {
    validateRequestedPlaybackPosition: validateRequestedPlaybackPosition,
    canSeek: canSeek,
    canPause: canPause,
    checkAdEnterExit: checkAdEnterExit,
    setAdPolicy: setAdPolicy,
    setAdsBlocks: setAdsBlocks,
    getAdsBlocks: getAdsBlocks,
    reset: reset,
    getAdSignallingType: getAdSignallingType,
    initAdsHandler: initAdsHandler,
    setTimingForViewedWindow: setTimingForViewedWindow,
    getTrickplayRestrictionPolicy: getTrickplayRestrictionPolicy,
    showBlockTrickplayMessage: showBlockTrickplayMessage,
    resetTrickplayRestriction: resetTrickplayRestriction,
    setLastLivePoint: setLastLivePoint,
    setPausePoint: setPausePoint,
    checkTrickplayRestrictionOnPLTV: checkTrickplayRestrictionOnPLTV,
    resetDragPosition: resetDragPosition,
    checkPauseResOnPLTV: checkPauseResOnPLTV
  }

}())

com.zappware.chromecast.AdSignallingTypes = {
  DEFAULT: 'DEFAULT',
  SCTE35_ZW_1: 'SCTE35_ZW_1',
  UNKNOWN: 'UNKNOWN'
};

com.zappware.chromecast.TrickPlayRestriction = {
  PAUSE: 'PAUSE', // Indicates that pausing is not allowed.
  SKIP_FORWARD: 'SKIP_FORWARD', // Indicates that skipping and dragging forward (if applicable) is not allowed.
  SKIP_BACKWARD: 'SKIP_BACKWARD' // Indicates that skipping and dragging backward (if applicable) is not allowed.
};

///////////////////////////////////////////////////////////////////////////////////////////////////
