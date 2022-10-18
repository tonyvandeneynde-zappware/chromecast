/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

const ORANGE_NEXX4_CONFIG_INT = {
  graphqlEndpoint: 'https://client.sirius.sdscloud.orange.be/secure/v1/graphql',
  sessionEndpoint: '',
  awsIdentityPoolId: 'eu-west-1:ce5fb270-43a4-4ad4-b643-0394b4cf3031',
  awsDomain: 'cboauth.eu.auth0.com',
  awsRegion: 'eu-west-1',
  awsAuthenticationType: 'OID',
  pathLic: 'https://drm.sdsproxy.orange.be/getLicense?drm=com.widevine.alpha&url=$URL$',
  altPathLic: '',
  altPathLicMatch: '',
  jwtToken: '',
  deviceId: '',
  householdId: ''
};

const ORANGE_NEXX4_CONFIG_STAGING = {
  graphqlEndpoint: 'https://client.bordet.sdscloud.orange.be/secure/v1/graphql',
  sessionEndpoint: '',
  awsIdentityPoolId: 'eu-west-1:ce5fb270-43a4-4ad4-b643-0394b4cf3031',
  awsDomain: 'cboauth.eu.auth0.com',
  awsRegion: 'eu-west-1',
  awsAuthenticationType: 'OID',
  pathLic: 'https://drm.sdsproxy.orange.be/getLicense?drm=com.widevine.alpha&url=$URL$',
  altPathLic: '',
  altPathLicMatch: '',
  jwtToken: '',
  deviceId: '',
  householdId: ''
};

const ORANGE_NEXX4_CONFIG_PROD = {
  graphqlEndpoint: 'https://client.titan.sdscloud.orange.be/secure/v1/graphql',
  sessionEndpoint: '',
  awsIdentityPoolId: 'eu-west-1:ce5fb270-43a4-4ad4-b643-0394b4cf3031',
  awsDomain: 'cboauth.eu.auth0.com',
  awsRegion: 'eu-west-1',
  awsAuthenticationType: 'OID',
  pathLic: 'https://drm.sdsproxy.orange.be/getLicense?drm=com.widevine.alpha&url=$URL$',
  altPathLic: '',
  altPathLicMatch: '',
  jwtToken: '',
  deviceId: '',
  householdId: ''
};

// Assume the INT configuration -> This can be overruled with setConfig.
const ORANGE_NEXX4_CONFIG = ORANGE_NEXX4_CONFIG_INT
const SDS_CLOUD_CONFIG = ORANGE_NEXX4_CONFIG;
const CONFIG = SDS_CLOUD_CONFIG;

SDS_CLOUD_CONFIG.bookmarkInterval = 60; // in seconds
SDS_CLOUD_CONFIG.offsetToLive = 5; // in seconds
SDS_CLOUD_CONFIG.maxPLTVBufferSize = (3600); // in seconds
SDS_CLOUD_CONFIG.sendKeepAliveMutation = false; // Toggle for sending the Keep Alive mutations
SDS_CLOUD_CONFIG.adSkippingEnabled = true; // Toggle for ads skipping feature
SDS_CLOUD_CONFIG.adSignallingTypeEnabled = false; // Toggle for ads signalling type
SDS_CLOUD_CONFIG.trickplayBlockingEnabled = false; // Toggle for trickplay restriction
SDS_CLOUD_CONFIG.adPlaybackPreRoll = 60; // Configurable Ad block duration


const DEFAULT_CONFIG = {
    language: 'eng',
    showStatistics: !!SHOW_STATISTICS,
    bannerTimeout: 5,
    ageRating: 18,
    ageRatingLockWhenEqual: true,
    ampmDateFormat: false,
    playback: {
      audioLanguagePreference: ['en', 'nl', 'fr', 'de'],
      subtitleLanguagePreference: ['en', 'nl', 'fr', 'de'],
      hardOfHearing: false,
      visuallyImpaired: false
    },
    qos: {
      maxLoadDuration: 20000,
      autoPauseDuration: 0.2,
      autoResumeDuration: 0.2,
      initialBandwidth: 600000
    },
    blackout: [],
    customData: {}
};

const FONTS = ['TTFontBold','TTFontThin','TTFont'];
