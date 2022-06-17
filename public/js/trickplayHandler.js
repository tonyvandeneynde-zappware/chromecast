com.zappware.chromecast.trickplayHandler = (function () {

  const init = () => {
    com.zappware.chromecast.trickplayPolicyHandler.init()
    com.zappware.chromecast.adsHandler.init()
  }

  const setPolicies = (adPlayBackRestrictions, adSignallingType, trickplayPolicy) => {
    com.zappware.chromecast.trickplayPolicyHandler.setPolicy(trickplayPolicy)
    com.zappware.chromecast.adsHandler.setPolicy(adPlayBackRestrictions, adSignallingType)
  }

  const canSeek = (newPosition) => {
    const currentTime = getCurrentTimeSec()

    console.log('bugg DO canSeek ?:')
    if (com.zappware.chromecast.trickplayPolicyHandler.hasRestrictions()) {
      const canSeek = com.zappware.chromecast.trickplayPolicyHandler.canSeek(newPosition, currentTime)
      console.log('bugg canSeek trickplayhandler:', canSeek)
      return canSeek
    } else {
      const canSeek = com.zappware.chromecast.adsHandler.canSeek(newPosition, currentTime)
      console.log('bugg canSeek adshandler:', canSeek)
      return canSeek
    }
  }

  const canPause = () => {
    console.log('bugg canPause ?:')
    if (com.zappware.chromecast.trickplayPolicyHandler.hasRestrictions()) {
      return com.zappware.chromecast.trickplayPolicyHandler.canPause()
    } else {
      return true
    }
  }

  const validateRequestedPlaybackPosition = (newPosition) => {
    const currentTime = getCurrentTimeSec()

    if (com.zappware.chromecast.trickplayPolicyHandler.hasRestrictions()) {
      return com.zappware.chromecast.trickplayPolicyHandler.validateRequestedPlaybackPosition(newPosition, currentTime)
    } else {
      return com.zappware.chromecast.adsHandler.validateRequestedPlaybackPosition(newPosition, currentTime)
    }
  }

  /////////////////////
  // Private Methods
  /////////////////////

  const getCurrentTimeSec = () => {
    const playbackMode = playerManager.getMediaInformation()._playbackMode
    let currentTime
    if (playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
      currentTime = playerManager.getMediaInformation().startAbsoluteTime + playerManager.getCurrentTimeSec()
    } else {
      currentTime = playerManager.getCurrentTimeSec()
    }
    return currentTime
  }

  const showBlockTrickplayMessage = (message) => {
    const blocktrickPlayInfo = document.querySelector('#blocktrickplayInfo')
    if (blocktrickPlayInfo.innerText === '') {
      blocktrickPlayInfo.innerText = com.zappware.chromecast.globaltext.getString(message)
      setTimeout(() => {
        blocktrickPlayInfo.innerText = ''
      }, 7000)
    }
  }


  /* return the public functions */
  return {
    init: init,
    setPolicies: setPolicies,
    canSeek: canSeek,
    getCurrentTimeSec: getCurrentTimeSec,
    validateRequestedPlaybackPosition: validateRequestedPlaybackPosition,
    canPause: canPause,
    showBlockTrickplayMessage: showBlockTrickplayMessage
  }
}())