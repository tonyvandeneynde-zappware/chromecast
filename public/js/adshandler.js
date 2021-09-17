/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/
 import _ from 'lodash'

 com.zappware.chromecast.adshandler = (function () {
  const adPolicy = {
    allow_skip: false, // allow jumping over an ad block entirely
    allow_forward: false, // allow going forward during an ad block
    allow_backward: true, // allow going backward during an ad block
    allow_backward_into_ad: false // allow jumping backward into an ad block, without being redirected to the start of the ad block
  }
  const adblocks = [{
                      adId: 'ad1',
                      startTime: 600,
                      endTime: 700,
                      type: 'SCTE35'
                    },
                    {
                      adId: 'ad2',
                      startTime: 800,
                      endTime: 900,
                      type: 'SCTE35'
                    },
                    {
                      adId: 'ad1',
                      startTime: 1000,
                      endTime: 1100,
                      type: 'SCTE35'
                    },
                    {
                      adId: 'ad1',
                      startTime: 1200,
                      endTime: 1300,
                      type: 'SCTE35'
                    }]

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
        const activeAdsBlock = getAdsBlockForTime(time)
        const jumpedBackward = time < player.currentTime()

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

  /* return the public functions */
  return {
    validateRequestedPlaybackPosition: validateRequestedPlaybackPosition
  }
  
}())

///////////////////////////////////////////////////////////////////////////////////////////////////
