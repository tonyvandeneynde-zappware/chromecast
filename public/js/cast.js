/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

// ALL                             This is a special identifier which can be used to listen for all events (mostly used for debugging purposes). The event will be a subclass of cast.framework.events.Event.
// ABORT                           Fired when the browser stops fetching the media before it is completely downloaded, but not due to an error. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// CAN_PLAY                        Fired when the browser can resume playback of the clip, but estimates that not enough data has been loaded to play the clip to its end without having to stop for buffering. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// CAN_PLAY_THROUGH                Fired when the browser estimates that it can play the clip to its end without stopping for buffering. Note that the browser estimate only pertains to the current clip being played (ie: if currently playing an ad clip, the browser will estimate only for the ad clip and not the complete content). This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// DURATION_CHANGE                 Fired when the duration attribute of the MediaElement has changed. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// EMPTIED                         Fired when the media has become empty. One example where this would happen is when load() is called to reset the MediaElement. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// ENDED                           Fired when a media clip has played to its full duration. This does not include when the clip has stopped playing due to an error or
//                                 stop request. In the case that ads are present, this is fired at most once per ad, and at most once for the main content. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent. If you want to know when the media is done playing, you most likely want to use cast.framework.events.EventType.MEDIA_FINISHED.
// LOADED_DATA                     Fired when the browser has finished loading the first frame of the media clip. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// LOADED_METADATA                 Fired when the browser has finished loading the metadata for a clip. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// LOAD_START                      Fired when the browser begins looking for media data for a clip. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// PAUSE                           Fired when playback is paused. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaPauseEvent.
// PLAY                            Fired when playback is ready to start (ie: after being paused). This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// PLAYING                         Fired when playback has started. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// PROGRESS                        Fired when the browser is fetching media data. If you are using adaptive bitrate streaming (ie: HLS, DASH, SMOOTH), you most likely want to use the cast.framework.events.EventType.SEGMENT_DOWNLOADED event instead. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// RATE_CHANGE                     Fired when the playback rate has been updated. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// SEEKED                          Fired when a seek has finished. This will not be fired in case seeking finishes when the media is paused. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// SEEKING                         Fired when the media is being seeked. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// STALLED                         Fired when the browser is trying to fetch media data, but did not receive a response. The cast.framework.events.EventType.BUFFERING event is implemented consistently across stream types, and should be used instead of 'stalled' when trying to check if the player is buffering. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// TIME_UPDATE                     Fired periodically while the media is playing. This will fire whenever the currentTime attribute changes. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// SUSPEND                         Fired when the browser is intentionally not fetching media data. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// WAITING                         Fired when playback has stopped because the browser is waiting for the next frame to become available. The cast.framework.events.EventType.BUFFERING event is implemented consistently across stream types, and should be used instead of 'waiting' when trying to check if the player is buffering. This event is forwarded from the MediaElement, and has been wrapped in a cast.framework.events.MediaElementEvent.
// BITRATE_CHANGED                 Fired when the bitrate of the playing media changes (such as when an active track is changed, or when a different bitrate is chosen in response to network conditions). Event is a cast.framework.events.BitrateChangedEvent.
// BREAK_STARTED                   Fired when the first break clip in a break is start loading. Event is a cast.framework.events.BreaksEvent.
// BREAK_ENDED                     Fired when the last break clip in a break ends. Event is a cast.framework.events.BreaksEvent.
// BREAK_CLIP_LOADING              Fired when a break clip starts loading. Event is a cast.framework.events.BreaksEvent.
// BREAK_CLIP_STARTED              Fired when a break clip starts. Event is a cast.framework.events.BreaksEvent.
// BREAK_CLIP_ENDED                Fired when a break clip ends. Event is a cast.framework.events.BreaksEvent.
// BUFFERING                       Fired when playback has either stopped due to buffering, or started again after buffering has finished. Event is a cast.framework.events.BufferingEvent.
// CLIP_STARTED                    Fired when any clip first starts to play. This includes break clips and main content clips between break clips. If you want to see when a break clip starts, you should use cast.framework.events.EventType.BREAK_CLIP_STARTED. Event is a cast.framework.events.Event.
// CLIP_ENDED                      Fired when any clip ends. This includes break clips and main content clips between break clips. If you want to see when a break clip ends, you should use cast.framework.events.EventType.BREAK_CLIP_ENDED. If you want to see when the media is completely done playing, you should use cast.framework.events.EventType.MEDIA_FINISHED. Event is a cast.framework.events.ClipEndedEvent.
// ERROR                           Fired when an error occurs. Event is an cast.framework.events.ErrorEvent.
// MEDIA_STATUS                    Fired before an outgoing message is sent containing current media status. Event is a cast.framework.events.MediaStatusEvent.
// MEDIA_FINISHED                  Fired when the media has completely finished playing. This includes the following cases: there is nothing left in the stream to play, user has requested a stop, or an error has occurred. When queuing is used, this event will trigger once for each queue item that finishes. Event is a cast.framework.events.MediaFinishedEvent.
// PLAYER_PRELOADING               Fired when the player begins to handle a preload request. Event is a cast.framework.events.LoadEvent.
// PLAYER_PRELOADING_CANCELLED     Fired if the player cancels preloading. Event is a cast.framework.events.LoadEvent.
// PLAYER_LOAD_COMPLETE            Fired when the player has finished processing a load request and is ready to play. Event is a cast.framework.events.LoadEvent.
// PLAYER_LOADING                  Fired when the player begins to handle a load request. This would fire before the cast.framework.events.EventType.LOAD_START event, since the player has not requested media data yet. Event is a cast.framework.events.LoadEvent.
// SEGMENT_DOWNLOADED              Fired when a segment is finished downloading. This will only be triggered for adaptive streaming content (HLS, DASH, or Smooth). Event is a cast.framework.events.SegmentDownloadedEvent.
// REQUEST_SEEK                    Fired when a seek request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_LOAD                    Fired when a load request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_STOP                    Fired when a stop request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_PAUSE                   Fired when a pause request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_PLAY                    Fired when a play request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_SKIP_AD                 Fired when a skip ad request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_PLAY_AGAIN              Fired when a play again request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_PLAYBACK_RATE_CHANGE    Fired when a playback rate change request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_VOLUME_CHANGE           Fired when a volume change request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_EDIT_TRACKS_INFO        Fired when an edit tracks info request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_EDIT_AUDIO_TRACKS       Fired when an edit audio tracks request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_SET_CREDENTIALS         Fired when a set credentials request is made. Event is a cast.framework.events.request.RequestEvent.
// REQUEST_LOAD_BY_ENTITY          Fired when a load by entity request is made. Event is a cast.framework.events.request.RequestEvent.
// REQUEST_USER_ACTION Fired when a user action request is made. Event is a cast.framework.events.request.RequestEvent.
// REQUEST_DISPLAY_STATUS          Fired when a dsiplay status tracks request is made. Event is a cast.framework.events.request.RequestEvent.
// REQUEST_CUSTOM_COMMAND          Fired when a custom command request is made. Event is a cast.framework.events.request.RequestEvent.
// REQUEST_FOCUS_STATE             Fired when a focus state request is made. Event is a cast.framework.events.request.RequestEvent.
// REQUEST_QUEUE_LOAD              Fired when a queue load request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_QUEUE_INSERT            Fired when a queue insert request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_QUEUE_UPDATE            Fired when a queue update request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_QUEUE_REMOVE            Fired when a queue remove request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_QUEUE_REORDER           Fired when a queue reorder request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_FETCH_ITEMS             Fired when a fetch items request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_GET_ITEMS_INFO          Fired when a get items info request is made. Event is a cast.framework.events.RequestEvent.
// REQUEST_GET_QUEUE_IDS           Fired when a get queue ids request is made. Event is a cast.framework.events.Req


var context = cast.framework.CastReceiverContext.getInstance();
var playerManager = context.getPlayerManager();
const CUSTOM_CHANNEL = 'urn:x-cast:com.zappware.cast.api';
const CUSTOM_LOG_CHANNEL = 'urn:x-cast:com.zappware.cast.log';

com.zappware.chromecast.cast.init = function(playbackConfig) {
    // Only warnings and errors
    context.setLoggerLevel(DEBUG ? cast.framework.LoggerLevel.VERBOSE : cast.framework.LoggerLevel.WARNING);

    function _handleResponseFromInterceptedRequest(response, data) {
        // An intercepted message can be ignored / blocked by having the interception handler
        // returning null.
        if (response instanceof Promise) {
            return response.then(function(r) {
                if (r === null) {
                    data = null;
                }
                return data;
            })
            .catch(function(){})
            .then(function() { return data;});
        }

        return (response === null) ? null : data;
    }

    // intercept the (incoming) LOAD request to be able to read in a contentId and get data
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, function (loadRequestData) {
        console.log('buggg incoming LOAD initercepted')
        return _handleResponseFromInterceptedRequest(com.zappware.chromecast.player.load(loadRequestData), loadRequestData);
    });

    // intercept the (incoming) STOP message to be able to do our own stop handling
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.STOP, function (data) {
        return _handleResponseFromInterceptedRequest(com.zappware.chromecast.player.stop(), data);
    });

    // intercept the (incoming) PAUSE message to be able to do our own pause handling
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.PAUSE, function (data) {
        return _handleResponseFromInterceptedRequest(com.zappware.chromecast.player.pause(), data);
    });

    // intercept the (incoming) PLAY message to be able to do our own play handling
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.PLAY, function (data) {
        return _handleResponseFromInterceptedRequest(com.zappware.chromecast.player.play(), data);
    });

    // intercept the (incoming) SEEK message to be able to do our own seek handling
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.SEEK, function (data) {
        console.log('buggg incominig SEEK message:')
        DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "Message intercepted: " + JSON.stringify(data));

        // If we did the request ourselves, allow it to pass
        if (com.zappware.chromecast.cast._localRequests && com.zappware.chromecast.cast._localRequests.indexOf(data.requestId) >= 0) {
            DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "local request -> allow to pass");
            return data;
        }

        let _mediaSessionToken = com.zappware.chromecast.receiver.getMediaSessionToken();
        if (_mediaSessionToken) {
            let _position = (data.currentTime === undefined) ?
                com.zappware.chromecast.player.getPosition() + data.relativeTime :
                data.currentTime;

            if (_position >= 0) {
                _onCustomEvent({
                    action: 'setCurrentPosition',
                    params: {
                        mediaSessionToken: _mediaSessionToken,
                        position: _position
                    }
                });

                // Set the mediaSessionId to something invalid. This will trigger "Uncaught INVALID_REQUEST", but it is required to
                // return data and not null not to confuse the sender app. Hence this trick to make sure the seek position is not
                // actually applied by the playerManager.
                data.mediaSessionId = undefined;

                // TEMPORARY workaround for strange iOS implementation NEXX4-30295
                // In PLTV a seek from iOS sometimes has a time with reference to the start of the buffer and sometimes it is an epoch time. Depends on weather the buttons or dragging the progress bar was used to trigger the seek.
                const adsBlocks = com.zappware.chromecast.adshandler.getAdsBlocks()
                const startAbsoluteTime = playerManager.getMediaInformation().startAbsoluteTime
                const seekPossible = com.zappware.chromecast.adshandler.canSeek(_position)
                console.log('buggg canSeek cast:', seekPossible)
                let canSeekEpoch = true
                if (adsBlocks.length > 0 && adsBlocks[adsBlocks.length-1].adEndTime > _position + 946681200) { // Don't do the check if the position is in epoch time and the ads are a time with reference to the buffer start.
                    canSeekEpoch = com.zappware.chromecast.adshandler.canSeek(_position + startAbsoluteTime)
                }
                let newPosition = _position
                console.log('buggg canSeekEpoch cast:', canSeekEpoch)
                if (seekPossible && canSeekEpoch){
                    // Check if an ad can be detected when the seek time has the same reference as the ads blocks.
                    newPosition = com.zappware.chromecast.adshandler.validateRequestedPlaybackPosition(_position)
                    if (newPosition === _position) {
                        // Also check if an ad can be detected when the seek time with reference to the buffer start but the ads are in epoch time
                        if (adsBlocks.length > 0 && adsBlocks[adsBlocks.length-1].adEndTime > _position + 946681200) { // Don't do the check if the position is in epoch time and the ads are a time with reference to the buffer start.
                            newPosition = com.zappware.chromecast.adshandler.validateRequestedPlaybackPosition(_position + startAbsoluteTime) - startAbsoluteTime
                        }
                    }
                } else {
                    newPosition = playerManager.getCurrentTimeSec()
                }
                data.currentTime = newPosition
            }
        }
        return data;
    });

    // intercept the (incoming) QUEUE_UPDATE message
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.QUEUE_UPDATE, function (data) {
        if (data.jump) {
            return _handleResponseFromInterceptedRequest(com.zappware.chromecast.player.jump(data.jump), data);
        }
        return null;
    });

    // intercept the (outgoing) MEDIA_STATUS message to be able to add customData
    playerManager.setMessageInterceptor(cast.framework.messages.MessageType.MEDIA_STATUS, function (mediaStatusData) {
        mediaStatusData.customData = com.zappware.chromecast.receiver.getCustomData(cast.framework.messages.MessageType.MEDIA_STATUS);

        // NEXX4-18655: name the audio and subtitle tracks
        if (mediaStatusData.media && mediaStatusData.media.tracks) {
            for (var i = 0; i < mediaStatusData.media.tracks.length; i++) {
                var track = mediaStatusData.media.tracks[i];
                if (!track.name) {
                    if ((track.type === 'AUDIO') || (track.type === 'TEXT')) {
                        track.name = com.zappware.chromecast.util.getLanguageFromIsoCode(track.language);
                    }
                }
            }
        }

        return mediaStatusData;
    });

    playerManager.addEventListener(cast.framework.events.category.CORE, function(event) {
        DEBUG && (event.type !== 'MEDIA_STATUS') && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "onPlayerManagerEvent(" + JSON.stringify(event) + ")");
        var state = com.zappware.chromecast.player.getState();
        switch (event.type) {
            case 'RATE_CHANGE':
                // It has been observed that RATE_CHANGE events are received when the player 'stalls', for example because of a temporary
                // network failure. To confirm that the player is stalled, the position is checked for progress: if no progress for 3 seconds
                // the player is assumed to be stalled.
                if (com.zappware.chromecast.player.getState() === com.zappware.chromecast.PlayerState.PLAYING) {
                    let currentMediaTime = playerManager.getCurrentTimeSec();
                    let mediaInfo = playerManager.getMediaInformation();
                    setTimeout(() => {
                        let stalled =
                            (mediaInfo === playerManager.getMediaInformation() &&
                             com.zappware.chromecast.player.getState() === com.zappware.chromecast.PlayerState.PLAYING &&
                             currentMediaTime === playerManager.getCurrentTimeSec());

                        if (stalled) {
                            com.zappware.chromecast.player.onMediaStalled();
                        }
                    }, 3000);
                }
                break;
            case 'BUFFERING':
                // No buffering if paused/stopped/error
                var isBuffering = (
                    state === com.zappware.chromecast.PlayerState.PAUSED ||
                    state === com.zappware.chromecast.PlayerState.STOPPED ||
                    state === com.zappware.chromecast.PlayerState.ERROR
                    ) ? false : event.isBuffering;
                com.zappware.chromecast.receiver.onBuffering(isBuffering);
                break;
            case 'PLAYING':
                com.zappware.chromecast.receiver.onBuffering(false);
                break;
            case 'SEEKING':
                com.zappware.chromecast.receiver.onBuffering(true);
                break;
            case 'MEDIA_FINISHED':
                if (state === com.zappware.chromecast.PlayerState.SEEKING) {
                    // Ignore when seeking
                    return;
                }

                com.zappware.chromecast.player.onMediaFinished(event);
                com.zappware.chromecast.receiver.onBuffering(false);

                // Force a status update to inform the senders (apparently this does not happen
                // automatically.
                playerManager.sendStatus();

                break;
            default:
                break;
        }

        if (event.senderId === 'local') {
            if (!com.zappware.chromecast.cast._localRequests) {
                com.zappware.chromecast.cast._localRequests = [];
            }
            let requestId = event.requestData && event.requestData.hasOwnProperty('requestId') && event.requestData.requestId;
            if (com.zappware.chromecast.cast._localRequests.indexOf(requestId) < 0) {
                com.zappware.chromecast.cast._localRequests.unshift(requestId);

                // Keep only 10
                if (com.zappware.chromecast.cast._localRequests.length > 10) {
                    com.zappware.chromecast.cast._localRequests.pop();
                }
            }
        }
    });

    function _onEventThatRequiresStop(event) {
        if (!event) {
            return;
        }

        DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "_onEventThatRequiresStop(" + event.type + ")");
        return com.zappware.chromecast.player.shutdown();
    }

    // Use "beforeunload" event, as it seems to arrive *before* cast.framework.system.EventType.SHUTDOWN
    window.addEventListener("beforeunload", _onEventThatRequiresStop);

    context.addEventListener(cast.framework.system.EventType.ERROR, _onEventThatRequiresStop);
    // context.addEventListener(cast.framework.system.EventType.SHUTDOWN, _onEventThatRequiresStop);
    context.addEventListener(cast.framework.system.EventType.STANDBY_CHANGED, _onEventThatRequiresStop);
    context.addEventListener(cast.framework.system.EventType.VISIBILITY_CHANGED, _onEventThatRequiresStop);
    context.addEventListener(cast.framework.system.EventType.READY, function() {
        com.zappware.chromecast.util.log("Starting ZCR VERSION: " + VERSION );
    });
    context.addEventListener(cast.framework.system.EventType.SYSTEM_VOLUME_CHANGED, function() {
        // Restore mute status
        if (com.zappware.chromecast.player.getMuted()) {
            com.zappware.chromecast.player.setMuted(true);
        }
    });

    function _onSenderDisconnect(event) {
        DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "SENDER_DISCONNECTED, senders: " + context.getSenders().length);

        // When "requested_by_sender", we should finish, even if there are other senders connected (ref. NEXX4-17326)
        if (event && event.reason === "requested_by_sender") {
            // Close the receiver app with a small delay to allow session cleanup.
            setTimeout(() => window.close(), 2000);

            // User feedback
            com.zappware.chromecast.receiver.onBuffering(true);

            return com.zappware.chromecast.player.shutdown();
        }
    }

    // HACK: With the code below, it is avoided that senders that are disconnecting because another sender connected, cause the receiver app
    //       to shutdown when these senders disconnect. I know it's very hacky, but I did not find a cleaner way around the limitations of the
    //       CAF API.
    //
    context.addEventListener(cast.framework.system.EventType.SENDER_CONNECTED, function(event) {
        DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "SENDER_CONNECTED, senders: " + context.getSenders().length);

        context.removeEventListener(cast.framework.system.EventType.SENDER_DISCONNECTED, _onSenderDisconnect);

        // Only add the disconnect handler after a delay to avoid disconnecting senders to cause receiver app termination
        setTimeout(() => context.addEventListener(cast.framework.system.EventType.SENDER_DISCONNECTED, _onSenderDisconnect), 2000);
    });

    ////////////// CUSTOM MESSAGES ////////////////////////////////////////////////////////////////////
    context.addCustomMessageListener(CUSTOM_CHANNEL, function (customEvent) {
        try {
            var data = (typeof customEvent.data === "string") ? JSON.parse(customEvent.data) : com.zappware.chromecast.util.cloneObject(customEvent.data);

            return _onCustomEvent(data, customEvent.senderId);
        }
        catch (e) {
            console.error(e);
        }
    });

    function _onCustomEvent(data, sender) {
        try {
            DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "_onCustomEvent(" + JSON.stringify(data)+ ")");

            var action = data.action.substring(3);
            var actionType  = data.action.substring(0, 3); // get or set
            var promise, params;

            if (actionType !== 'get' && actionType !== 'set') {
                // Unsupported custom message:
                com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "unhandled custom message: " + JSON.stringify(data));
                return;
            }

            if (com.zappware.chromecast.receiver['get' + action]) {
                params = com.zappware.chromecast.receiver['get' + action](data.params);
            }

            if (actionType === 'set') {
                promise = com.zappware.chromecast.receiver[data.action](data.params);
            }

            (promise || Promise.resolve())
            .then(function() {
                if (actionType === 'set') {
                    if (com.zappware.chromecast.receiver['get' + action]) {
                        var newParams = com.zappware.chromecast.receiver['get' + action](data.params);

                        // In case there is no update to the parameters, only send a response to the sender
                        // that initiated the request. If parameters changed -> broadcast to all senders.
                        if (JSON.stringify(newParams) !== JSON.stringify(params)) {
                            sender = undefined;
                            params = newParams;
                        }
                    }
                }

                var response = {
                    action: action.charAt(0).toLowerCase() + action.substr(1) + 'Update',
                    params: params
                };
                if (data.requestId) {
                    response.requestId = data.requestId;
                }

                com.zappware.chromecast.cast.sendCustomMessage(response, sender);
            });
        }
        catch (e) {
            console.error(e);
        }
    }

    if (context.getDeviceCapabilities()) {
        // start the context
        var options = {};
        options.maxInactivity = 60;
        options.supportedCommands =
            cast.framework.messages.Command.PAUSE     |
            cast.framework.messages.Command.SEEK      |
            cast.framework.messages.Command.QUEUE_NEXT|
            cast.framework.messages.Command.QUEUE_PREV;
        options.playbackConfig = playbackConfig;
        options.customNamespaces = {};
        options.customNamespaces[CUSTOM_CHANNEL] = cast.framework.system.MessageType.JSON;
        options.customNamespaces[CUSTOM_LOG_CHANNEL] = cast.framework.system.MessageType.STRING;

        context.start(options);
    }
};

com.zappware.chromecast.cast.sendCustomMessage = function(message, sender) {
    DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "sendCustomMessage(" + JSON.stringify(message)+ ")");

    if (context.getSenders().length > 0) {
        // If sender is undefined -> broadcast to all senders
        context.sendCustomMessage(CUSTOM_CHANNEL, sender, message);
    }
};

com.zappware.chromecast.cast.sendCustomLogMessage = function(message) {
    if (context.getSenders().length > 0) {
        // broadcast log to all senders
        context.sendCustomMessage(CUSTOM_LOG_CHANNEL, undefined, message);
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////
