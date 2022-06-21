com.zappware.chromecast.trickplayPolicyHandler = (function () {

  let playbackMode = ''

  // Trickplay blocking restrictions
  const isTrickplayBlockingEnabled = CONFIG.trickplayBlockingEnabled || false
  let trickplayPolicy = null
  let lastLivePoint = null
  let pausePoint = null
  let trickplayRes = null

  const setPolicy = (trickplayRestrictions = null) => {
    trickplayRestrictions = ['PAUSE']
    if (!isTrickplayBlockingEnabled) return

    trickplayRes = trickplayRestrictions
    setTrickPlayRestrictions(trickplayRestrictions)
}

  const canSeek = (position) => {
    if (!isTrickplayBlockingEnabled) return
    const currentTime = getCurrentTimeSec()
    const media = playerManager.getMediaInformation()
    const isVod = media && media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
    const trickplayRestrictionPolicy = getTrickplayRestrictionPolicy()
    if (trickplayRestrictionPolicy) {
      if (isVod) return true
      return checkOnTrickplayPolicy(position, currentTime)
    }
    return true
  }

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
    trickplayPolicy = null;
  }

  const init = () => {
    if (!isTrickplayBlockingEnabled) return
    reset()
    getPlaybackMode()
  }

  const getPlaybackMode = () => {
    let media = playerManager.getMediaInformation()
    playbackMode = media._playbackMode
    return playbackMode
  }

  const setTrickPlayRestrictions = (trickplayRestrictions) => {
    const restrictions = isTrickplayRestricted()
    if (!restrictions) return

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
    console.log('bugg isTrickplayRestricted:', trickplayRes && trickplayRes !== null && trickplayRes !== undefined && !_.isEmpty(trickplayRes))
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
    console.log('bugg policy handler canPause:')
    if (!isTrickplayBlockingEnabled) return true
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    const previousMode = playbackMode
    if (mode === com.zappware.chromecast.PlaybackMode.LIVETV || (mode === com.zappware.chromecast.PlaybackMode.PLTV && previousMode === com.zappware.chromecast.PlaybackMode.LIVETV)) return true
    const trickplayPolicy = getTrickplayRestrictionPolicy()
    console.log('bugg trickplayPolicy:', trickplayPolicy)
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
          playerState && playerState !== com.zappware.chromecast.PlayerState.SEEKING && com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
          return playerState === com.zappware.chromecast.PlayerState.PAUSED ? true : false
    } else {
       return true
    }
  }

  const checkOnTrickplayPolicy = (position, currentTime) => {
    if (!trickplayPolicy || trickplayPolicy === null) return
    if (trickplayPolicy.allow_forward === false && position > currentTime) {
      com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
      return false
    } else if (trickplayPolicy.allow_backward === false && position < currentTime ) {
      com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
      return false
    }
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
    canSeek: canSeek,
    canPause: canPause,
    setPolicy: setPolicy,
    reset: reset,
    init: init,
    getTrickplayRestrictionPolicy: getTrickplayRestrictionPolicy,
    setLastLivePoint: setLastLivePoint,
    setPausePoint: setPausePoint,
    checkTrickplayRestrictionOnPLTV: checkTrickplayRestrictionOnPLTV,
    resetDragPosition: resetDragPosition,
    checkPauseResOnPLTV: checkPauseResOnPLTV,
    isTrickplayRestricted: isTrickplayRestricted
  }
}())

com.zappware.chromecast.TrickPlayRestriction = {
  PAUSE: 'PAUSE', // Indicates that pausing is not allowed.
  SKIP_FORWARD: 'SKIP_FORWARD', // Indicates that skipping and dragging forward (if applicable) is not allowed.
  SKIP_BACKWARD: 'SKIP_BACKWARD' // Indicates that skipping and dragging backward (if applicable) is not allowed.
}
