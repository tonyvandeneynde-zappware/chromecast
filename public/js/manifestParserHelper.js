/** @license (c) 2017-2021 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/
/****************************************/
//      AD SKIPPING LOGIC
/*************************************** */
com.zappware.chromecast.manifestParserHelper = (function () {
  const isAdSkippingEnabled = CONFIG.adSkippingEnabled || false
  const isTrickplayBlockingEnabled = CONFIG.trickplayBlockingEnabled || false
  const restrictionsEnabled = isAdSkippingEnabled || isTrickplayBlockingEnabled

  function parseManifest(manifest) {
    // type = static, dynamic
    if (!manifest) return;
    var options = {
      attributeNamePrefix: "",
      // attrNodeName: "attr", //default is 'false'
      textNodeName: "#text",
      ignoreAttributes: false,
      ignoreNameSpace: false,
      allowBooleanAttributes: false,
      parseNodeValue: true,
      parseAttributeValue: true,
      trimValues: true,
      decodeHTMLchar: true,
      cdataTagName: "__cdata", //default is 'false'
      cdataPositionChar: "\\c",
      arrayMode: true,
      parseTrueNumberOnly: false,
      // numParseOptions:{
      //     hex: true,
      //     leadingZeros: true,
      //     //skipLike: /\+[0-9]{10}/
      //   }
    };
    var validateManifest = parser.validate(manifest);
    if (validateManifest !== true) console.log(validateManifest.err);
    var jsonManifestObj = parser.parse(manifest, options);
    let adBlocks = [];
    let spliceInfoSections = []

    if (jsonManifestObj) {
      let mdp = jsonManifestObj.MPD[0];
      let period = mdp && mdp.Period;
      if (period && period.some((obj) => Object.keys(obj).includes("EventStream"))) {
        _.forEach(period, (per) => {
          console.log('buggg per:', per)
          if (per.EventStream && per.EventStream[0].schemeIdUri.indexOf("scte")) {
            const eStream = per.EventStream[0].Event[0]
            console.log('buggg eStream:', eStream)
            const isSpliceInfoSectionPresent =  eStream && eStream.Signal[0] &&  eStream.Signal[0].SpliceInfoSection
            console.log('buggg isSpliceInfoSectionPresent:', isSpliceInfoSectionPresent)
            if (isSpliceInfoSectionPresent) {
              const spliceInfoSection = getSpliceInfoSection(per.EventStream, per)
              console.log('buggg spliceInfoSection:', spliceInfoSection)
              spliceInfoSections = [... spliceInfoSection, ... spliceInfoSections]
            } else {
            let typeManifest = manifest.indexOf('type="dynamic"') > 0 ? "dynamic" : "static";
            let adsInfo = getAdsBlockInfo(per, per.EventStream[0], typeManifest, mdp);
            console.log('buggg adsInfo:', adsInfo)
            adsInfo && adBlocks.push(adsInfo);
            }
          }
        });
      }
      console.log('buggg adsblocks', adBlocks)
    }
    return {
      jsonManifestObj,
      adBlocks,
      spliceInfoSections
    };
  }

  function getAdsBlockInfo(period, eventStream, typeManifest, mdp) {
    if (!period) return;
    const adSignallingType = com.zappware.chromecast.adsHandler.getAdSignallingType()
    if (adSignallingType === com.zappware.chromecast.AdSignallingTypes.SCTE35_ZW_1) {
      return getAdBlockInfoOnPTZero(period, eventStream, typeManifest, mdp)
    } else if (adSignallingType === com.zappware.chromecast.AdSignallingTypes.DEFAULT) {
      const isPresentationTimeZero = checkForPresentationTime(eventStream)

      const periodStart = period.start // temp fix ==> Presentation time should be fixed in manifest
      let periodStartSeconds = periodStart && periodStart.substring(2, periodStart.length - 1);
      let periodStartTime =  periodStart && !_.isEqual(periodStartSeconds, '0') && periodStartSeconds

      if (isPresentationTimeZero) {
        return getAdBlockInfoOnPTZero(period, eventStream, typeManifest, mdp)
      } else {
       const adsInfo = calculateWhenPresentationTimeIsNotZero(eventStream, typeManifest, mdp, periodStartTime)
       return adsInfo.map((ad) => {
         return {
           adId: ad.adId,
           adStartTime: parseInt(ad.start),
           adEndTime: parseInt(ad.end),
           totalDuration: ad.duration,
           adType: ad.adType,
         }
       })
      }
    } else {
      return {}
    }
  }

  function getAdBlockInfoOnPTZero (period, eventStream, typeManifest, mdp) {
      let startTime = period.start;
      // for dynamic streams
      let utcTimeUrl = typeManifest === "dynamic" && ((mdp && mdp.UTCTiming[0].value) || "https://time.akamai.com/?iso");
      let adsStartDynamicStream = typeManifest === "dynamic" && calculateStartTimeForDynamicStream(period, typeManifest, utcTimeUrl);

      let adStartTime = typeManifest === "dynamic" ? adsStartDynamicStream : startTime.substring(2, startTime.length - 1);
      let eventDuration = (eventStream.Event[0] && eventStream.Event[0].duration) || period.duration
      let duration = period.duration || 0;
      let durationOfEvent = (eventStream.Event[0] && eventStream.Event[0].duration)
      let timeScale = eventStream && eventStream.timescale

      let minutesSearch = duration && duration.indexOf("M");
      let secondsSearch = duration && duration.indexOf("S");
      let durationMinutes = duration && (minutesSearch > -1) && duration.substring(2, minutesSearch);

      // duration possibilities ==> 'PT3M4S' 'PT3M', 'PT4S'
      let durationSeconds = duration && (minutesSearch > -1 && secondsSearch > -1) ? duration.substring(minutesSearch + 1, secondsSearch) :
        (minutesSearch > -1 && secondsSearch === -1) ? 0 :
        (minutesSearch <= -1 && secondsSearch > -1) ? duration.substring(2, secondsSearch) : 0;

      let durationMinutesToSeconds = durationMinutes && convertMinutesToSeconds(durationMinutes);
      let totalDuration = durationOfEvent ? (durationOfEvent/(timeScale || 180000)) : durationMinutesToSeconds ? parseFloat(durationMinutesToSeconds) + parseFloat(durationSeconds) : parseFloat(durationSeconds);

      let adEndTime = (eventDuration === undefined) ? adStartTime : totalDuration + parseFloat(adStartTime);
      let adId = eventStream.Event[0].id;
      let adType = "TYPE_SCTE35";

      return {
        adId,
        adStartTime: parseInt(adStartTime),
        adEndTime: parseInt(adEndTime),
        totalDuration,
        adType
      };




  }

  function convertMinutesToSeconds(minutes) {
    return minutes * 60;
  }

  function checkKeyPresenceInArray(key, arrOfObj) {
    arrOfObj.some((obj) => Object.keys(obj).includes(key));
  }

  function fetchManifestUtcTime(url = "https://time.akamai.com/?iso") {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function convertDateToSeconds(date) {
    var date = new Date(date);
    var seconds = date.getTime() / 1000;
    return seconds;
  }

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  function calculateStartTimeForDynamicStream(per, typeManifest, url) {
    if (typeManifest !== "dynamic") return;
    let currentTime = com.zappware.chromecast.util.getCurrentTime();
    let utcTime = fetchManifestUtcTime(url);
    let utcTimeToSeconds = convertDateToSeconds(utcTime);
    let diff = currentTime - utcTimeToSeconds;
    let start = per.start;
    let startTime = start.substring(2, start.length - 1);
    let adsStartTime = startTime - diff;
    return adsStartTime;
  }

  /************************************************************************************
   * Logic to Calculate ad's start and end time when Event's presentationTime is not zero
   *************************************************************************************/
  function checkForPresentationTime(eventStream) {
    // check for presentation time
    let isPresentationTimeZero
    eventStream.Event.map((e) => {
      if (parseInt(e.presentationTime) === 0) {
        isPresentationTimeZero = true
        return true
      } else {
        isPresentationTimeZero = false
        return false
      }
    })
    return isPresentationTimeZero
  }

  function calculateWhenPresentationTimeIsNotZero(eventStream, typeManifest, mdp, periodStartTime) {
    //To convert these to seconds, the presentationTime and the duration must be divided by the timescale.
    let timeScale = eventStream.timescale
    return eventStream.Event.map((event) => {

      // for dynamic streams
      let utcTimeUrl = typeManifest === "dynamic" && ((mdp && mdp.UTCTiming[0].value) || "https://time.akamai.com/?iso");
      let adsStartDynamicStream = typeManifest === "dynamic" && dynamicLogicForNonZeroPTime(typeManifest, utcTimeUrl, event,timeScale, periodStartTime);
      let start = typeManifest === "dynamic" ? adsStartDynamicStream : periodStartTime || (event.presentationTime / timeScale)
      let duration = (event.duration / timeScale)
      let end = parseFloat(start) + parseFloat(duration)
      let adId = event.id
      let adType = "TYPE_SCTE35";
      return {
        start,
        duration,
        end,
        adId,
        adType
      };
    });
  }

  function dynamicLogicForNonZeroPTime(typeManifest, url, event, timeScale, periodStartTime) {
    if (typeManifest !== "dynamic") return;
    let currentTime = com.zappware.chromecast.util.getCurrentTime();
    let utcTime = fetchManifestUtcTime(url);
    let utcTimeToSeconds = convertDateToSeconds(utcTime);
    let diff = parseInt(currentTime - utcTimeToSeconds);
    let start = periodStartTime || (event.presentationTime / timeScale);
    let adsStartTime = start - diff;
    return adsStartTime;
  }

  /************************************************************** */
  //     Ad skipping's parsing logic
  /************************************************************** */
  const getSpliceInfoSection = (eventStream, period) => {
    console.log('buggg getSpliceInfoSection eventStream:', eventStream, period)
    if (!eventStream) return
    const start = period && period.start
    const startTime = getTimeInSeconds(start)
    const adsInfo = []
    _.forEach(eventStream, (es) => {
      _.forEach(es.Event, (ev) => {
        const spliceInfoSection =  ev.Signal[0] &&  ev.Signal[0].SpliceInfoSection[0]
        const duration = ev.Signal[0] && ev.Signal[0].SpliceInfoSection[0].SegmentationDescriptor[0].segmentationDuration || 0
        const endTime = parseInt(getTimeInSeconds(duration) - startTime)
        adsInfo.push({
          duration: getTimeInSeconds(duration),
          segmentationTypeId: spliceInfoSection && spliceInfoSection.SegmentationDescriptor[0].segmentationTypeId,
          upId: spliceInfoSection && spliceInfoSection.SegmentationDescriptor[0].segmentationUpidContent,
          upIdType: spliceInfoSection && spliceInfoSection.SegmentationDescriptor[0].segmentationUpidType,
          adId: spliceInfoSection && spliceInfoSection.SegmentationDescriptor[0].segmentationEventId,
          adStartTime: startTime || 0,
          adEndTime: endTime,
          adType: "TYPE_SCTE35"
        })
      })
    })
    return adsInfo
  }

  /************************************************************************************* */
 // Method to filter the  SCTE 35 markers from the manifest with the same ids as the events’s transmissionIds
 /************************************************************************************* */
  const filterMarkersWithSameTransmissionIds = (upidsFromManifest, upidsFromEvents) => {
    console.log('upidsFromEvents:', upidsFromEvents)
    console.log('upidsFromManifest:', upidsFromManifest)
    //sort the ad markers chronologically by start time
    const sortedUpidsFromManifest = upidsFromManifest.sort((a,b) => a.startTime - b.startTime)
    const result = []
   _.forEach(upidsFromEvents, (event) => {
     const sameTransmissionId = _.find(sortedUpidsFromManifest, (man) =>  man.upId === event.transmissionId)
     if (sameTransmissionId){
      result.push(sameTransmissionId)
     }
   })
    return result
 }


 /************************************************************************************* */
 // Method to calculate start and duration of an ad
 // Possibilites for startTime and duration => "PT3H14M15S", "PT14M15S", "PT15M", "PT15S"
 /************************************************************************************* */
 const getTimeInSeconds = (data) => {
  if (!data || _.isEmpty(data)) return

  const hourSearch = data.indexOf("H");
  const minutesSearch = data.indexOf("M");
  const secondsSearch = data.indexOf("S");

  const hourSeconds = hourSearch > -1 ? data.substring(2, hourSearch) * 3600 : 0
  const minutesSeconds = minutesSearch > -1 && data.substring(hourSearch > -1 ? hourSearch + 1 : 2 , minutesSearch) * 60 || 0
  const secondsCalculation = calculateSeconds(data, hourSearch, minutesSearch, secondsSearch)
  const seconds = secondsSearch > -1 ?  secondsCalculation : 0
  const result = (parseInt(hourSeconds) + parseInt(minutesSeconds) + parseInt(seconds))

  return result
}

const calculateSeconds = (data, hourSearch, minutesSearch, secondsSearch) => {
  if (!data || _.isEmpty(data)) return

  // Check for hours and minutes availability
  const isHourAvailableOnly = hourSearch > -1 && minutesSearch <= -1
  const isHourMinutesAvailable = hourSearch > -1 && minutesSearch > -1
  const isMinutesAvailableOnly = hourSearch <= -1 && minutesSearch > -1
  const noHourNoMinuteAvailable = hourSearch <= -1 && minutesSearch <= -1

  if (isHourAvailableOnly) {
   return data.substring(hourSearch + 1, data.length -1)
  } else if (isHourMinutesAvailable || isMinutesAvailableOnly) {
    return data.substring(minutesSearch + 1, data.length -1)
  } else if (noHourNoMinuteAvailable) {
    return data.substring(2, data.length -1)
  } else {
    return data.substring(2, secondsSearch)
  }
}

/**
* Check for segmentationTypeId PROVIDER_ADVERTISEMENT_END ==> 49
* and if that is the same then we have found the correct ad marker
*/
const getMarkersWithProviderAdEnd = (upidFromManifest, upidFromEvent) => {
  const markers = filterMarkersWithSameTransmissionIds(upidFromManifest, upidFromEvent)
  console.log('buggg markers:', markers)
  if (!markers) return
  const adMarkers = []
  const providerAdEnd = com.zappware.chromecast.AdMarkersType.PROVIDER_ADVERTISEMENT_END
  _.find(markers, (marker) => {
    if (marker.segmentationId === providerAdEnd) {
      const adjustedStartTime = marker.adEndTime - CONFIG.adPlaybackPreRoll
      marker['adStartTime'] = adjustedStartTime
      adMarkers.push(marker)
    }
 })
 return adMarkers
}

const setAdMarkers = (manifest, media) =>  {
  if (!restrictionsEnabled) return
  if (!manifest || !media) return
  const isVod = media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
  const  { adBlocks, spliceInfoSections } = !isVod && parseManifest(manifest)
  console.log('buggg spliceInfoSections:', spliceInfoSections)
  const eventInfo  =  media._playbackInfo.eventInfo && media._playbackInfo.eventInfo.items
  console.log('buggg eventInfo:', eventInfo)
  const spliceInfoSectionsBlocks = spliceInfoSections && getMarkersWithProviderAdEnd(spliceInfoSections, eventInfo)
  console.log('buggg spliceInfoSectionsBlocks:', spliceInfoSectionsBlocks)
  let adMarkers = spliceInfoSections ? spliceInfoSectionsBlocks : adBlocks
  console.log('buggg adMarkers:', adMarkers)
  !isVod && com.zappware.chromecast.adsHandler.setAdsBlocks(adMarkers)
}
  /************************************** */
  // END AD SKIPPING
  /***************************************************** */

  return {
    parseManifest,
    getAdsBlockInfo,
    convertMinutesToSeconds,
    checkKeyPresenceInArray,
    fetchManifestUtcTime,
    convertDateToSeconds,
    toDateTime,
    calculateStartTimeForDynamicStream,
    checkForPresentationTime,
    calculateWhenPresentationTimeIsNotZero,
    dynamicLogicForNonZeroPTime,
    filterMarkersWithSameTransmissionIds,
    getMarkersWithProviderAdEnd,
    setAdMarkers
  };
})();