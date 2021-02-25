/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.WindPlayer = (function () {
    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.WindPlayer", msg); };

    return class extends com.zappware.chromecast.Nexx4Player {

        initialize(config) {
            super.initialize(config);

            // Add custom error
            com.zappware.chromecast.ErrorMessage["ZCR_ERR_WIND_NOVA_STREAMING_PROHIBITED"] = {
                title: 'novaStreamingProhibitedTitle', description: 'novaStreamingProhibitedDescription'
            };
        }

        _load(loadRequestData) {
            var that = this;
            DEBUG && log("_load()");

            if (WIND_CONFIG.pathLic) {
                var playbackConfig = this.getPlaybackConfig();
                playbackConfig.licenseUrl = WIND_CONFIG.pathLic;
                playbackConfig.licenseRequestHandler = function (requestInfo) {
                    var media = playerManager.getMediaInformation() || that._currentMedia;
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

            var query = JSON.parse(loadRequestData.media.contentId)[0];

            // Tag the media with the assetId, we need it when requesting a license
            loadRequestData.media._assetId =
                query.variables.input.channelId  ||
                query.variables.input.vodAssetId ||
                query.variables.input.trailerId  ||
                query.variables.input.eventId    ||
                query.variables.input.recordingId;

            return com.zappware.chromecast.Nexx4Player.prototype._load.apply(this, [loadRequestData]);
        }

        _acquirePlaybackInfo(query, media, retry) {
            var that = this;

            // We need a householdId for getting a playback license. If the sender did not provide it,
            // or we did not get it before, obtain it now
            if (!retry && (!WIND_CONFIG.householdId || !WIND_CONFIG.deviceId)) {
                return this._me().then(function(response) {
                    if (response && response.data.me) {
                        if (!WIND_CONFIG.householdId) {
                            WIND_CONFIG.householdId = response.data.me.household.id;
                        }
                        if (!WIND_CONFIG.deviceId) {
                            WIND_CONFIG.deviceId = response.data.me.device.id;
                        }
                    }
                    return that._acquirePlaybackInfo(query, media, true);
                });
            }

            return com.zappware.chromecast.Nexx4Player.prototype._acquirePlaybackInfo.apply(this, [query, media]);
        }

        _initiatePLTV(media){
            DEBUG && log("_initiatePLTV()");

            com.zappware.chromecast.receiver.setPlaybackMode(com.zappware.chromecast.PlaybackMode.PLTV);
            media._playbackMode = com.zappware.chromecast.PlaybackMode.PLTV;
            if (!media._startPLTVat) {
                media._startPLTVat = com.zappware.chromecast.util.getCurrentTime();
                media._currentEventId = com.zappware.chromecast.receiver.getCurrentEvent().id;
                if (!media._currentEventId) {
                    // No event id is provided -> ask the back-end
                    media._currentEventId = this._getCurrentEvent(media)
                    .then(currentEvent => {
                        media._currentEventId = currentEvent.id;
                    });
                }

            }

            return com.zappware.chromecast.Nexx4Player.prototype._initiatePLTV.apply(this, [media]);
        }

        _getCredentials(idToken) {
            DEBUG && assert(idToken, "Invalid parameter for _getCredentials: " + idToken);

            const { name, exp } = jwt_decode(idToken);

            const Amplify = window['aws-amplify'];

            Amplify.Auth.configure({
                Auth: {
                    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
                    identityPoolId: WIND_CONFIG.awsIdentityPoolId,

                    // REQUIRED - Amazon Cognito Region
                    region: WIND_CONFIG.awsRegion
                },
                'aws_appsync_graphqlEndpoint': WIND_CONFIG.graphqlEndpoint,
                'aws_appsync_region': WIND_CONFIG.awsRegion,
                'aws_appsync_authenticationType': 'AWS_IAM'
            });

            return Amplify.Auth.federatedSignIn(
                WIND_CONFIG.awsDomain,
                {
                  token: idToken,
                  expires_at: exp * 1000
                },
                {
                  name // the user name
                }
            )
            .catch(function(e) {
                // Failed!
               DEBUG && log("Amplify.Auth.federatedSignIn() request failed: " + e);
            })
            .then(function(cred) {
                if (cred && cred.data && cred.data.Credentials) {
                    return {
                        accessKeyId: cred.data.Credentials.AccessKeyId,
                        secretAccessKey: cred.data.Credentials.SecretKey,
                        sessionToken: cred.data.Credentials.SessionToken
                    };
                }
            });
        }

        _me() {
            return this._graphql({
                "operationName":"Me",
                "variables":{},
                "query":"query Me {\n  me {\n    device {\n      id      __typename\n    }    household {\n      id      __typename\n    }    __typename\n  }\n}\n"
            });
        }

        _graphql(request, media, sync, retry) {
            var that = this;

            if (!WIND_CONFIG.credentials && !retry && !sync) {
                DEBUG && log("No credentials -> acquire credentials first, then retry.");
                 // Call checkToken to acquire the HTTP cookies
                return this._getCredentials(WIND_CONFIG.jwtToken).then(function(credentials){
                    if (credentials) {
                        DEBUG & log("Got credentials: " + JSON.stringify(credentials) + " for jwt token " + WIND_CONFIG.jwtToken);
                        WIND_CONFIG.credentials = credentials;
                    }

                    return that._graphql(request, media, sync, true);
                });
            }

            if (!WIND_CONFIG.jwtToken || !WIND_CONFIG.credentials) {
                DEBUG && log("No or invalid credentials to do graphql request.");
                return Promise.reject(com.zappware.chromecast.Error.NOT_AUTHORIZED);
            }

            if (!WIND_CONFIG.graphqlHost) {
                var _url = new URL(WIND_CONFIG.graphqlEndpoint);
                WIND_CONFIG.graphqlHost = _url.host;
                WIND_CONFIG.graphqlPath = _url.pathname;
            }

            // request: { path | body, [host], [method], [headers], [service], [region] }
            // credentials: { accessKeyId, secretAccessKey, [sessionToken] }
            var postRequest = {
                method: 'POST',
                host: WIND_CONFIG.graphqlHost,
                path: WIND_CONFIG.graphqlPath,
                region: WIND_CONFIG.awsRegion,
                service: 'execute-api',
                body: JSON.stringify(request),
                url: WIND_CONFIG.graphqlEndpoint,
                headers:
                {
                    'content-type': 'application/json',
                    'Device-Id': WIND_CONFIG.deviceId,
                    'Jwt': WIND_CONFIG.jwtToken,
                    'Zappware-User-Agent': WIND_CONFIG.ZappwareUserAgent
                }
            };

            var signedPostRequest = new RequestSigner(postRequest, WIND_CONFIG.credentials).sign();

            return (sync) ?
                com.zappware.chromecast.util.httpPostSync(signedPostRequest.url, signedPostRequest.headers, signedPostRequest.body) :
                com.zappware.chromecast.util.httpPost(signedPostRequest.url, signedPostRequest.headers, signedPostRequest.body)
                .catch(function(e) {
                    DEBUG && log("graphql request failed [Error: " + JSON.stringify(e) + ", Request: " + JSON.stringify(request) + "]");

                    if (!request._fail) {
                        // Possibly the credentials have become invalid: try to resolve by acquiring new credentials
                        WIND_CONFIG.credentials = undefined;

                        // Tag the request so we do not endlessly retry
                        request._fail = e;
                    }
                })
                .then(function(response) {
                    if (response) {
                        delete request._fail; // Delete the _fail flag if the request succeeded.
                        return JSON.parse(response);
                    }

                    if (WIND_CONFIG.credentials === undefined) {
                        return that._graphql(request, media, sync);
                    }

                    return undefined;
                });
        }

        _error(e, more) {
            if (e === com.zappware.chromecast.Error.GRAPHQL_ERROR && more && more[0] &&
                (more[0].errorCode === "0x04020007" ||    // Streaming to a non NOVA enabled device is prohibited for this request
                 more[0].errorCode === "0x04020005" )) {  // Streaming to the device is prohibited for this request
                // NOVASPORTS -> Not allowed to cast
                e = "ZCR_ERR_WIND_NOVA_STREAMING_PROHIBITED";
            }

            return com.zappware.chromecast.Nexx4Player.prototype._error.apply(this, [e, more]);
        }
    };
})();

// Instantiate the player:
com.zappware.chromecast.player = new com.zappware.chromecast.WindPlayer();


