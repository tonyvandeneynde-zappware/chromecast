/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.WindPlayer = (function () {
    // logging
    const log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.WindPlayer", msg); };

    return class extends com.zappware.chromecast.SDSCloudPlayer {

        initialize(config) {
            console.log('bugg initialize SDSCloud Player:')
            super.initialize(config);

            // Add custom error
            com.zappware.chromecast.ErrorMessage["ZCR_ERR_WIND_NOVA_STREAMING_PROHIBITED"] = {
                title: 'novaStreamingProhibitedTitle', description: 'novaStreamingProhibitedDescription'
            };
        }

        _configureDRM() {
            DEBUG && log("_configureDRM()");

            const that = this;

            if (WIND_CONFIG.pathLic) {
                const playbackConfig = this.getPlaybackConfig();
                playbackConfig.licenseUrl = WIND_CONFIG.pathLic;
                playbackConfig.licenseRequestHandler = function (requestInfo) {
                    const media = playerManager.getMediaInformation() || that._currentMedia;
                    if (media._assetId && media._playbackInfo && media._playbackInfo.sessionId && WIND_CONFIG.householdId) {
                        let customData = {
                            "userId": WIND_CONFIG.householdId,
                            "sessionId": media._playbackInfo.sessionId,
                            "merchant": "wind"
                        };

                        if (DEBUG) {
                            if (WIND_CONFIG.aesEncKey) {
                                // NEXX4-17888: replace session ID to support DRM encrypted production streams on staging
                                let nowStr = "" + Math.round(com.zappware.chromecast.util.getCurrentTime());
                                customData.sessionId = "STAGING_" + CryptoJS.AES.encrypt(
                                    nowStr,
                                    CryptoJS.enc.Utf8.parse(WIND_CONFIG.aesEncKey),
                                    { iv: CryptoJS.enc.Utf8.parse(WIND_CONFIG.aesInitVector) }
                                );
                            }
                        }

                        requestInfo.url = WIND_CONFIG.pathLic.replace('$ASSET_ID$', media._assetId);
                        requestInfo.headers['dt-custom-data'] = base64.encode(JSON.stringify(customData));
                        requestInfo.withCredentials = true;
                    }
                };
            }
        }

        _error(e, more) {
            if (e === com.zappware.chromecast.Error.GRAPHQL_ERROR && more && more[0] &&
                (more[0].errorCode === "0x04020007" ||    // Streaming to a non NOVA enabled device is prohibited for this request
                 more[0].errorCode === "0x04020005" )) {  // Streaming to the device is prohibited for this request
                // NOVASPORTS -> Not allowed to cast
                e = "ZCR_ERR_WIND_NOVA_STREAMING_PROHIBITED";
            }

            return com.zappware.chromecast.SDSCloudPlayer.prototype._error.apply(this, [e, more]);
        }
    };
})();

// Instantiate the player:
com.zappware.chromecast.player = new com.zappware.chromecast.WindPlayer();


