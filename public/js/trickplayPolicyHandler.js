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
    console.log('bugg trickplayHandler setPolicy:', setPolicy)
    restrictions = ['PAUSE', 'SKIP_FORWARD']
    setTrickPlayRestrictions(restrictions)
  }

  const hasRestrictions = () => {
    return isTrickplayBlockingEnabled && restricted
  }

  const canSeek = (newPosition, currentTime) => {
    console.log('bugg =-0=0=0=-00=0=0 canSeek:')
    console.log('bugg currentTime:', currentTime)
    console.log('bugg newPosition:', newPosition)
    const media = playerManager.getMediaInformation()
    const isVod = media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
    const trickplayPolicy = getTrickplayRestrictionPolicy()
    console.log('bugg trickplayPolicy:', trickplayPolicy)

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
    console.log('bugg trickplaypolicy handler canPause -=0=00-==-0=- :')
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    console.log('bugg mode:', mode)
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
    console.log('bugg validateRequestedPlaybackStartPositionForPLTV -=0=0-=0=-0=0=0= :')
    const currentTime = position || com.zappware.chromecast.trickplayHandler.getCurrentTimeSec()
    console.log('bugg currentTime:', currentTime)
    const media = playerManager.getMediaInformation()
    const mode = media._playbackMode
    let updatedPosition = position
    console.log('bugg mode:', mode)
    console.log('bugg lastLivePoint:', lastLivePoint)
    console.log('bugg trickplayPolicy:', trickplayPolicy)
    if (mode === com.zappware.chromecast.PlaybackMode.PLTV && currentTime !== null && lastLivePoint !== null) {
      if (lastLivePoint && currentTime < lastLivePoint && trickplayPolicy.allow_backward === false) {
        console.log('bugg check 1')
        com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
        updatedPosition = lastLivePoint
        lastLivePoint = null
        return updatedPosition
      } else if (lastLivePoint && currentTime > lastLivePoint && trickplayPolicy.allow_forward === false) {
        console.log('bugg check 2')
        com.zappware.chromecast.trickplayHandler.showBlockTrickplayMessage('trickPlayRestrictions')
        updatedPosition = lastLivePoint
        lastLivePoint = null
        return updatedPosition
      } else {
        lastLivePoint = null
      }
    }
    return updatedPosition
  }

  const setLastLivePoint = (position) => {
    console.log('bugg setLastLivePoint:', position)
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
