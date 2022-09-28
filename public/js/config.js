/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

var ORANGE_IMCONFIG_LAB = {
    pathPlaybackSession: "/idtvserver/lab/Mobistar/OperatorApp/OperatorModule/PlaybackSession/CSMobistar/MobistarOperator",
    pathClientTransaction: "/idtvserver/lab/Mobistar/OperatorApp/OperatorModule/ClientTransaction/CSMobistar/MobistarOperator",
    pathLicenser: "/twintv3mstar_proxy/la/",
    readKey: "J96J7MOBRRQTH9IFU20GQSUXJM9ZNAJC",
    writeKey: "2GVSJGH4TEDAJN47AFP91LNAGC5QVGPE"
};

var ORANGE_IMCONFIG_FUT = {
    pathPlaybackSession: "/idtvserver/fut/Mobistar/OperatorApp/OperatorModule/PlaybackSession/CSMobistar/MobistarOperator",
    pathClientTransaction: "/idtvserver/fut/Mobistar/OperatorApp/OperatorModule/ClientTransaction/CSMobistar/MobistarOperator",
    pathLicenser: "/twintv3mstar_proxy/la/",
    readKey: "J96J7MOBRRQTH9IFU20GQSUXJM9ZNAJC",
    writeKey: "2GVSJGH4TEDAJN47AFP91LNAGC5QVGPE"
};

var ORANGE_IMCONFIG_PROD = {
    pathPlaybackSession: "/idtvserver/lab/Mobistar/OperatorApp/OperatorModule/PlaybackSession/CSMobistar/MobistarOperator",
    pathClientTransaction: "/idtvserver/lab/Mobistar/OperatorApp/OperatorModule/ClientTransaction/CSMobistar/MobistarOperator",
    pathLicenser: "/twintv3mstar_proxy/la/",
    readKey: "J96J7MOBRRQTH9IFU20GQSUXJM9ZNAJC",
    writeKey: "2GVSJGH4TEDAJN47AFP91LNAGC5QVGPE"
};

// If a configuration is specified in the URL, use that one (ZCR-20), if none specified assume ORANGE_IMCONFIG_LAB
const ORANGE_IMCONFIG = (function() {
    var urlParams = new URLSearchParams(window.location.search);
    var _config = urlParams.get('ORANGE_IMCONFIG');
    return (_config && window[_config]) ? window[_config] : ORANGE_IMCONFIG_LAB;
})();

const DEFAULT_CONFIG = {
    language: 'fra',
    showStatistics: !!DEBUG,
    bannerTimeout: 5,
    ageRating: 18,
    ageRatingLockWhenEqual: true,
    ampmDateFormat: false,
    playback: {
      audioLanguagePreference: ['fra', 'eng', 'nld'],
      subtitleLanguagePreference: ['fra', 'eng', 'nld'],
      hardOfHearing: false,
      visuallyImpaired: false
    },
    qos: {
      maxLoadDuration: 20000,
      autoPauseDuration: 0.2,
      autoResumeDuration: 0.2,
      initialBandwidth: 500000
    },
    blackout: [],
    customData: {}
};

const FONTS = ['TTFontBold','TTFontThin','TTFont'];
