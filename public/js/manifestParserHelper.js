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
            adBlocks.push(adsInfo);
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
    let startTime = period.start;

    // for dynamic streams
    let utcTimeUrl = typeManifest === "dynamic" && ((mdp && mdp.UTCTiming[0].value) || "https://time.akamai.com/?iso");
    let adsStartDynamicStream = typeManifest === "dynamic" && calculateStartTimeForDynamicStream(period, typeManifest, utcTimeUrl);

    let adStartTime = typeManifest === "dynamic" ? adsStartDynamicStream : startTime.substring(2, startTime.length - 1);
    let duration = period.duration;
    let minutesSearch = duration.indexOf("M");
    let secondsSearch = duration.indexOf("S");
    let durationMinutes = duration.substring(2, minutesSearch);
    let durationSeconds = duration.substring(minutesSearch + 1, secondsSearch);
    let durationMinutesToSeconds = convertMinutesToSeconds(durationMinutes);
    let totalDuration = parseFloat(durationMinutesToSeconds) + parseFloat(durationSeconds);
    let adEndTime = totalDuration + parseFloat(adStartTime);
    let adId = eventStream.Event[0].id;
    let adType = "TYPE_SCTE35";

    return {
      adId,
      adStartTime,
      adEndTime,
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
  };
})();
