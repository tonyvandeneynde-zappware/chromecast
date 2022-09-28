/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.OrangePlayer = (function () {

    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.player", msg); };

    return class extends com.zappware.chromecast.Player {
        // constructor
        constructor() {
            super();

            this._state = com.zappware.chromecast.PlayerState.STOPPED;
            this._maxPlaybackOffset = 3600;
            this._keepSessionAliveTimer;
        }

        _getPlaybackMode(loadRequest) {
            // Only PLTV for Orange
            return com.zappware.chromecast.PlaybackMode.PLTV;
        }

        _load(loadRequestData) {
            var media = loadRequestData.media;
            var customData = loadRequestData.customData;

            // Customize the license url for playback
            var playbackConfig = this.getPlaybackConfig();
            playbackConfig.protectionSystem = cast.framework.ContentProtection.PLAYREADY; // just to be sure Playready is used
            playbackConfig.licenseUrl = customData.licenseUrl ||
                ORANGE_IMCONFIG.pathLicenser + "getLicense?drm=com.microsoft.playready&url=" + encodeURIComponent(media.contentUrl || media.contentId);
            playbackConfig.licenseCustomData = customData.licenseCustomData;

            if (loadRequestData.media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                loadRequestData.media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {

                // We do not expect a load request with an offset for Orange. This fixes ZCR-15
                loadRequestData.customData.currentPosition = undefined;
            }

            return super._load(loadRequestData);
        }

        _loadSession(media, customData) {
            var that = this;
            var result;

            // Stop all sessions, except this one
            var sessions = this._media.slice(0);
            sessions.splice(sessions.indexOf(media),1);

            media._imPlaybackSessionPromise = this._stopSessions(sessions)
            .then(function() {
                media._imPlatformSessionID = customData.imPlatformSessionID;

                // Start a playback session
                return that._startPlaybackSession(
                    customData.imCommunityId,
                    customData.imChannelProviderId,
                    customData.imPlatformSessionID)
                .then(function(params) {
                    DEBUG && log("Started playback session: " + JSON.stringify(params));
                    media._imPlaybackSessionID = params.id;
                    media._imPlaybackSessionPromise = undefined;

                    if (customData.imRegionId && customData.imChannelId) {
                        // Start a transaction, but do not wait for the response as it would delay things
                        media._imTransactionPromise = that._startTransaction(
                            customData.imRegionId,
                            customData.imChannelId,
                            customData.imChannelName,
                            customData.imChannelTitle,
                            media._imPlatformSessionID).then(function(id) {
                                media._imTransactionID = id;
                                media._imTransactionPromise = undefined;
                            });
                    }

                    // Install keepAlive timer for this playback session
                    media._keepSessionAliveTimer = that._handleKeepAlive(media, (params.timeout || 5) * 60);
                })
                .catch(function(e){
                    // Failure to start a playback session -> we'll go into error state.
                    if (!e || Object.values(com.zappware.chromecast.Error).indexOf(e) < 0) {
                        DEBUG && log("Unexpected exception in load(): " + e);
                        e = com.zappware.chromecast.Error.UNEXPECTED_EXCEPTION;
                    }

                    result = e;
                });

                return media._imPlaybackSessionPromise;
            })
            .then(function() {
                DEBUG && log("_load() preparation ready.");
                return result;
            });

            return media._imPlaybackSessionPromise;
        }

        _startPlaybackSession(communityId, channelProviderId, platformSessionId) {
            var uriParams = new URLSearchParams();
            uriParams.set("ACTION", "startPlaybackSession");
            uriParams.set("communityId", communityId);
            uriParams.set("channelProviderId", channelProviderId);
            uriParams.set("CONTENT_READ_KEY", ORANGE_IMCONFIG.readKey);
            uriParams.set("CONTENT_WRITE_KEY", ORANGE_IMCONFIG.writeKey);
            uriParams.set("PLATFORM_SESSION", platformSessionId);

            var url = ORANGE_IMCONFIG.pathPlaybackSession + "?" + uriParams.toString();

            DEBUG && log("_startPlaybackSession() -> url: " + url);
            return com.zappware.chromecast.util.httpGetXML(url)
            .catch(function (error) {
                DEBUG && log("Failed to start playback session: " + JSON.stringify(error));
                if (error instanceof XMLHttpRequest && error.status === 500) {
                    return Promise.reject((error.statusText.indexOf('MaxConcurrentPlaybackSessionsReached') > -1) ?
                        com.zappware.chromecast.Error.SESSION_LIMIT_REACHED :
                        com.zappware.chromecast.Error.SESSION_SERVER_ERROR );
                }
                else {
                    return Promise.reject(com.zappware.chromecast.Error.SESSION_SERVER_DOWN);
                }
            })
            .then(function(xmldoc) {
                if (xmldoc) {
                    var xmlobj = com.zappware.chromecast.util.xmlToObj(xmldoc);
                    return {
                        id: xmlobj.ClientResponseHolder.PlaybackSession.ATTRIBUTES.id,
                        timeout: xmlobj.ClientResponseHolder.PlaybackSession.ATTRIBUTES.timeOut
                    };
                }
                else {
                    return Promise.reject(com.zappware.chromecast.Error.SESSION_SERVER_ERROR);
                }
            });
        }

        _stopPlaybackSession(media) {
            var uriParams = new URLSearchParams();
            uriParams.set("ACTION", "stopPlaybackSession");
            uriParams.set("sessionId", media._imPlaybackSessionID);
            uriParams.set("CONTENT_WRITE_KEY", ORANGE_IMCONFIG.writeKey);
            uriParams.set("PLATFORM_SESSION", media._imPlatformSessionID);

            var url = ORANGE_IMCONFIG.pathPlaybackSession + "?" + uriParams.toString();

            DEBUG && log("stopping playback session: " + url);
            return com.zappware.chromecast.util.httpGet(url).catch(function() {}); // don't care if it goes wrong
        }

        _handleKeepAlive(media, interval) {
            // Start the interval timer to keep the session alive
            if (media._imPlaybackSessionID && media._imPlatformSessionID && interval) {
                var that = this;
                return setInterval(function() {
                    // Safety measure: if we started another session without stopping thie keepAlive
                    //                 for this one, stop it now.
                    if (media === playerManager.getMediaInformation()) {
                        var uriParams = new URLSearchParams();
                        uriParams.set("ACTION", "keepPlaybackSessionAlive");
                        uriParams.set("sessionId", media._imPlaybackSessionID);
                        uriParams.set("CONTENT_WRITE_KEY", ORANGE_IMCONFIG.writeKey);
                        uriParams.set("PLATFORM_SESSION", media._imPlatformSessionID);

                        var url = ORANGE_IMCONFIG.pathPlaybackSession + "?" + uriParams.toString();

                        DEBUG && log("keepAlive: " +  url);
                        com.zappware.chromecast.util.httpGet(url); // don't care if it goes wrong
                    }
                    else {
                        DEBUG && log("New media detected -> stopping previous session");
                        that._stop(media)
                        .then(function() {
                            // finally: remove the media from that._media
                            var index = that._media.indexOf(media);

                            if (index > -1) {
                                that._media.splice(index, 1);
                            }
                        });
                    }
                }, interval * 1000);
            }
        };

        _startTransaction(regionId, channelId, channelName, channelTitle, platformSessionId) {
            var uriParams = new URLSearchParams();
            uriParams.set("ACTION", "startTransaction");
            uriParams.set("regionId", regionId);
            uriParams.set("itemId", channelId);
            uriParams.set("itemName", channelName || "UNKNOWN");
            uriParams.set("channel", channelTitle || "UNKNOWN");
            uriParams.set("itemType", "Channel");
            uriParams.set("eventAction", "CHV");
            uriParams.set("logRepository", "ClientTxLogRepository");
            uriParams.set("CONTENT_READ_KEY", ORANGE_IMCONFIG.readKey);
            uriParams.set("CONTENT_WRITE_KEY", ORANGE_IMCONFIG.writeKey);
            uriParams.set("PLATFORM_SESSION", platformSessionId);

            var url = ORANGE_IMCONFIG.pathClientTransaction + "?" + uriParams.toString();

            DEBUG && log("_startTransaction() -> url: " + url);
            return com.zappware.chromecast.util.httpGetXML(url)
            .then(function(xmldoc) {
                if (xmldoc) {
                    return com.zappware.chromecast.util.xmlToObj(xmldoc).ClientResponseHolder.STRING;
                }
            }).catch(function (error) {
                DEBUG && log("startTransaction failed: " + JSON.stringify(error));

                // Ignore this, it is not affecting the user experience.
            });
        }

        _endTransaction(media, streamInfo) {
                var uriParams = new URLSearchParams();
                uriParams.set("ACTION", "endTransaction");
                uriParams.set("transactionId", media._imTransactionID);
                uriParams.set("logRepository", "ClientTxLogRepository");
                uriParams.set("streamInfo", encodeURI(JSON.stringify(streamInfo || this._getStreamInfo(media))));
                uriParams.set("CONTENT_READ_KEY", ORANGE_IMCONFIG.readKey);
                uriParams.set("CONTENT_WRITE_KEY", ORANGE_IMCONFIG.writeKey);
                uriParams.set("PLATFORM_SESSION", media._imPlatformSessionID);

                var url = ORANGE_IMCONFIG.pathClientTransaction + "?" + uriParams.toString();

                DEBUG && log("_endTransaction: " + url);
                return com.zappware.chromecast.util.httpGet(url).catch(function() {}); // don't care if it goes wrong
        }

        _getStreamInfo(media) {
            var streamInfo = {
                networkType: "chromecast"
            };

            if (media._playingStartedAt) {
                streamInfo.sessionDuration = Math.floor(com.zappware.chromecast.util.getCurrentTime() - media._playingStartedAt);
            }

            if (media._stats) {
                streamInfo.avgBitRate = media._stats.getAverageBitrate();
                streamInfo.nbrSwitchesLowerProfile = media._stats.getNbrSwitchesLowerProfile();
                streamInfo.nbrSwitchesHigherProfile = media._stats.getNbrSwitchesHigherProfile();
            }

            // TODO (?) rebufferingCount

            return streamInfo;
        }

        _stop(media) {
            // if already stopping, just return the promise
            if (media._stoppingPromise) {
                return media._stoppingPromise;
            }

            if (!media._imPlaybackSessionPromise && !media._imPlaybackSessionID) {
                // Nothing to stop
                return;
            }
            DEBUG && log("_stop()");

            // Send the requests to end the transaction and/or stop the playback session asap
            var stopPlaybackSessionPromise = (media._imPlaybackSessionID) ? this._stopPlaybackSession(media) : undefined;
            var endTransactionPromise = (media._imTransactionID) ? this._endTransaction(media) : undefined;

            var that = this;
            media._stoppingPromise = Promise.resolve()
            .then(function() {
                return media._imPlaybackSessionPromise;
            })
            .then(function() {
                return media._imTransactionPromise;
            })
            .catch(function(e) {
                // It's ok if this goes wrong
                DEBUG && log("_stop() failed: " + e);
            })
            .then(function() {
                if (media._keepSessionAliveTimer) {
                    clearInterval(media._keepSessionAliveTimer);
                }
                if (endTransactionPromise) {
                    return endTransactionPromise;
                }
                else if (media._imTransactionID) {
                    return that._endTransaction(media);
                }
            })
            .then(function() {
                if (stopPlaybackSessionPromise) {
                    return stopPlaybackSessionPromise;
                }
                else if (media._imPlaybackSessionID) {
                    return that._stopPlaybackSession(media);
                }
            });

            return media._stoppingPromise;
        }
    };
})();

// Instantiate the player:
com.zappware.chromecast.player = new com.zappware.chromecast.OrangePlayer();


