/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.adshandler = (function () {
  // const adsBlocks = [
  //   {
  //     adId: 'ad0',
  //     startTime: 320,
  //     endTime: 330
  //   },
  //   {
  //     adId: 'ad1',
  //     startTime: 1000,
  //     endTime: 1100
  //   },
  //   {
  //     adId: 'ad2',
  //     startTime: 1200,
  //     endTime: 1300
  //   }
  // ]

  let activeAd = null

  let adPolicy = null

  let adsBlocks = []

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
  setAdPolicy = (adPlayBackRestrictions) => {
  console.log('-090-9-099 adPlayBackRestrictions:', adPlayBackRestrictions)
  this.activeAd = null
  _.map(adPlayBackRestrictions, res => {
    if (res === 'BLOCK_SKIP_AND_FAST_FORWARD') {
      // This is temp fix to align all platforms

      /*adPolicy = {
        allow_skip: true, // allow jumping over an ad block entirely
        allow_forward: false, // allow going forward during an ad block
        allow_backward: true, // allow going backward during an ad block
        allow_backward_into_ad: true // allow jumping backward into an ad block, without being redirected to the start of the ad block
      }*/

      // This is what is should be eventually
      adPolicy = {
        allow_skip: false, // allow jumping over an ad block entirely
        allow_forward: false, // allow going forward during an ad block
        allow_backward: true, // allow going backward during an ad block
        allow_backward_into_ad: false // allow jumping backward into an ad block, without being redirected to the start of the ad block
      }
    } else {
      this.adPolicy = undefined
    }
  })
}

  //
  // Check if the playback position needs to be forced to the start of an ads block.
  //
  validateRequestedPlaybackPosition = (time) => {
    console.log('adsHandler - Validating requested playback position', time, '...')
    let updatedTime = time


    if (adPolicy) {
      // skipping not allowed
      if (!adPolicy.allow_skip) {
        // ad blocks
        const firstAdsBlock = findFirstAdsBlock(time)
        if (firstAdsBlock) {
          console.log('... found a unseen ads block, jumping to it.', firstAdsBlock)
          updatedTime = firstAdsBlock.startTime
        }
      } else { // skipping allowed
        // check if the requested time is in an ads block and from which direction it is entered
        const jumpedBackward = getCurrentTimeSec()

        if (activeAdsBlock) {
          if (jumpedBackward && adPolicy.allow_backward_into_ad) {
            console.log('... jumped backward into an ads block, this is allowed.')
            return time
          } else {
            console.log('... jumped into an ads block, playing ads block from start.')
            updatedTime = activeAdsBlock.startTime
          }
        }
      }
    }
    return updatedTime
  }

  checkAdEnterExit = () => {
    const currentTime = getCurrentTimeSec()
    console.log('-=0=0=-00=0- checkAdEnterExit:', currentTime)
    console.log('adsBlocks:', adsBlocks)
    let newActiveAd = null
    adsBlocks.forEach(ad => {
      if (currentTime >= ad.startTime && currentTime <= ad.endTime) {
        newActiveAd = ad
      }
    });
    if (!activeAd && newActiveAd || (activeAd && newActiveAd && activeAd.id !== newActiveAd.id)) {
      // new adblock entered
      handleAdsBlockEnterEvent(newActiveAd)
    }
    if (activeAd && !newActiveAd) {
      handleAdsBlockExitEvent(activeAd)
    }
    return
  }

  canSeek = (position) => {
    const currentTime = getCurrentTimeSec()
    if (activeAd && position > currentTime ) {
      showAdSkippingMessage()
      return false
    }
    return true
  }

  handleAdsBlockEnterEvent = (adsBlock) => {
    if (adPolicy) {
      activeAd = adsBlock
      console.log('adsHandler - Entered SCTE35 ad block:', adsBlock)
    }
  }

  handleAdsBlockExitEvent = (adsBlock) => {
    console.log('adsHandler - Exiting and removing SCTE35 ad block:', adsBlock)
    activeAd = null
    this.removeAdsBlock(adsBlock)
  }

  removeAdsBlock = (adsBlockToRemove) => {
    console.log('adsHandler - Removing ads block with startTime', adsBlockToRemove.startTime)
    _.remove(adsBlocks, (adsBlock) => {
      return adsBlock.adId === adsBlockToRemove.adId
    })
    activeAd = null
  }

  showAdSkippingMessage = () => {
    if (document.querySelector('#adInfo').innerText === '')
    {
      document.querySelector('#adInfo').innerText = com.zappware.chromecast.globaltext.getString('blockSkipAd');
      setTimeout(() => {
        document.querySelector('#adInfo').innerText = '';
      }, 7000);
    }
  }

  addAdsBlock = (adId, startTime, endTime, adType) => {
    const nextId = (adsBlocks.length === 0 ? 0 : _.last(adsBlocks).id + 1)
    const newAdsBlock = {
      id: nextId,
      adId: adId,
      startTime: startTime,
      endTime: endTime,
      type: adType
    }

    // ignore ad blocks with duration 0.
    if (startTime === endTime) {
      console.log('adsHandler - Ignored new ad block since the duration is 0.', newAdsBlock)
      return
    }

    // ignore if already in the list.
    const alreadyExisting = findAdsBlock(startTime, endTime, adId)
    if (alreadyExisting) {
      console.log('adsHandler - Ignored new ad block: already in the list.', alreadyExisting)
      return
    }
    adsBlocks.push(newAdsBlock)
    console.log('adsHandler - Added ad block to the list', newAdsBlock)
  }

  //
  // AD BLOCK HELPERS
  //
  findFirstAdsBlock = (time) => {
    console.log('adsHandler - Finding ads before', time)
    return _.find(adsBlocks, (adsBlock) => (time > adsBlock.startTime))
  }

  findAdsBlock = (startTime, endTime, adId) => _.find(adsBlocks, (adsBlock) => ((!adId || adsBlock.adId === adId) && adsBlock.startTime === startTime && adsBlock.endTime === endTime))

  getAdsBlockForTime = (time) => _.find(adsBlocks, (adsBlock) => (adsBlock.startTime <= time && time <= adsBlock.endTime))

  logAdsBlocks = () => { console.log('adsHandler - Ads Blocks', adsBlocks) }

  getCurrentTimeSec = () => {
    let currentTime
    if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV || media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
      currentTime = com.zappware.chromecast.util.getCurrentTime()
    } else {
      currentTime = playerManager.getCurrentTimeSec()
    }
    return currentTime
  }

  addAdsBlock('ad0', 320, 330)
  addAdsBlock('ad1', 1000, 1100)
  addAdsBlock('ad2', 1200, 1300)

  /* return the public functions */
  return {
    validateRequestedPlaybackPosition: validateRequestedPlaybackPosition,
    canSeek: canSeek,
    checkAdEnterExit: checkAdEnterExit,
    setAdPolicy: setAdPolicy,
    addAdsBlock: addAdsBlock
  }
  
}())

///////////////////////////////////////////////////////////////////////////////////////////////////
