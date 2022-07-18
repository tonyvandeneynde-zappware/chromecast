/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

const TAG_CONFIG_REF = {
    pathEvo: 'http://10.11.1.250:8891/ext_dev_facade',
    pathMW: 'http://10.11.1.250:8080/sdsmiddleware/A1/graphql/4.0'
};

const TAG_CONFIG_JULIET = {
    pathEvo: 'http://sdsevowebott.juliet.a1.net:8890/ext_dev_facade',
    pathMW: 'http://sdsevowebott.juliet.a1.net:8080/sdsmiddleware/A1/graphql/4.0'
};

const TAG_CONFIG_ROMEO = {
    pathEvo: 'https://sdsevowebott.romeo.a1.net:8890/ext_dev_facade',
    pathMW: 'https://sdsevowebott.romeo.a1.net:8080/sdsmiddleware/A1/graphql/4.0',
    pathLic: 'https://widevine.romeo.a1.net:8063?deviceId=$DEVICE_ID$'
};

const TAG_CONFIG_PROD = {
    pathEvo: 'https://sdsevowebott.showtime.a1.net:8843/ext_dev_facade',
    pathMW: 'https://sdsevowebott.showtime.a1.net:8443/sdsmiddleware/A1/graphql/4.0',
    pathLic: 'https://widevine.showtime.a1.net:8063?deviceId=$DEVICE_ID$'
};

const TAG_CONFIG_MK_DEV = {
    pathEvo: 'https://test-web.xploretv.mk:8843/ext_dev_facade',
    pathMW:  'https://test-web.xploretv.mk:8443/sdsmiddleware/A1_Macedonia/graphql/4.0',
    pathLic: 'https://widevine.xploretv.mk:8063?deviceId=$DEVICE_ID$'
};

// Assume the PROD configuration -> This can be overruled with setConfig.
var TAG_CONFIG = TAG_CONFIG_PROD;
var CONFIG = TAG_CONFIG;

TAG_CONFIG.bookmarkInterval = 300; // in seconds
TAG_CONFIG.offsetToLive = 6; // in seconds
TAG_CONFIG.maxPLTVBufferSize = 3600; // in seconds
TAG_CONFIG.sendKeepAliveMutation = true; // Toggle for sending the Keep Alive mutations
TAG_CONFIG.adSkippingEnabled = true; // Toggle for ads skipping feature
TAG_CONFIG.adSignallingTypeEnabled = true; // Toggle for ads signalling type

// Uncomment the line below for deployments with broadbeak (A1 Croatia):
// TAG_CONFIG.broadpeakHeartbeatInterval = 20; // in seconds

const DEFAULT_CONFIG = {
    language: 'deu',
    showStatistics: !!DEBUG,
    bannerTimeout: 5,
    ageRating: 18,
    ageRatingLockWhenEqual: false,
    ampmDateFormat: false,
    playback: {
      audioLanguagePreference: ['de', 'en'],
      subtitleLanguagePreference: ['de', 'en'],
      hardOfHearing: false,
      visuallyImpaired: false
    },
    qos: {
      maxLoadDuration: 20000,
      autoPauseDuration: 1,
      autoResumeNumberOfSegments: 1,
      initialBandwidth: 600000
    },
    blackout: [],
    customData: {}
};

const FONTS = ['FontSans','FontSansBold','FontSerifBold','WebIcons'];
