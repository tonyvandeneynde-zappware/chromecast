/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.Player = (function () {
    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.player", msg); };

    return class {
        // constructor
        constructor() {
            // playback config
            this.playbackConfig = new cast.framework.PlaybackConfig();

            // We assume we're not using DRM.
            this.playbackConfig.protectionSystem = cast.framework.ContentProtection.NONE;
            this.playbackConfig.licenseUrl = undefined;
            this.playbackConfig.licenseCustomData = undefined;
            this.playbackConfig.licenseRequestHandler = function (requestInfo) {
                requestInfo.withCredentials = true;
            };

            // Variables:
            this._media = [];
            this._currentMedia = undefined;
            this._config = undefined;
        }

        // initialize //////////////////////////////////////////////////////////////////////////////////
        initialize(config) {
            DEBUG && log("_initialize()");
            this._config = com.zappware.chromecast.util.cloneObject(config);
        }

        // load ////////////////////////////////////////////////////////////////////////////////////////
        load(loadRequestData) {
            console.log('A1ATPUB-1042:146')
            DEBUG && log("load(); loadRequestData = " + JSON.stringify(loadRequestData) + "; playerState: " + playerManager.getPlayerState());

            DEBUG && assert(loadRequestData.customData, "Missing property 'customData' on loadRequestData.");
            DEBUG && assert(loadRequestData.media, "Missing property 'media' on loadRequestData.");
            DEBUG && assert(loadRequestData.media.contentId, "Missing property 'contentId' on loadRequestData.");

            if (!this._config) {
                console.log('A1ATPUB-1042:147')
                DEBUG && log("load(); loadRequestData = " + JSON.stringify(loadRequestData) + " ignored: not initialized!");
                return null;
            }

            // Force the current position to undefined to start playing live. TODO: make this dependent on the
            // type (LIVE / NPVR / VOD / ... )
            loadRequestData.currentPosition = undefined;

            // Convert customData to object
            loadRequestData.customData = com.zappware.chromecast.util.getAsObject(loadRequestData.customData);

            if (loadRequestData._loaded) {
                DEBUG && log("Already loaded");

                return loadRequestData;
            }

            var that = this;
            this._currentMedia = loadRequestData.media;
            if (this._loading) {
                console.log('A1ATPUB-1042:148')
                DEBUG && log("another load request is in progress, this one is delayed.");
                this._loading.then(function() {
                    if (that._currentMedia === loadRequestData.media) {
                        playerManager.load(loadRequestData);
                    }
                });

                // Loose this load request; a new one will be created when this._loading is resolved.
                // This fixes NEXX4-18782.
                return null;
            }

            // Hold off new load requests for a short while
            this._loading = new Promise(function(resolve) {
                setTimeout(function() {
                    console.log('A1ATPUB-1042:149')
                    that._loading = undefined;
                    resolve();
                }, 3000);
            });

            // Piggy back the mediaSessionToken on the media's customData
            if (loadRequestData.customData.mediaSessionToken) {
                console.log('A1ATPUB-1042:150')
                if (loadRequestData.media.customData) {
                    console.log('A1ATPUB-1042:151')
                    loadRequestData.media.customData = com.zappware.chromecast.util.getAsObject(loadRequestData.media.customData);
                }
                else {
                    console.log('A1ATPUB-1042:152')
                    loadRequestData.media.customData = {};
                }
                loadRequestData.media.customData.mediaSessionToken = loadRequestData.customData.mediaSessionToken;
            }

            this._media.push(loadRequestData.media);
            this._state = com.zappware.chromecast.PlayerState.LOADING;

            loadRequestData.media._playbackMode = this._getPlaybackMode(loadRequestData);
            if (loadRequestData.media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                loadRequestData.media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                console.log('A1ATPUB-1042:153')
                // If we have a currentTime set, we want to start in PLTV.
                if (loadRequestData.currentTime) {
                    console.log('A1ATPUB-1042:154')
                    if (!loadRequestData.customData.currentPosition && loadRequestData.currentTime > 0) {
                        console.log('A1ATPUB-1042:155')
                        loadRequestData.customData.currentPosition = loadRequestData.currentTime;
                    }
                }
                loadRequestData.currentTime = undefined;
                loadRequestData.media.streamType = 'LIVE';
                loadRequestData.media.startAbsoluteTime = undefined;
                loadRequestData.media.duration = undefined;

                let currPos = loadRequestData.customData.currentPosition || com.zappware.chromecast.util.getCurrentTime();
                loadRequestData.media._positionInfo = {
                    minPosition: currPos,
                    maxPosition: Math.max(currPos, com.zappware.chromecast.util.getCurrentTime()),
                    curPosition: currPos
                };
            }
            else {
                console.log('A1ATPUB-1042:156')
                if (loadRequestData.customData.currentPosition !== undefined) {
                    console.log('A1ATPUB-1042:157')
                    loadRequestData.currentTime = loadRequestData.customData.currentPosition;
                }
                loadRequestData.currentTime = loadRequestData.currentTime || 0;
                loadRequestData.media._positionInfo = {
                    minPosition: 0,
                    maxPosition: undefined,
                    curPosition: loadRequestData.currentTime
                };
            }

            // Notify receiver that we are loading
            com.zappware.chromecast.receiver.onLoad(
                loadRequestData.media._playbackMode,
                loadRequestData.customData.mediaSessionToken,
                loadRequestData.media.metadata);

            // Reload function (no fuzz)
            this._reload = function(properties) {
                console.log('A1ATPUB-1042:158')
                if (loadRequestData) {
                    console.log('A1ATPUB-1042:159')
                    com.zappware.chromecast.receiver.onBuffering(true); // Show the loading indicator

                    // Add a flag to indicate the loadRequest has already been handled.
                    loadRequestData._loaded = true;

                    // The currently active tracks should remain active after the reload
                    try {
                        loadRequestData.activeTrackIds = [];
                        var audioTrack = playerManager.getAudioTracksManager().getActiveTrack();
                        if (audioTrack) {
                            console.log('A1ATPUB-1042:160')
                            loadRequestData.activeTrackIds.push(audioTrack.trackId);
                        }
                        var textTracks = playerManager.getTextTracksManager().getActiveTracks();
                        if (textTracks && textTracks.length) {
                            console.log('A1ATPUB-1042:161')
                            for (var i = 0; i < textTracks.length; i++) {
                                loadRequestData.activeTrackIds.push(textTracks[i].trackId);
                            }
                        }
                    }
                    catch(e) {
                        // Ignore any error: it should not hold back the reload.
                        DEBUG && log("Unexpected exception " + e + " while applying tracks");
                    }

                    if (properties) {
                        console.log('A1ATPUB-1042:162')
                        for (var p in properties) {
                            if (properties.hasOwnProperty(p)) {
                                loadRequestData[p] = properties[p];
                            }
                        }
                    }

                    loadRequestData.media.startAbsoluteTime = undefined;
                    playerManager.load(loadRequestData);
                }
            };

            return this._load(loadRequestData);
        };

        _getPlaybackMode(loadRequest) {
        };

        // play ///////////////////////////////////////////////////////////////////////////////////////
        play() {
            console.log('A1ATPUB-1042:163')
            if (this.canPause()) {
                console.log('A1ATPUB-1042:164')
                switch(this._state) {
                    case com.zappware.chromecast.PlayerState.SEEKING:
                    case com.zappware.chromecast.PlayerState.PAUSED:
                    case com.zappware.chromecast.PlayerState.PLAYING:
                        this._state = com.zappware.chromecast.PlayerState.PLAYING;
                        break;
                    default:
                        break;
                }
            }
            // Inform the receiver
            com.zappware.chromecast.receiver.onPlay();

            return (this._state === com.zappware.chromecast.PlayerState.PLAYING) || null;
        }

        // pause ///////////////////////////////////////////////////////////////////////////////////////
        pause() {
            console.log('A1ATPUB-1042:165')
            if (this.canPause()) {
                console.log('A1ATPUB-1042:166')
                switch(this._state) {
                    case com.zappware.chromecast.PlayerState.SEEKING:
                    case com.zappware.chromecast.PlayerState.PAUSED:
                    case com.zappware.chromecast.PlayerState.PLAYING:
                        console.log('A1ATPUB-1042:167')
                        this._state = com.zappware.chromecast.PlayerState.PAUSED;
                        break;
                    default:
                        break;
                }
            }
            // Inform the receiver
            com.zappware.chromecast.receiver.onPause();

            return (this._state === com.zappware.chromecast.PlayerState.PAUSED) || null;
        }

        // seek ///////////////////////////////////////////////////////////////////////////////////////
        seek(data) {
            console.log('A1ATPUB-1042:168')
            // Allow only when playing / paused / seeking
            if (this._state === com.zappware.chromecast.PlayerState.PLAYING ||
                this._state === com.zappware.chromecast.PlayerState.PAUSED  ||
                this._state === com.zappware.chromecast.PlayerState.SEEKING ||
                this._reloadAndSeekInProgressForPosition                    ){
                console.log('A1ATPUB-1042:169')
    //            data.currentTime = mediaInfo.playerManager.getCurrentTimeSec();
    //            data.relativeTime = 0;
                return data;
            }

            return null;
        }

        // jump ///////////////////////////////////////////////////////////////////////////////////////
        jump(jump) {
            console.log('A1ATPUB-1042:170')
            DEBUG && log("jump(" + jump + ")");

            // Allow only when playing / paused / seeking
            if (this._state === com.zappware.chromecast.PlayerState.PLAYING ||
                this._state === com.zappware.chromecast.PlayerState.PAUSED  ||
                this._state === com.zappware.chromecast.PlayerState.SEEKING ||
                this._reloadAndSeekInProgressForPosition                    ){
                    console.log('A1ATPUB-1042:171')
                if (this.canJump(jump)) {

                    // TODO!!!
                }
            }

            return null;
        }

        // shutdown ///////////////////////////////////////////////////////////////////////////////////
        shutdown() {
            console.log('A1ATPUB-1042:172')
            DEBUG && log("shutdown()");

            // Clear video src to avoid a glimps of video is shown when shutting down while locked
            var video = document.getElementById("videoPlayer");
            video.src = '';

            // No need for a full stop: we are shutting down and have only limited time. Important
            // activity on shutdown is the session teardown.
            this._stopSessions(this._media);
        }

        // stop ///////////////////////////////////////////////////////////////////////////////////////
        stop() {
            console.log('A1ATPUB-1042:173')
            if (this._state === com.zappware.chromecast.PlayerState.STOPPED) {
                console.log('A1ATPUB-1042:174')
                return; // It should be OK to allow the request to be handled by the player
            }
            DEBUG && log("stop()");

            this._state = com.zappware.chromecast.PlayerState.STOPPED;
            com.zappware.chromecast.receiver.onStop();

            this._stopSessions(this._media);
        }

        // error //////////////////////////////////////////////////////////////////////////////////////
        _error(e, more) {
            console.log('A1ATPUB-1042:175')
            if (this._state === com.zappware.chromecast.PlayerState.ERROR) {
                return;
            }
            DEBUG && log("_error(" + e + ")");

            // Clear video src to avoid a video is shown while in error
            var video = document.getElementById("videoPlayer");
            video.src = '';

            this._state = com.zappware.chromecast.PlayerState.ERROR;
            this._stopSessions();

            // Set idle reason for the senders to detect there is an error
            playerManager.setIdleReason('ZCR_ERR');

            // In case of an error, do a quick check to see if we are still connected. If not, overrule
            // the error with the NO_NETWORK error.
            var that = this;
            com.zappware.chromecast.util.httpHead('/', 1000)
            .catch(function() {
                // Disabled; HEAD requests not always allowed
                // e = com.zappware.chromecast.Error.NO_NETWORK;
            })
            .then(function() {
                if (that._state === com.zappware.chromecast.PlayerState.ERROR ||
                    that._state === com.zappware.chromecast.PlayerState.STOPPED) {
                    com.zappware.chromecast.receiver.onError(e, more);
                }
            });
        }

        // onMediaFinished ///////////////////////////////////////////////////////////////////////////////////
        onMediaFinished(event) {
            console.log('A1ATPUB-1042:176')
            if (this._state === com.zappware.chromecast.PlayerState.PLAYING ||
                this._state === com.zappware.chromecast.PlayerState.PAUSED) {
                    console.log('A1ATPUB-1042:177')
                DEBUG && log(`onMediaFinished("${event.endedReason}")`);

                if (event.endedReason === "ERROR") {
                    console.log('A1ATPUB-1042:178')
                    this._error(com.zappware.chromecast.Error.PLAYBACK);
                }
                else if (event.endedReason === "END_OF_STREAM") {
                    console.log('A1ATPUB-1042:179')
                    var mediaInfo = playerManager.getMediaInformation() || this._currentMedia;
                    if (this._stopPLTV && mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                        // Switch to LIVETV on EOS in PLTV
                        console.log('A1ATPUB-1042:180')
                        this._stopPLTV();
                    }
                    else {
                        console.log('A1ATPUB-1042:181')
                        this.stop();
                    }
                }
            }
        }

        // onMediaStalled ///////////////////////////////////////////////////////////////////////////////////
        onMediaStalled() {
            console.log('A1ATPUB-1042:181')
        }

        // getState ///////////////////////////////////////////////////////////////////////////////////
        getState() {
            console.log('A1ATPUB-1042:182')
            return this._state;
        }

        // setPosition ////////////////////////////////////////////////////////////////////////////////
        setPosition(position, resumeState) {
            console.log('A1ATPUB-1042:6 setPosition', position)
            var mediaInfo = playerManager.getMediaInformation();
            switch(this._state) {
                case com.zappware.chromecast.PlayerState.LOADING:
                case com.zappware.chromecast.PlayerState.LOADED:
                case com.zappware.chromecast.PlayerState.ERROR:
                case com.zappware.chromecast.PlayerState.STOPPED:
                    console.log('A1ATPUB-1042:183')
                    return;
                case com.zappware.chromecast.PlayerState.SEEKING:
                    console.log('A1ATPUB-1042:184')
                    if (this._reloadAndSeekInProgressForPosition) {
                        console.log('A1ATPUB-1042:185')
                        // Another _reloadAndSeekRequest is pending -> it is sufficient to update
                        this._reloadAndSeekInProgressForPosition = position;
                        return this._reloadAndSeekPromise;
                    }
                    break;
                default:
                    break;
            }

            if (!this.canSeek(mediaInfo, position)) {
                console.log('A1ATPUB-1042:186')
                DEBUG && log("setPosition(" + position + ") ignored: setPosition not supported.");
                return;
            }

            // We're seeking
            this._state = com.zappware.chromecast.PlayerState.SEEKING;

            // position should be within expected range (if valid)
            if (this.getMaxPosition() > this.getMinPosition()) {
                console.log('A1ATPUB-1042:187')
                position = Math.max(Math.min(position, this.getMaxPosition()), this.getMinPosition());
            }
            position = com.zappware.chromecast.adshandler.validateRequestedPlaybackPosition(position)
            // Fix the requested position in the _positionInfo to avoid positions jumping back and forth
            if (mediaInfo._positionInfo) {
                console.log('A1ATPUB-1042:188')
                mediaInfo._positionInfo.curPosition = position;
            }

            if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:189')
                var seekableRange = playerManager.getLiveSeekableRange();
                if (position >= seekableRange.end + mediaInfo.startAbsoluteTime) {
                    console.log('A1ATPUB-1042:190')
                    // Handle position out of seekable range: reload and seek. If position is close to 'now'
                    // we set it to a large value, which implies we jump to live.
                    if (Math.abs(position - this.getMaxPosition()) < 5) {
                        position = Number.MAX_SAFE_INTEGER;
                    }
                    return this._reloadAndSeek(position, resumeState);
                }
            }
            console.log('A1ATPUB-1042:4 setposition', position)
            return this._seek(position, resumeState);
        }

        // isTimeshiftEnabled /////////////////////////////////////////////////////////////////////////
        isTimeshiftEnabled(mediaInfo, seekableRange) {
            console.log('A1ATPUB-1042:191')
            mediaInfo = mediaInfo || playerManager.getMediaInformation();

            if (mediaInfo && !mediaInfo._timeshiftEnabled) {
                console.log('A1ATPUB-1042:192')
                seekableRange = seekableRange || playerManager.getLiveSeekableRange();
                mediaInfo._timeshiftEnabled = (seekableRange && seekableRange.end > seekableRange.start);
            }

            return (mediaInfo ? mediaInfo._timeshiftEnabled : undefined);
        }

        // canPause /////////////////////////////////////////////////////////////////////////////////
        canPause(mediaInfo) {
            console.log('A1ATPUB-1042:193')
            mediaInfo = mediaInfo || playerManager.getMediaInformation();

            if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:194')
                return this.isTimeshiftEnabled(mediaInfo);
            }

            return true;
        }

        // canSeek //////////////////////////////////////////////////////////////////////////////////
        canSeek(mediaInfo, position) {
            console.log('A1ATPUB-1042:195')
            mediaInfo = mediaInfo || playerManager.getMediaInformation();

            if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:196')
                return this.isTimeshiftEnabled(mediaInfo) && com.zappware.chromecast.adshandler.canSeek(position);
            }

            return com.zappware.chromecast.adshandler.canSeek(position)
        }

        // canJump //////////////////////////////////////////////////////////////////////////////////
        canJump(jump, mediaInfo) {
            console.log('A1ATPUB-1042:197')
            mediaInfo = mediaInfo || playerManager.getMediaInformation();

            if (mediaInfo.queueData) {
                console.log('A1ATPUB-1042:198')
                var qMgr = playerManager.getQueueManager();
                var items = qMgr.getItems();
                var newIndex = qMgr.getCurrentItemIndex() + jump;

                return (items && newIndex >= 0 && newIndex < items.length);
            }

            return false;
        }

        _getPositionInfo(mediaInfo) {
            console.log('A1ATPUB-1042:199')
            mediaInfo = mediaInfo || playerManager.getMediaInformation() || this._currentMedia;

            // If we can't return a position, or the player is in error state, return empty position info
            if (!mediaInfo || !mediaInfo._positionInfo || this._state === com.zappware.chromecast.PlayerState.ERROR) {
                console.log('A1ATPUB-1042:200')
                return {};
            }

            // Return the cached position if we're unable to obtain a position now or if we just updated the positionInfo
            if (playerManager.getPlayerState()      === 'IDLE'              ||
                playerManager.getMediaInformation() === undefined           ||
                playerManager.getCurrentTimeSec()   === undefined           ||
                mediaInfo._positionInfo.timer                               ||
                this._state === com.zappware.chromecast.PlayerState.STOPPED ||
                this._state === com.zappware.chromecast.PlayerState.LOADING ||
                this._state === com.zappware.chromecast.PlayerState.LOADED  ||
                this._state === com.zappware.chromecast.PlayerState.SEEKING ){
                    console.log('A1ATPUB-1042:201')
                // In case we have a timer running, restart it. Motivation: It has been observed that the timer failed
                // to be cleared in reload scenarios, so this is a kind of safety net to avoid the position never to be
                // updated again.
                if (mediaInfo._positionInfo.timer) {
                    console.log('A1ATPUB-1042:202')
                    clearTimeout(mediaInfo._positionInfo.timer);
                    mediaInfo._positionInfo.timer = setTimeout(() => delete mediaInfo._positionInfo.timer, 0);
                }

                return mediaInfo._positionInfo;
            }

            mediaInfo._positionInfo.timer = setTimeout(() => delete mediaInfo._positionInfo.timer, 0);
            mediaInfo._positionInfo.updatedAt = com.zappware.chromecast.util.getCurrentTime();

            // Update the position info and return it
            this._updatePositionInfo(mediaInfo);

            return mediaInfo._positionInfo;
        }

        _getCurrentPosition(media) {
            console.log('A1ATPUB-1042:203')
            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:204')
                // Relative to current time
                var curPosition = Math.min(this._reloadAndSeekInProgressForPosition, com.zappware.chromecast.util.getCurrentTime());
                if (curPosition) {
                    console.log('A1ATPUB-1042:205')
                    return curPosition;
                }

                var curTimeSec = playerManager.getCurrentTimeSec();
                var seekableRange = playerManager.getLiveSeekableRange();

                // In LIVETV or PLTV, ignore any position not within range
                if (media && ((seekableRange && curTimeSec > seekableRange.start) || this._state === com.zappware.chromecast.PlayerState.PAUSED)) {
                    console.log('A1ATPUB-1042:206')
                    if (media.startAbsoluteTime) {
                        console.log('A1ATPUB-1042:207')
                        return media.startAbsoluteTime + curTimeSec;
                    }
                    else if (media._playingStartedAt && this._state !== com.zappware.chromecast.PlayerState.LOADING) {
                        console.log('A1ATPUB-1042:208')
                        return media._playingStartedAt + curTimeSec;
                    }
                }

                return com.zappware.chromecast.util.getCurrentTime();
            }

            return playerManager.getCurrentTimeSec();;
        }

        _updatePositionInfo(media) {
            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:209')
                let curPosition = this._getCurrentPosition(media);
                if (this.isTimeshiftEnabled() && media._playingStartedAt) {
                    console.log('A1ATPUB-1042:210')
                    media._positionInfo.maxPosition = com.zappware.chromecast.util.getCurrentTime();
                    media._positionInfo.minPosition = Math.max(media._playingStartedAt, media._positionInfo.maxPosition - this._maxPlaybackOffset);
                    media._positionInfo.curPosition = Math.max(Math.min(curPosition || Number.MAX_SAFE_INTEGER, media._positionInfo.maxPosition), media._positionInfo.minPosition);
                }
                else {
                    console.log('A1ATPUB-1042:211')
                    media._positionInfo.curPosition = media._positionInfo.minPosition = media._positionInfo.maxPosition = curPosition;
                }
            }
            else {
                console.log('A1ATPUB-1042:212')
                // Absolute
                media._positionInfo.curPosition = playerManager.getCurrentTimeSec();
                media._positionInfo.minPosition = 0;

                var seekableRange;
                if (media._playbackMode === com.zappware.chromecast.PlaybackMode.STARTOVER ||
                    media._playbackMode === com.zappware.chromecast.PlaybackMode.NPVR) {
                        console.log('A1ATPUB-1042:213')
                    seekableRange = playerManager.getLiveSeekableRange();
                }
                media._positionInfo.maxPosition = (seekableRange) ? seekableRange.end : playerManager.getDurationSec();
            }
            com.zappware.chromecast.adshandler.checkAdEnterExit()
        }

        // getPosition ////////////////////////////////////////////////////////////////////////////////
        getPosition(mediaInfo) {
            console.log('A1ATPUB-1042:214')
            return this._getPositionInfo(mediaInfo).curPosition;
        }

        // getMinPosition /////////////////////////////////////////////////////////////////////////////
        getMinPosition(mediaInfo) {
            console.log('A1ATPUB-1042:215')
            return this._getPositionInfo(mediaInfo).minPosition;
        }

        // getMaxPosition /////////////////////////////////////////////////////////////////////////////
        getMaxPosition(mediaInfo) {
            console.log('A1ATPUB-1042:216')
            return this._getPositionInfo(mediaInfo).maxPosition;
        }

        // setMuted ///////////////////////////////////////////////////////////////////////////////////
        setMuted(mute) {
            this._muted = mute;

            // Directly on video element in stead of context.setSystemVolumeMuted(mute) to avoid
            // feedback of system volume bar.
            document.getElementById("videoPlayer").muted = !!mute;
        }

        // getMuted ///////////////////////////////////////////////////////////////////////////////////
        getMuted() {
            return this._muted;
        }

        // getCustomData //////////////////////////////////////////////////////////////////////////////
        getCustomData(messageType) {
            console.log('A1ATPUB-1042:217')
            var mediaInfo = playerManager.getMediaInformation();

            var customData = {
                minPosition: this.getMinPosition(),
                currentPosition: this.getPosition(),
                maxPosition: this.getMaxPosition(),
                playbackMode: mediaInfo && mediaInfo._playbackMode
            };

            return customData;
        }

        // getPlaybackConfig //////////////////////////////////////////////////////////////////////////
        getPlaybackConfig() {
            console.log('A1ATPUB-1042:218')
            return this.playbackConfig;
        }

        getMediaStartAbsoluteTime(media, force) {
            console.log('A1ATPUB-1042:219')
            media = media || playerManager.getMediaInformation() || this._currentMedia;
            if (!media.startAbsoluteTime || force) {
                console.log('A1ATPUB-1042:220')
                var liveSeekableRange = playerManager.getLiveSeekableRange();
                if (liveSeekableRange && liveSeekableRange.end > liveSeekableRange.start) {
                    console.log('A1ATPUB-1042:221')
                    // We rely on the startAbsoluteTime to be present in case timeshift is supported, but
                    // it is not there -> set it ourselves.
                    media.startAbsoluteTime = com.zappware.chromecast.util.getCurrentTime() - liveSeekableRange.end;
                    if (media._offsetToLive) {
                        console.log('A1ATPUB-1042:222')
                        DEBUG && log("media._offsetToLive was set: adding another " + media._offsetToLive + 's');
                        media.startAbsoluteTime += media._offsetToLive;
                    }
                    DEBUG && log("media.startAbsoluteTime was not set: set it to " + media.startAbsoluteTime);
                }
            }
            return media.startAbsoluteTime;
        }

        // Non-public methods ////////////////////////////////////////////////////////////////////////
        _load(loadRequestData) {
            console.log('A1ATPUB-1042:223')
            var that = this;
            var media = loadRequestData.media;

            DEBUG && log("player._load()");

            // Stop all sessions, except this one
            var sessions = this._media.slice(0);
            sessions.splice(sessions.indexOf(media),1);

            this._stopSessions(sessions).then(function() {
                // Handle playback session, keepalive, and transaction setup in parallel
                that._loadSession(loadRequestData.media, loadRequestData.customData).then(function(error) {
                    DEBUG && log("player._loadSession() done -> proceeding: " + (media === that._currentMedia));
                    if (media === that._currentMedia) {
                        console.log('A1ATPUB-1042:224')
                        if (error) {
                            DEBUG && log("Load failure: Error " + error + " during load request.");

                            // _load failed -> stop the playback and go to error state
                            playerManager.stop();
                            if (that._state !== com.zappware.chromecast.PlayerState.ERROR) {
                                that._error(error || com.zappware.chromecast.Error.LOAD_FAILED);
                            }
                        }
                    }
                });
            });

            // Configure the QOS
            var qos = this._config.qos;
            this.playbackConfig.autoPauseDuration  = qos.autoPauseDuration;
            this.playbackConfig.autoResumeDuration = qos.autoResumeDuration;
            this.playbackConfig.autoResumeNumberOfSegments = qos.autoResumeNumberOfSegments;
            this.playbackConfig.initialBandwidth   = qos.initialBandwidth;

            var loadingTimeout = setTimeout(function() {
                if (media === that._currentMedia && that._state !== com.zappware.chromecast.PlayerState.ERROR) {
                    DEBUG && log("Load failure: Did not receive PLAYING event in time.") ;
                    that._error(com.zappware.chromecast.Error.LOAD_FAILED);
                }
            }, qos.maxLoadDuration);

            var _onPlaying = function() {
                console.log('A1ATPUB-1042:225')
                if (that._state !== com.zappware.chromecast.PlayerState.PLAYING) {
                    DEBUG && log(`${that._state} -> PLAYING`);
                    that._state = com.zappware.chromecast.PlayerState.PLAYING;
                }

                com.zappware.chromecast.receiver.onPlaying();
                clearTimeout(loadingTimeout);

                // Start collecting statistics
                media._stats = new com.zappware.chromecast.Stats();
                media._stats.start();

                // Remove the listener: playback errors are caught in cast.js
                playerManager.removeEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
            };

            var _onError = function(event) {
                // Use cases:
                //     * licenser auth failed because of bad token -> errorCode = 6, detailedErrorCode = 300
                //     * no licenser provided: -> errorCode = 6, detailedErrorCode = 200
                //     * other?
                //
                that._error((event && event.errorCode === 6) ?
                    com.zappware.chromecast.Error.NOT_AUTHORIZED :
                    com.zappware.chromecast.Error.LOAD_FAILED);

                clearTimeout(loadingTimeout);
            };

            var _handlePlayerManagerEvent = function(event) {
                console.log('A1ATPUB-1042:226')
                if (event.type === "REQUEST_LOAD" || media !== that._currentMedia || that._reloadAndSeekInProgressForPosition) {
                    //  Bail out if a new load request arrived.
                    console.log('A1ATPUB-1042:227')
                    playerManager.removeEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
                    return;
                }

                if (!playerManager.getMediaInformation()) {
                    console.log('A1ATPUB-1042:228')
                    DEBUG && log("No media? This is fatal.");
                    playerManager.removeEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
                    _onError();
                    return;
                }

                DEBUG && assert(media === playerManager.getMediaInformation(), "Unexpected change of media!");

                switch(event.type) {
                    case 'ERROR':
                        if (that._state === com.zappware.chromecast.PlayerState.LOADING && !that._isHarmless(event)) {
                            DEBUG && log("LOADING -> ERROR");
                            _onError(event);
                        }
                        break;
                    case "PLAYER_LOAD_COMPLETE":
                        console.log('A1ATPUB-1042:229')
                        that._state = com.zappware.chromecast.PlayerState.LOADED;
                        media._playingStartedAt = com.zappware.chromecast.util.getCurrentTime();
                        that.getMediaStartAbsoluteTime(media, true);

                        if (playerManager.getPlayerState() === 'PLAYING' && loadRequestData.customData.currentPosition === undefined) {
                            _onPlaying();
                        }
                        break;
                    case 'SEEKING':
                        console.log('A1ATPUB-1042:230')
                        if (that._state === com.zappware.chromecast.PlayerState.LOADED) {
                            console.log('A1ATPUB-1042:231')
                            if (loadRequestData.customData.currentPosition >= 0) {
                                console.log('A1ATPUB-1042:232')
                                that._state = com.zappware.chromecast.PlayerState.SEEKING;
                                let settingPosition = that.setPosition(loadRequestData.customData.currentPosition);
                                if (settingPosition instanceof Promise) {
                                    console.log('A1ATPUB-1042:233')
                                    settingPosition.then(function() {
                                        _onPlaying();
                                    });

                                    // Further event handling is managed by setPosition()
                                    playerManager.removeEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
                                    clearTimeout(loadingTimeout);
                                }
                                loadRequestData.customData.currentPosition = undefined;
                            }
                            that._selectPreferredTracks(that._config.playback);
                        }
                        break;
                    case 'PLAYING':
                        console.log('A1ATPUB-1042:234')
                        _onPlaying();
                        break;
                    default:
                        break;
                }
            };

            playerManager.addEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);

            return loadRequestData;
        }

        _waitForEvent(_event, timeout) {
            console.log('A1ATPUB-1042:235')
            var that = this;
            return this._waitForEvents([_event, , "ERROR"], timeout, function(event) {
                return ((event && event.type !== 'ERROR') || !that._isHarmless(event));
            });
        }

        _waitForEvents(events, timeout, functor) {
            console.log('A1ATPUB-1042:236')
            return new Promise(function(resolve) {
                var _timeout = timeout && setTimeout(_resolve, timeout);
                var _handlePlayerManagerEvent = function(event) {
                    if (event && events.indexOf(event.type) >= 0) {
                        if (!functor || functor(event)) {
                            _resolve(event);
                        }
                    }
                };

                function _resolve(event) {
                    if (_timeout) {
                        clearTimeout(_timeout);
                    }

                    playerManager.removeEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
                    resolve(event);
                }

                playerManager.addEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
            });
        }

        _selectPreferredTracks(config) {
            console.log('A1ATPUB-1042:237')
            try {
                if (config.audioLanguagePreference && config.audioLanguagePreference.length) {
                    DEBUG && log("Selecting audio track:");
                    this._selectPreferredTrack(playerManager.getAudioTracksManager(), config.audioLanguagePreference);
                }

                if (config.subtitleLanguagePreference && config.subtitleLanguagePreference.length) {
                    DEBUG && log("Selecting subtitle track:");
                    this._selectPreferredTrack(playerManager.getTextTracksManager(), config.subtitleLanguagePreference);

                    // Configure subtitle styling.
                    var textTrackStyle = new cast.framework.messages.TextTrackStyle();
                    textTrackStyle.backgroundColor = "#00000000"; // "#RRGGBBAA"
                    textTrackStyle.fontFamily = "Droid Sans";
                    textTrackStyle.edgeType = cast.framework.messages.TextTrackEdgeType.RAISED;
                    textTrackStyle.edgeColor = "#00000011";

                    playerManager.getTextTracksManager().setTextTrackStyle(textTrackStyle);
                }
            }
            catch(e) {
                // Ignore any error: it should not cause more problems
                DEBUG && log("Unexpected exception " + e + " while selecting preferred tracks");
            }
        }

        _selectPreferredTrack(mgr, preferences) {
            console.log('A1ATPUB-1042:238')
            var tracks;
            var activeLanguage;
            try {
                tracks = mgr.getTracks();
            }
            catch(e) {
                DEBUG && log("getTracks failed: " + e);
            }
            try {
                var activeTrack = mgr.getActiveTrack && mgr.getActiveTrack() || mgr.getActiveTracks()[0];
                if (activeTrack) {
                    activeLanguage = com.zappware.chromecast.util.normalizeLanguageIsoCode(activeTrack.language);
                }
            }
            catch(e) {
                DEBUG && log("getActiveTrack failed: " + e);
            }

            if (tracks && tracks.length && preferences && preferences.length) {
                console.log('A1ATPUB-1042:239')
                DEBUG && log("available tracks: " + JSON.stringify(tracks) + ")");
                var languages = [];
                for (var i = 0; i < tracks.length; i++) {
                    languages.push(com.zappware.chromecast.util.normalizeLanguageIsoCode(tracks[i].language));
                }

                DEBUG && log("available languages: " + JSON.stringify(languages) + ")");
                DEBUG && log("preferences: " + JSON.stringify(preferences) + ")");
                for (var j = 0; j < preferences.length; j++) {
                    var index = languages.indexOf(preferences[j]);
                    if (index >= 0) {
                        if (languages[index] === activeLanguage) {
                            DEBUG && log("language (" + activeLanguage + ") already active -> no need to select track.");
                            break;
                        }

                        DEBUG && log("select track: " + JSON.stringify(tracks[index]) + ")");
                        mgr.setActiveById ?
                            mgr.setActiveById ( tracks[index].trackId ) :
                            mgr.setActiveByIds([tracks[index].trackId]) ;
                        break;
                    }
                }
            }
        }

        _seek(position, resumeState) {
            console.log('A1ATPUB-1042:240')
            var mediaInfo = playerManager.getMediaInformation();

            if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:241')
                // position is absolute -> convert it to the buffer time
                position = position - mediaInfo.startAbsoluteTime;

                var seekableRange = playerManager.getLiveSeekableRange();
                if (seekableRange && seekableRange.end > seekableRange.start) {
                    console.log('A1ATPUB-1042:242')
                    position = Math.min(Math.max(position, seekableRange.start), seekableRange.end);
                }

                if (position < mediaInfo._offsetToLive) {
                    console.log('A1ATPUB-1042:243')
                    position = mediaInfo._offsetToLive;
                }
            }

            // Pausing before seek seems to reduce time to seek
            if (mediaInfo._playbackMode !== com.zappware.chromecast.PlaybackMode.LIVETV &&
                this.getState() === com.zappware.chromecast.PlayerState.PLAYING)  {
                    console.log('A1ATPUB-1042:244')
                DEBUG && log("calling pause before seek " + position);
                playerManager.pause();
            }

            var promise = Promise.resolve();
            if (position !== playerManager.getCurrentTimeSec()) {
                console.log('A1ATPUB-1042:245')
                DEBUG && log("calling seek " + position);
                console.log('A1ATPUB-1042:5 seek', position)
                playerManager.seek(position);
                promise = this._waitForEvent('SEEKED');
            }

            // If no or bad resumeState, assume it is PLAYING
            if (resumeState !== com.zappware.chromecast.PlayerState.PAUSED) {
                console.log('A1ATPUB-1042:246')
                resumeState = com.zappware.chromecast.PlayerState.PLAYING;
            }

            var that = this;
            var media = this._currentMedia;
            return promise.then(function(event) {
                console.log('A1ATPUB-1042:247')
                if (media !== that._currentMedia) {
                    console.log('A1ATPUB-1042:248')
                    return;
                }

                if (playerManager.getPlayerState() !== 'PLAYING' && resumeState === com.zappware.chromecast.PlayerState.PLAYING) {
                    console.log('A1ATPUB-1042:249')
                    playerManager.play();
                    return that._waitForEvent('PLAYING');
                }

                if (playerManager.getPlayerState() !== 'PAUSED' && resumeState === com.zappware.chromecast.PlayerState.PAUSED) {
                    console.log('A1ATPUB-1042:250')
                    playerManager.pause();
                    return that._waitForEvent('PAUSE');
                }
            }).then(function(event) {
                console.log('A1ATPUB-1042:251')
                if (media === that._currentMedia) {
                    console.log('A1ATPUB-1042:252')
                    that._state = resumeState;
                    com.zappware.chromecast.receiver.onSeeked();
                }
            });
        }

        _reloadAndSeek(position, resumeState) {
            console.log('A1ATPUB-1042:253')
            DEBUG && log("_reloadAndSeek(" + position + ")");
            var that = this;

            this._reloadAndSeekInProgressForPosition = position;
            this._reloadAndSeekObject = {}; // object to detect new call to _reloadAndSeek

            if (this._reloadAndSeekPromise) {
                console.log('A1ATPUB-1042:254')
                return this._reloadAndSeekPromise.then(function(){
                    return that._reloadAndSeek(position, resumeState);
                });
            }

            this._reloadAndSeekPromise = new Promise(function(resolve) {
                console.log('A1ATPUB-1042:255')
                var media = that._currentMedia;
                var object = that._reloadAndSeekObject;
                var player_load_complete = false;

                function _reloadAndSeekDone(result) {
                    if (that._reloadAndSeekObject === object) {
                        console.log('A1ATPUB-1042:256')
                        that._reloadAndSeekInProgressForPosition = undefined;
                    }
                    that._reloadAndSeekPromise = undefined;

                    // Remove the listener: playback errors are caught in cast.js
                    playerManager.removeEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);

                    // resolve promise
                    resolve(result);
                }

                // A listener for playerManagerEvents will handle things for us.
                function _handlePlayerManagerEvent(event) {
                    console.log('A1ATPUB-1042:257')
                    if (event && event.type === 'PLAYER_LOAD_COMPLETE') {
                        console.log('A1ATPUB-1042:258')
                        player_load_complete = true;
                    }

                    // We have been interrupted by another (re)load request: bail out!
                    if (that._currentMedia !== media || (player_load_complete && that._reloadAndSeekObject !== object)) {
                        console.log('A1ATPUB-1042:259')
                        DEBUG && log(`_reloadAndSeek(${position}) was interrupted by another (re)load request -> bailing out`);
                        _reloadAndSeekDone();
                        return;
                    }

                    switch(event && event.type) {
                        case 'PLAYER_LOAD_COMPLETE':
                            console.log('A1ATPUB-1042:260')
                            if (media !== playerManager.getMediaInformation()) {
                                console.log('A1ATPUB-1042:261')
                                DEBUG && log("Media change when reloading");

                                // Update the media references
                                DEBUG && assert(that._media.indexOf(media) >= 0, "media not in backlog?");
                                that._media[that._media.indexOf(media)] = that._currentMedia = media = playerManager.getMediaInformation();
                            }

                            that.getMediaStartAbsoluteTime(media, true);

                            if (that.getState() === com.zappware.chromecast.PlayerState.SEEKING) {
                                console.log('A1ATPUB-1042:262')
                                if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV) {
                                    console.log('A1ATPUB-1042:263')
                                    playerManager.play();
                                }
                                else {
                                    console.log('A1ATPUB-1042:264')
                                    // We're still seeking
                                    console.log('A1ATPUB-1042:6 stil seeking', position)
                                    that._seek(position, resumeState);
                                }
                            }
                            break;
                        case 'PLAYING':
                        case 'SEEKED':
                            console.log('A1ATPUB-1042:265')
                            DEBUG && log("_reloadAndSeek(" + position + ") -> done !!! ");
                            _reloadAndSeekDone(media);
                            break;
                        case 'ERROR':
                                if (!that._isHarmless(event)) {
                                DEBUG && log("_reloadAndSeek(" + position + ") -> ERROR !!! ");
                                that._error(com.zappware.chromecast.Error.SEEK_FAILED);
                                _reloadAndSeekDone();
                            }
                            break;
                        default:
                            break;
                    }
                }

                // Install the listener
                playerManager.addEventListener(cast.framework.events.category.CORE, _handlePlayerManagerEvent);
                that._reload({
                    currentTime: undefined
                });
            });

            return this._reloadAndSeekPromise;
        }

        _isHarmless(error) {
            switch (error.detailedErrorCode) {
                case cast.framework.events.DetailedErrorCode.MEDIA_ERROR_MESSAGE:
                    // INVALID_REQUEST errors can be ignored
                    if (error.error && error.error.type === "INVALID_REQUEST") {
                        return true;
                    }
                    break;
                default:
                    break;
            }

            return false;
        }

        _stopSessions(sessions) {
            console.log('A1ATPUB-1042:266')
            sessions = sessions || this._media;
            var promises = [];

            DEBUG && log("stopping media sessions (" + sessions.length + ")");
            for (var i = 0; i < sessions.length; i++) {
                var media = sessions[i];
                if (media._stats) {
                    media._stats.stop();
                }
                var stopping = this._stop(media);
                if (stopping instanceof Promise) {
                    promises.push(stopping);
                }

                // Remove from _media.
                var index = this._media.indexOf(media);
                if (index > -1) {
                    this._media.splice(index, 1);
                }
            }

            return (promises.length > 1) ? Promise.all(promises) : (promises.length) ? promises[0] : Promise.resolve();
        }
    };
})();


com.zappware.chromecast.PlayerState = {
    STOPPED: 0,
    LOADING: 1,
    LOADED: 2,
    PLAYING: 3,
    PAUSED: 4,
    SEEKING: 5,
    ERROR: 6
};

com.zappware.chromecast.PlaybackMode = {
    LIVETV: 'LIVETV',
    PLTV: 'PLTV',
    STARTOVER: 'STARTOVER',
    CUTV: 'CUTV',
    NPVR: 'NPVR',
    VOD: 'VOD'
};
