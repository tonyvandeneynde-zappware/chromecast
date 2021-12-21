/** @license (c) 2017-2021 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/
/****************************************/
//      AD SKIPPING LOGIC
/*************************************** */
com.zappware.chromecast.manifestParserHelper = (function () {

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

    if (jsonManifestObj) {
      let mdp = jsonManifestObj.MPD[0];
      let period = mdp && mdp.Period;
      if (period && period.some((obj) => Object.keys(obj).includes("EventStream"))) {
        period.map((per) => {
          if (per.EventStream && per.EventStream[0].schemeIdUri.indexOf("scte")) {
            let typeManifest = manifest.indexOf('type="dynamic"') > 0 ? "dynamic" : "static";
            let adsInfo = getAdsBlockInfo(per, per.EventStream[0], typeManifest, mdp);
            adsInfo && adBlocks.push(adsInfo);
          } else {
            console.log("");
          }
        });
      } else {
        console.log("");
      }
    }
    return {
      jsonManifestObj,
      adBlocks,
    };
  }

  function getAdsBlockInfo(period, eventStream, typeManifest, mdp) {
    if (!period) return;
    const adSignallingType = com.zappware.chromecast.adshandler.getAdSignallingType()
    if (adSignallingType === com.zappware.chromecast.AdSignallingTypes.SCTE35_ZW_1) {
      return getAdBlockInfoOnPTZero(period, eventStream, typeManifest, mdp)
    } else if (adSignallingType === com.zappware.chromecast.AdSignallingTypes.DEFAULT) {
      const isPresentationTimeZero = checkForPresentationTime(eventStream)
      if (isPresentationTimeZero) {
        return getAdBlockInfoOnPTZero(period, eventStream, typeManifest, mdp)
      } else {
       const adsInfo = calculateWhenPresentationTimeIsNotZero(eventStream, typeManifest, mdp)
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
      if (!duration) return
      let minutesSearch = duration.indexOf("M");
      let secondsSearch = duration.indexOf("S");
      let durationMinutes = (minutesSearch > -1) && duration.substring(2, minutesSearch);

      // duration possibilities ==> 'PT3M4S' 'PT3M', 'PT4S'
      let durationSeconds = (minutesSearch > -1 && secondsSearch > -1) ? duration.substring(minutesSearch + 1, secondsSearch) :
        (minutesSearch > -1 && secondsSearch === -1) ? 0 :
        (minutesSearch <= -1 && secondsSearch > -1) ? duration.substring(2, secondsSearch) : 0;

      let durationMinutesToSeconds = durationMinutes && convertMinutesToSeconds(durationMinutes);
      let totalDuration = durationMinutesToSeconds ? parseFloat(durationMinutesToSeconds) + parseFloat(durationSeconds) : parseFloat(durationSeconds);
      let adEndTime = (eventDuration === undefined) ? adStartTime : totalDuration + parseFloat(adStartTime);
      let adId = eventStream.Event[0].id;
      let adType = "TYPE_SCTE35";

      return {
        adId,
        adStartTime: parseInt(adStartTime),
        adEndTime: parseInt(adEndTime),
        totalDuration,
        adType,
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

  function calculateWhenPresentationTimeIsNotZero(eventStream, typeManifest, mdp) {
    //To convert these to seconds, the presentationTime and the duration must be divided by the timescale.
    let timeScale = eventStream.timescale
    return eventStream.Event.map((event) => {

      // for dynamic streams
      let utcTimeUrl = typeManifest === "dynamic" && ((mdp && mdp.UTCTiming[0].value) || "https://time.akamai.com/?iso");
      let adsStartDynamicStream = typeManifest === "dynamic" && dynamicLogicForNonZeroPTime(typeManifest, utcTimeUrl, event,timeScale);

      let start = typeManifest === "dynamic" ? adsStartDynamicStream : (event.presentationTime / timeScale)
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

  function dynamicLogicForNonZeroPTime(typeManifest, url, event, timeScale) {
    if (typeManifest !== "dynamic") return;
    let currentTime = com.zappware.chromecast.util.getCurrentTime();
    let utcTime = fetchManifestUtcTime(url);
    let utcTimeToSeconds = convertDateToSeconds(utcTime);
    let diff = currentTime - utcTimeToSeconds;
    let start = (event.presentationTime / timeScale);
    let adsStartTime = start - diff;
    return adsStartTime;
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
    dynamicLogicForNonZeroPTime
  };
})();