/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.adshandler = (function () {

  let activeAd = null

  let adPolicy = null

  let adsBlocks = []

  let isAdSkippingEnabled = CONFIG.adSkippingEnabled || false

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
  const setAdPolicy = (adPlayBackRestrictions) => {
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
        allow_backward_into_ad: false // allow jumping backward into an ad block, without being redirected to the start of the ad block
      }
    } else {
      adPolicy = undefined
    }
  })
}

  //
  // Check if the playback position needs to be forced to the start of an ads block.
  //
  const validateRequestedPlaybackPosition = (time, media) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Validating requested playback position', time, '...')
    let updatedTime = time

    if (adPolicy) {
      // skipping not allowed
      if (!adPolicy.allow_skip) {
        // ad blocks
        const firstAdsBlock = findFirstAdsBlock(time)
        if (firstAdsBlock) {
          console.log('... found a unseen ads block, jumping to it.', firstAdsBlock)
          updatedTime = firstAdsBlock.adStartTime
        }
      } else { // skipping allowed
        // check if the requested time is in an ads block and from which direction it is entered
        const jumpedBackward = getCurrentTimeSec() > time
        if (activeAd) {
          if (jumpedBackward && adPolicy.allow_backward_into_ad) {
            console.log('... jumped backward into an ads block, this is allowed.')
            return time
          } else {
            console.log('... jumped into an ads block, playing ads block from start.')
            updatedTime = activeAd.adStartTime
          }
        }
      }
    }
    return updatedTime
  }

  const checkAdEnterExit = () => {
    console.log('checkAdEnterExit:')
    if (!isAdSkippingEnabled) return
    const currentTime = getCurrentTimeSec()
    console.log('currentTime:', currentTime)
    removePastAdsBlocks()
    adsBlocks.filter((adsBlock) => {
      adsBlock.adEndTime > currentTime
    })
    
    let newActiveAd = null
    adsBlocks.forEach(ad => {
      if (currentTime >= ad.adStartTime && currentTime <= ad.adEndTime) {
        newActiveAd = ad
      }
    });
    if (!activeAd && newActiveAd || (activeAd && newActiveAd && activeAd.id !== newActiveAd.id)) {
      console.log('currentTime:', currentTime)
      console.log('newActiveAd:', newActiveAd)
      console.log('activeAd:', activeAd)
      // new adblock entered
      handleAdsBlockEnterEvent(newActiveAd)
    }
    if (activeAd && activeAd.adEndTime < currentTime && !newActiveAd) {
      handleAdsBlockExitEvent(activeAd)
    }
    return
  }

  const canSeek = (position) => {
    if (!isAdSkippingEnabled) return
    const currentTime = getCurrentTimeSec()
    if (activeAd && position > currentTime ) {
      showAdSkippingMessage()
      return false
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
    activeAd = null
  }

  removePastAdsBlocks = () => {
    const currentTime = getCurrentTimeSec()
    adsBlocks = adsBlocks.filter(adsBlock => adsBlock.adEndTime < currentTime)
  }

  const removeAdsBlock = (adsBlockToRemove) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Removing ads block with startTime', adsBlockToRemove.adStartTime)
    _.remove(adsBlocks, (adsBlock) => {
      return (adsBlock.adStartTime === adsBlockToRemove.adStartTime && adsBlock.adEndTime === adsBlockToRemove.adEndTime)
    })
    activeAd = null
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
    console.log('addAdsBlock:', addAdsBlock)
    if (!isAdSkippingEnabled) return
    if(!adId) return
    mediaInfo = playerManager.getMediaInformation()
    console.log('adshandler - mediaInfo:', mediaInfo)
    if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
      mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV ||
      mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.STARTOVER) {
        const customData = JSON.parse(mediaInfo.metadata.customData)
        console.log('customData:', customData)
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

    if (getCurrentTimeSec() > adEndTime) {
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
    console.log('testtest adsHandler - Added ad block to the list', newAdsBlock)
  }

  const addAdsBlocks = (newAdBlocks) => {
    console.log('addAdsBlocks:', newAdBlocks)
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
  }
  //
  // AD BLOCK HELPERS
  //
  const findFirstAdsBlock = (time) => {
    if (!isAdSkippingEnabled) return
    console.log('adsHandler - Finding ads before', time)
    console.log('adsBlocks:', adsBlocks)

    return _.find(adsBlocks, (adsBlock) => (time > adsBlock.adStartTime))
  }

  const findAdsBlock = (startTime, endTime, adId) => _.find(adsBlocks, (adsBlock) => ((!adId || adsBlock.adId === adId) && adsBlock.adStartTime === startTime && adsBlock.adEndTime === endTime))

  const getAdsBlockForTime = (time) => _.find(adsBlocks, (adsBlock) => (adsBlock.adStartTime <= time && time <= adsBlock.adEndTime))

  const logAdsBlocks = () => { console.log('adsHandler - Ads Blocks', adsBlocks) }

  const getCurrentTimeSec = () => {
    return playerManager.getCurrentTimeSec()
  }

  const reset = () => {
    console.log('adshandler - RESET ads:')
    if (!isAdSkippingEnabled) return
    adsBlocks = [];
    activeAd = null;
    adPolicy = null;
  }

  /* return the public functions */
  return {
    validateRequestedPlaybackPosition: validateRequestedPlaybackPosition,
    canSeek: canSeek,
    checkAdEnterExit: checkAdEnterExit,
    setAdPolicy: setAdPolicy,
    addAdsBlock: addAdsBlock,
    addAdsBlocks: addAdsBlocks,
    reset: reset
  }

}())

///////////////////////////////////////////////////////////////////////////////////////////////////
