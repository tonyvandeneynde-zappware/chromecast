com.zappware.chromecast.trickplayPolicyHandler = (function () {

  const isTrickplayBlockingEnabled = CONFIG.trickplayBlockingEnabled || false
  let trickplayPolicy = {}
  let lastLivePoint = null
  let pausePoint = null
  let restricted = false

  const init = () => {
    trickplayPolicy = null
    lastLivePoint = null
    pausePoint = null
    restricted = false
  }

  const setPolicy = (restrictions = null) => {
    setTrickPlayRestrictions(restrictions)
  }

  const hasRestrictions = () => {
    return isTrickplayBlockingEnabled && restricted
  }

  const canSeek = (newPosition, currentTime) => {
    const media = playerManager.getMediaInformation()
    const isVod = media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
    const trickplayPolicy = getTrickplayRestrictionPolicy()

    if (!trickplayPolicy) return true

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
    if (!trickplayPolicy) return true
    if (mode === com.zappware.chromecast.PlaybackMode.LIVETV) return true
    if (mode === com.zappware.chromecast.PlaybackMode.VOD) return true

    if (trickplayPolicy.allow_pause === false) {
      const playerState = com.zappware.chromecast.player.getState();
      if (playerState && playerState !== com.zappware.chromecast.PlayerState.SEEKING) {
        com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
      }
      return playerState === com.zappware.chromecast.PlayerState.PAUSED ? true : false
    } else {
      return true
    }
  }

  const validateRequestedPlaybackStartPositionForPLTV = (position) => {
    const currentTime = position || com.zappware.chromecast.trickplayHandler.getCurrentTimeSec()
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    if (mode === com.zappware.chromecast.PlaybackMode.PLTV && currentTime !== null && lastLivePoint !== null) {
      if (lastLivePoint && currentTime < lastLivePoint && trickplayPolicy.allow_backward === false) {
        com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
        lastLivePoint = null
        return lastLivePoint
      } else if (lastLivePoint && currentTime > lastLivePoint && trickplayPolicy.allow_forward === false) {
        com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
        lastLivePoint = null
        return lastLivePoint
      } else {
        lastLivePoint = null
      }
    }
    return position
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
    validateRequestedPlaybackStartPositionForPLTV: validateRequestedPlaybackStartPositionForPLTV
  }
}())

com.zappware.chromecast.TrickPlayRestriction = {
  PAUSE: 'PAUSE', // Indicates that pausing is not allowed.
  SKIP_FORWARD: 'SKIP_FORWARD', // Indicates that skipping and dragging forward (if applicable) is not allowed.
  SKIP_BACKWARD: 'SKIP_BACKWARD' // Indicates that skipping and dragging backward (if applicable) is not allowed.
}
