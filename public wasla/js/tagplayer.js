/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.TagPlayer = (function () {
    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.TagPlayer", msg); };

    return class extends com.zappware.chromecast.Nexx4Player {
        // constructor
        constructor() {
            super();
        }

        _load(loadRequestData) {
            DEBUG && log("_load()");

            if (TAG_CONFIG.pathLic) {
                var playbackConfig = this.getPlaybackConfig();
                playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
                playbackConfig.licenseUrl = TAG_CONFIG.pathLic;
                playbackConfig.licenseRequestHandler = function (requestInfo) {
                    var media = loadRequestData.media;
                    requestInfo.url = TAG_CONFIG.pathLic.replace('$DEVICE_ID$', base64.encode(media._customData.sessionParams.device_id));
                    requestInfo.withCredentials = false;
                };
            }

            return com.zappware.chromecast.Nexx4Player.prototype._load.apply(this, [loadRequestData]);
        };

        _checkToken(sessionParams) {
            DEBUG && assert(sessionParams && sessionParams.device_id && sessionParams.token,
                "Invalid parameter for _checkToken: " + JSON.stringify(sessionParams));

            var uriParams = new URLSearchParams();
            uriParams.set("devId", sessionParams.device_id);
            uriParams.set("token", sessionParams.token);
            uriParams.set("apply", true);

            var url = TAG_CONFIG.pathEvo + "/auth/CheckToken?" + uriParams.toString();

            DEBUG && log("CheckToken -> url: " + url);
            return com.zappware.chromecast.util.httpGet(url)
            .then(function(response) {
                if (response) {
                    return JSON.parse(response).token;
                }
            }).catch(function (error) {
                DEBUG && log("CheckToken failed on DS EVO " + ((error) ? error.message : undefined));
            });
        }

        _cloneToken(sessionParams) {
            DEBUG && assert(sessionParams && sessionParams.device_id,
                "Invalid parameter for _cloneToken: " + JSON.stringify(sessionParams));

            var uriParams = new URLSearchParams();
            uriParams.set("devId", sessionParams.device_id);

            var url = TAG_CONFIG.pathEvo + "/auth/CloneToken?" + uriParams.toString();

            DEBUG && log("CloneToken -> url: " + url);
            return com.zappware.chromecast.util.httpGet(url)
            .then(function(response) {
                if (response) {
                    return JSON.parse(response).token;
                }
            }).catch(function (error) {
                DEBUG && log("CloneToken failed on SDS EVO " + ((error) ? error.message : undefined));
            });
        }

        _logout(sessionParams) {
            if (!sessionParams) {
                var media = playerManager.getMediaInformation() || this._currentMedia;
                sessionParams = media && media._customData.sessionParams;
            }

            if (sessionParams && sessionParams.cloned_token) {
                var url = TAG_CONFIG.pathEvo + "/auth/Logout";

                DEBUG && log("Logout -> url: " + url);
                return com.zappware.chromecast.util.httpGet(url)
                .then(function(response) {
                    if (response) {
                        return JSON.parse(response).token;
                    }
                }).catch(function (error) {
                    DEBUG && log("Logout failed on SDS EVO " + ((error) ? error.message : undefined));
                });
            }
        }

        shutdown() {
            this._logout(); // NEXX4-17105: do not wait for completion
            super.shutdown();
        }

        _graphql(request, media, sync, sessionParams, retry) {
            var that = this;
            if (!sessionParams) {
                media = media || playerManager.getMediaInformation() || this._currentMedia;
                sessionParams = media && media._customData && media._customData.sessionParams;
            }

            if (sessionParams && !sessionParams.cloned_token && !retry && !sync) {
                DEBUG && log("No cloned token -> acquire a cloned token first, then retry.");

                // Backward compatibility
                if (TAG_CONFIG['pathEvo'].endsWith('/auth')) {
                    TAG_CONFIG['pathEvo'] = TAG_CONFIG['pathEvo'].slice(0, -5);
                }

                 // Call checkToken to acquire the HTTP cookies
                return this._checkToken(sessionParams).then(function(){
                    return that._cloneToken(sessionParams).then(function(clonedToken) {
                        if (clonedToken) {
                            sessionParams.cloned_token = clonedToken;
                        }

                        return that._graphql(request, media, sync, sessionParams, true);
                    });
                });
            }

            if (!sessionParams || !sessionParams.device_id || !sessionParams.cloned_token || !sessionParams.user_id) {
                DEBUG && log("No or invalid session parameters to do graphql request.");
                return Promise.resolve();
            }

            let headers = {
                'Content-Type': 'application/json',
                'Zappware-User-Agent': TAG_CONFIG.ZappwareUserAgent,
                'SDSEVO_DEVICE_ID': sessionParams.device_id,
                'SDSEVO_SESSION_ID': sessionParams.cloned_token,
                'SDSEVO_USER_ID': sessionParams.user_id
            };

            return (sync) ?
                com.zappware.chromecast.util.httpPostSync(TAG_CONFIG.pathMW, headers, JSON.stringify(request)) :
                com.zappware.chromecast.util.httpPost(TAG_CONFIG.pathMW, headers, JSON.stringify(request))
                .catch(function(e) {
                    DEBUG && log("graphql request failed [Error: " + JSON.stringify(e) + ", Request: " + JSON.stringify(request) + "]");

                    if (!request._fail) {
                        // Possibly the token has become invalid: try to resolve by cloning
                        sessionParams.cloned_token = undefined;

                        // Tag the request so we do not endlessly retry
                        request._fail = e;
                    }
                })
                .then(function(response) {
                    if (response) {
                        delete request._fail; // Delete the _fail flag if the request succeeded.
                        return JSON.parse(response);
                    }

                    if (sessionParams.cloned_token === undefined) {
                        return that._graphql(request, media, sync, sessionParams);
                    }

                    return undefined;
                });
        }
    };
})();

// Instantiate the player:
com.zappware.chromecast.player = new com.zappware.chromecast.TagPlayer();


