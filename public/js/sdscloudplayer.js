/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.SDSCloudPlayer = (function () {
    // logging
    const log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.SDSCloudPlayer", msg); };

    return class extends com.zappware.chromecast.Nexx4Player {

        // constructor
        constructor() {
            super();

            this._sessionId;
            this._sessionHeartbeatInterval;
        }

        initialize(config) {
            DEBUG && log("initialize()");

            super.initialize(config);
            this._setUpSDSCloudSession()
        }

        _setUpSDSCloudSession() {
            DEBUG && log("_setUpSDSCloudSession()");

            const { sessionEndpoint, deviceId, jwtToken, ZappwareUserAgent } = SDS_CLOUD_CONFIG;
            const headers = {
                'content-type': 'application/json',
                'Device-Id': deviceId,
                'Jwt': jwtToken,
                'Zappware-User-Agent': ZappwareUserAgent
            };

            if (this._sessionId) {
                DEBUG && log("SDS Cloud session already set up.");
                return;
            }

            if (!sessionEndpoint) {
                DEBUG && log("No sessionEndpoint provided by sender application.");
                return;
            }

            com.zappware.chromecast.util.httpPost(sessionEndpoint, headers)
                .then((response) => {
                    const { heartbeatUrl, heartbeatIntervalInSeconds, sessionId } = JSON.parse(response);

                    if (!heartbeatUrl || !heartbeatIntervalInSeconds || !sessionId) {
                        throw new Error('Unexpected data returned from SDS Cloud session set up request.')
                    }

                    this._sessionId = sessionId;
                    this._sessionHeartbeatInterval = setInterval(() => {
                        this._sendSDSCloudSessionHeartbeat(heartbeatUrl);
                    }, heartbeatIntervalInSeconds * 1000);
                })
                .catch((e) => {
                    DEBUG && log("Setting up SDS Cloud session failed: " + JSON.stringify(e));
                });
        }

        _sendSDSCloudSessionHeartbeat(heartbeatUrl) {
            DEBUG && log("_sendSDSCloudSessionHeartbeat()");

            com.zappware.chromecast.util.httpGet(heartbeatUrl)
                .catch(() => {
                    DEBUG && log("SDS Cloud session heartbeat request failed, setting up new SDS Cloud session.");

                    clearInterval(this._sessionHeartbeatInterval)
                    this._sessionId = null
                    this._sessionHeartbeatInterval = null
                    this._setUpSDSCloudSession()
                });
        }     

        _load(loadRequestData) {
            DEBUG && log("_load()");

            this._configureDRM(loadRequestData)

            const query = JSON.parse(loadRequestData.media.contentId)[0];

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
            const that = this;

            // We need a householdId for getting a playback license. If the sender did not provide it,
            // or we did not get it before, obtain it now
            if (!retry && (!SDS_CLOUD_CONFIG.householdId || !SDS_CLOUD_CONFIG.deviceId)) {
                return this._me().then(function(response) {
                    if (response && response.data.me) {
                        if (!SDS_CLOUD_CONFIG.householdId) {
                            SDS_CLOUD_CONFIG.householdId = response.data.me.household.id;
                        }
                        if (!SDS_CLOUD_CONFIG.deviceId) {
                            SDS_CLOUD_CONFIG.deviceId = response.data.me.device.id;
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
            DEBUG && log("_getCredentials()");
            DEBUG && assert(idToken, "Invalid parameter for _getCredentials: " + idToken);

            const { name, exp } = jwt_decode(idToken);

            const Amplify = window['aws-amplify'];

            Amplify.Auth.configure({
                Auth: {
                    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
                    identityPoolId: SDS_CLOUD_CONFIG.awsIdentityPoolId,

                    // REQUIRED - Amazon Cognito Region
                    region: SDS_CLOUD_CONFIG.awsRegion
                },
                'aws_appsync_graphqlEndpoint': SDS_CLOUD_CONFIG.graphqlEndpoint,
                'aws_appsync_region': SDS_CLOUD_CONFIG.awsRegion,
                'aws_appsync_authenticationType': SDS_CLOUD_CONFIG.awsAuthenticationType
            });

            return Amplify.Auth.federatedSignIn(
                SDS_CLOUD_CONFIG.awsDomain,
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
            DEBUG && log("_me()");

            return this._graphql({
                "operationName":"Me",
                "variables":{},
                "query":"query Me {\n  me {\n    device {\n      id      __typename\n    }    household {\n      id      __typename\n    }    __typename\n  }\n}\n"
            });
        }

        _graphql(request, media, sync, retry) {
            DEBUG && log("_graphql()");
            
            const that = this;

            if (!SDS_CLOUD_CONFIG.credentials && !retry && !sync) {
                DEBUG && log("No credentials -> acquire credentials first, then retry.");
                 // Call checkToken to acquire the HTTP cookies
                return this._getCredentials(SDS_CLOUD_CONFIG.jwtToken).then(function(credentials){
                    if (credentials) {
                        DEBUG & log("Got credentials: " + JSON.stringify(credentials) + " for jwt token " + SDS_CLOUD_CONFIG.jwtToken);
                        SDS_CLOUD_CONFIG.credentials = credentials;
                    }

                    return that._graphql(request, media, sync, true);
                });
            }

            if (!SDS_CLOUD_CONFIG.jwtToken || !SDS_CLOUD_CONFIG.credentials) {
                DEBUG && log("No or invalid credentials to do graphql request.");
                return Promise.reject(com.zappware.chromecast.Error.NOT_AUTHORIZED);
            }

            if (!SDS_CLOUD_CONFIG.graphqlHost) {
                const _url = new URL(SDS_CLOUD_CONFIG.graphqlEndpoint);
                SDS_CLOUD_CONFIG.graphqlHost = _url.host;
                SDS_CLOUD_CONFIG.graphqlPath = _url.pathname;
            }

            // request: { path | body, [host], [method], [headers], [service], [region] }
            // credentials: { accessKeyId, secretAccessKey, [sessionToken] }
            const postRequest = {
                method: 'POST',
                host: SDS_CLOUD_CONFIG.graphqlHost,
                path: SDS_CLOUD_CONFIG.graphqlPath,
                region: SDS_CLOUD_CONFIG.awsRegion,
                service: 'execute-api',
                body: JSON.stringify(request),
                url: SDS_CLOUD_CONFIG.graphqlEndpoint,
                headers:
                {
                    'content-type': 'application/json',
                    'Device-Id': SDS_CLOUD_CONFIG.deviceId,
                    'Jwt': SDS_CLOUD_CONFIG.jwtToken,
                    'Zappware-User-Agent': SDS_CLOUD_CONFIG.ZappwareUserAgent,
                    ...(this._sessionId && { 'Cbo-Session': this._sessionId })
                }
            };

            const signedPostRequest = new RequestSigner(postRequest, SDS_CLOUD_CONFIG.credentials).sign();

            return (sync) ?
                com.zappware.chromecast.util.httpPostSync(signedPostRequest.url, signedPostRequest.headers, signedPostRequest.body) :
                com.zappware.chromecast.util.httpPost(signedPostRequest.url, signedPostRequest.headers, signedPostRequest.body)
                .catch(function(e) {
                    DEBUG && log("graphql request failed [Error: " + JSON.stringify(e) + ", Request: " + JSON.stringify(request) + "]");

                    if (!request._fail) {
                        // Possibly the credentials have become invalid: try to resolve by acquiring new credentials
                        SDS_CLOUD_CONFIG.credentials = undefined;

                        // Tag the request so we do not endlessly retry
                        request._fail = e;
                    }
                })
                .then(function(response) {
                    if (response) {
                        delete request._fail; // Delete the _fail flag if the request succeeded.
                        return JSON.parse(response);
                    }

                    if (SDS_CLOUD_CONFIG.credentials === undefined) {
                        return that._graphql(request, media, sync);
                    }

                    return undefined;
                });
        }

        _error(e, more) {
            return com.zappware.chromecast.Nexx4Player.prototype._error.apply(this, [e, more]);
        }

        shutdown() {
            DEBUG && log("shutdown()");

            this._stopSDSCloudSession()
            super.shutdown()
        }

        _stopSDSCloudSession() {
            DEBUG && log("_stopSDSCloudSession()");

            const { deviceId, jwtToken, sessionEndpoint } = SDS_CLOUD_CONFIG;
            const endSessionUrl = sessionEndpoint + '/' + this._sessionId;
            const headers = {
                'Device-Id': deviceId,
                'Jwt': jwtToken
            };

            if (!this._sessionId) {
                DEBUG && log("No SDS Cloud sessionId available.");
                return;
            }

            if (!sessionEndpoint) {
                DEBUG && log("No sessionEndpoint provided by sender application.");
                return;
            }

            com.zappware.chromecast.util.httpDelete(endSessionUrl, headers)
        }

        _configureDRM(loadRequestData) { } // Implemented in child player
    };
})();

// Instantiate the player:
com.zappware.chromecast.player = new com.zappware.chromecast.SDSCloudPlayer();


