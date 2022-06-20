com.zappware.chromecast.trickplayPolicyHandler = (function () {

  const isTrickplayBlockingEnabled = CONFIG.trickplayBlockingEnabled || false
  let trickplayPolicy = {}
  let lastLivePoint = null
  let pausePoint = null
  let restricted = false
  let playbackMode = ''

  const init = () => {
    trickplayPolicy = {
      allow_forward: true,
      allow_backward: true,
      allow_pause: true
    }
    lastLivePoint = null
    pausePoint = null
    restricted = false
    const media = playerManager.getMediaInformation()
    playbackMode = media._playbackMode
  }

  const setPolicy = (restrictions = null) => {
    setTrickPlayRestrictions(restrictions)
  }

  const hasRestrictions = () => {
    return isTrickplayBlockingEnabled && restricted
  }

  const canSeek = (newPosition, currentTime) => {
    const isVod = playbackMode === com.zappware.chromecast.PlaybackMode.VOD
    const trickplayPolicy = getTrickplayRestrictionPolicy()

    if (isVod) return true

    if (trickplayPolicy.allow_forward === false && newPosition > currentTime) {
      com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
      return false
    }

    if (trickplayPolicy.allow_backward === false && newPosition < currentTime) {
      com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
      return false
    }

    return true
  }

  const canPause = () => {
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    const previousMode = playbackMode
    playbackMode = mode
    if (mode === com.zappware.chromecast.PlaybackMode.LIVETV || (mode === com.zappware.chromecast.PlaybackMode.PLTV && previousMode === com.zappware.chromecast.PlaybackMode.LIVETV)) return true
    const isVod = media && mode === com.zappware.chromecast.PlaybackMode.VOD
    if (trickplayPolicy.allow_pause === false) {
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

  const checkTrickplayRestrictionOnPLTV = (position) => {
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

  const checkPauseResOnPLTV = (mediaInfo) => {
    const pltvMode = mediaInfo && mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV
    const pauseRes = trickplayPolicy && trickplayPolicy.allow_pause === false
    if (trickplayPolicy && pltvMode && pauseRes) {
      return true
    } else {
      return false
    }
  }

  const setLastLivePoint = (position) => {
    lastLivePoint = position
  }

  const setPausePoint = (position) => {
    pausePoint = position
  }

  //////////////////////////////
  // Private Methods
  //////////////////////////////

  const setTrickPlayRestrictions = (restrictions) => {
    if (!restrictions) return
    if (!_.isEmpty(restrictions)) restricted = true

    const forwardRestricted = _.includes(restrictions, (com.zappware.chromecast.TrickPlayRestriction.SKIP_FORWARD))
    const backwardRestricted = _.includes(restrictions, (com.zappware.chromecast.TrickPlayRestriction.SKIP_BACKWARD))
    const pauseRestricted = _.includes(restrictions, (com.zappware.chromecast.TrickPlayRestriction.PAUSE))

    trickplayPolicy = {
      allow_forward: !forwardRestricted,
      allow_backward: !backwardRestricted,
      allow_pause: !pauseRestricted
    }
  }

  const getPausePoint = () => {
    return pausePoint
  }

  const getTrickplayRestrictionPolicy = () => trickplayPolicy

  /* return the public functions */
  return {
    init: init,
    setPolicy: setPolicy,
    hasRestrictions: hasRestrictions,
    canSeek: canSeek,
    canPause: canPause,
    setLastLivePoint: setLastLivePoint,
    setPausePoint: setPausePoint,
    checkPauseResOnPLTV: checkPauseResOnPLTV,
    checkTrickplayRestrictionOnPLTV: checkTrickplayRestrictionOnPLTV
  }
}())

com.zappware.chromecast.TrickPlayRestriction = {
  PAUSE: 'PAUSE', // Indicates that pausing is not allowed.
  SKIP_FORWARD: 'SKIP_FORWARD', // Indicates that skipping and dragging forward (if applicable) is not allowed.
  SKIP_BACKWARD: 'SKIP_BACKWARD' // Indicates that skipping and dragging backward (if applicable) is not allowed.
}
