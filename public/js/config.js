/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 var WIND_CONFIG_BRANCH1 = {
  graphqlEndpoint: 'https://client.branch1.sdscloud.zappware.com/secure/v1/graphql',
  awsIdentityPoolId: 'eu-west-1:3414929c-c29a-4b14-8959-d6669ec3a50f',
  awsDomain: 'cboauth.eu.auth0.com',
  awsRegion: 'eu-west-1',
  awsAuthenticationType: 'AWS_IAM',
  pathLic: 'https://lic.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx?assetId=$ASSET_ID$',
  broadpeakHeartbeatInterval: 20, // in seconds
  jwtToken: '',
  deviceId: '',
  householdId: '',
  aesEncKey: '',
  aesInitVector: ''
};

 const WIND_CONFIG_DEV = {
  graphqlEndpoint: 'https://client.dev.cbo.zappware.com/secure/v1/graphql',
  awsIdentityPoolId: 'eu-west-1:fdc21ef4-4982-4102-bd18-d8508b9839a9',
  awsDomain: 'cboauth.eu.auth0.com',
  awsRegion: 'eu-west-1',
  awsAuthenticationType: 'OID',
  pathLic: 'https://lic.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx?assetId=$ASSET_ID$',
  broadpeakHeartbeatInterval: 20, // in seconds
  jwtToken: '',
  deviceId: '',
  householdId: '',
  aesEncKey: '',
  aesInitVector: ''
};

const WIND_CONFIG_STAGING = {
    graphqlEndpoint: 'https://client.staging.tvclient.wind.gr/secure/v1/graphql',
    awsIdentityPoolId: 'eu-west-1:29f9f02f-0ed0-4a71-8edf-d1f7871fafbb',
    awsDomain: 'cboauth.eu.auth0.com',
    awsRegion: 'eu-west-1',
    awsAuthenticationType: 'OID',
    pathLic: 'https://lic.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx?assetId=$ASSET_ID$',
    broadpeakHeartbeatInterval: 20, // in seconds
    jwtToken: '',
    deviceId: '',
    householdId: '',
    aesEncKey: '',
    aesInitVector: ''
};

const WIND_CONFIG_PROD = {

};

// Assume the DEV configuration -> This can be overruled with setConfig.
const WIND_CONFIG = WIND_CONFIG_DEV;
const SDS_CLOUD_CONFIG = WIND_CONFIG;
const CONFIG = SDS_CLOUD_CONFIG;

SDS_CLOUD_CONFIG.bookmarkInterval = 60; // in seconds
SDS_CLOUD_CONFIG.offsetToLive = 5; // in seconds
SDS_CLOUD_CONFIG.maxPLTVBufferSize = (3600 * 12); // in seconds


const DEFAULT_CONFIG = {
    language: 'gre',
    showStatistics: !!DEBUG,
    bannerTimeout: 5,
    ageRating: 18,
    ageRatingLockWhenEqual: false,
    ampmDateFormat: false,
    playback: {
      audioLanguagePreference: ['gr', 'en'],
      subtitleLanguagePreference: ['gr', 'en'],
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

const FONTS = ['FontSans','FontSansBold'];
