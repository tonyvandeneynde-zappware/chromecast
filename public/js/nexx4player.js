/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.Nexx4Player = (function () {
    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.Nexx4Player", msg); };
    var queries = {
        playChannel: {
            "operationName":"playChannel",
            "variables":{ input: undefined },
            "query":"mutation playChannel($input: PlayChannelInput!) {\n  playChannel(input: $input) {\n    playbackInfo {\n      sessionId\n      url\n      channel {\n        id\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        pauseLiveChannel: {
            "operationName":"pauseLiveChannel",
            "variables":{ input: undefined },
            "query":"mutation pauseLiveChannel($input: PauseLiveChannelInput!) {\n  pauseLiveChannel(input: $input) {\n    playbackInfo {\n      url\n      sessionId\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      playbackRestrictions {\n        message\n        __typename\n      }\n      event {\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      streamStart\n      streamEnd\n      maximumBufferSize\n      endOfStreamBehaviour\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        playVODAsset: {
            "operationName":"playVODAsset",
            "variables":{ input: undefined },
            "query":"mutation playVODAsset($input: PlayVODAssetInput!) {\n  playVODAsset(input: $input) {\n    playbackInfo {\n      deliveryKind\n      url\n      endOfEpisodeOffset\n      sessionId\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      vodAsset {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        setVODBookmark: {
            "operationName":"setVODBookmark",
            "variables":{ input: undefined, profileId: undefined },
            "query":"mutation setVODBookmark($input: SetVODBookmarkInput!, $profileId: ID!) {\n  setVODBookmark(input: $input) {\n    vodAsset {\n      ...cacheInfoFragment\n      personalInfo(profileId: $profileId) {\n        ...personalVODInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment personalVODInfoFragment on PersonalVODInfo {\n  ...cacheInfoFragment\n  bookmark {\n    ...bookmarkFragment\n    __typename\n  }\n  __typename\n}\n\nfragment cacheInfoFragment on Cacheable {\n  __typename\n  id\n  expiry\n}\n\nfragment bookmarkFragment on Bookmark {\n  ...cacheInfoFragment\n  position\n  audio\n  subtitle\n  __typename\n}\n"
        },
        playTrailer: {
            "operationName":"playTrailer",
            "variables":{ input: undefined },
            "query":"mutation playTrailer($input: PlayTrailerInput!) {\n  playTrailer(input: $input) {\n    playbackInfo {\n      deliveryKind\n      url\n      sessionId\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        playRecording: {
            "operationName":"playRecording",
            "variables":{ input: undefined },
            "query":"mutation playRecording($input: PlayRecordingInput!) {\n  playRecording(input: $input) {\n    playbackInfo {\n      url\n      sessionId\n      recording {\n        start\n        end\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        setRecordingBookmark: {
            "operationName":"setRecordingBookmark",
            "variables":{ input: undefined, profileId: undefined },
            "query":"mutation setRecordingBookmark($input: SetRecordingBookmarkInput!, $profileId: ID!) {\n  setRecordingBookmark(input: $input) {\n    recording {\n      start\n      ...cacheInfoFragment\n      personalInfo(profileId: $profileId) {\n        ...personalRecordingInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment personalRecordingInfoFragment on PersonalRecordingInfo {\n  bookmark {\n    ...cacheInfoFragment\n    position\n    __typename\n  }\n  __typename\n}\n\nfragment cacheInfoFragment on Cacheable {\n  __typename\n  id\n  expiry\n}\n"
        },
        restartEvent: {
            "operationName":"restartEvent",
            "variables":{ input: undefined },
            "query":"mutation restartEvent($input: RestartEventInput!) {\n  restartEvent(input: $input) {\n    playbackInfo {\n      url\n      streamStart\n      streamEnd\n      sessionId\n      event {\n        id\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        catchupEvent: {
            "operationName":"catchupEvent",
            "variables":{ input: undefined },
            "query":"mutation catchupEvent($input: CatchupEventInput!) {\n  catchupEvent(input: $input) {\n    playbackInfo {\n      url\n      streamStart\n      streamEnd\n      sessionId\n      event {\n        id\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        setEventBookmark: {
            "operationName":"setEventBookmark",
            "variables":{ input: undefined, profileId: undefined },
            "query":"mutation setEventBookmark($input: SetEventBookmarkInput!, $profileId: ID!) {\n  setEventBookmark(input: $input) {\n    event {\n      ...cacheInfoFragment\n      personalInfo(profileId: $profileId) {\n        ...personalEventInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment personalEventInfoFragment on PersonalEventInfo {\n  ...cacheInfoFragment\n  recordings(kindFilter: NETWORK) {\n    ... on NetworkRecording {\n      id\n      start\n      end\n      status\n      availableUntil\n      personalRecordingInfo: personalInfo(profileId: $profileId) {\n        ...personalRecordingInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  bookmark {\n    ...bookmarkFragment\n    __typename\n  }\n  __typename\n}\n\nfragment cacheInfoFragment on Cacheable {\n  __typename\n  id\n  expiry\n}\n\nfragment bookmarkFragment on Bookmark {\n  ...cacheInfoFragment\n  position\n  audio\n  subtitle\n  __typename\n}\n\nfragment personalRecordingInfoFragment on PersonalRecordingInfo {\n  bookmark {\n    ...cacheInfoFragment\n    position\n    __typename\n  }\n  __typename\n}\n"
        },
        keepAlive: {
            "operationName":"keepAlive",
            "variables":{},
            "query":"mutation keepAlive {\n  keepSessionAlive {\n    sessionTimeout\n    __typename\n  }\n}\n"
        },
        stopPlayback: {
            "operationName":"stopPlayback",
            "variables":{ input: undefined },
            "query":"mutation stopPlayback($input: StopPlaybackInput!) {\n  stopPlayback(input: $input) {\n    success\n    __typename\n  }\n}\n"
        },
        getCurrentEvent: {
            "operationName": "getCurrentEvent",
            "variables": { },
            "query": "query getCurrentEvent($channelId: ID!, $time: Date!) {\n  channel(id: $channelId) {\n    eventsAt(time: $time, previous: 0, following: 0) {\n      id\n      expiry\n      items {\n        ...nowPlayingEventFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\n\nfragment nowPlayingEventFragment on Event {\n  ...eventInfoBasicFragment\n  __typename\n}\n\nfragment eventInfoBasicFragment on Event {\n  id\n  title\n  start\n  end\n  __typename\n}\n"
        }
    };
    var tempQueries = {
        playChannel: {
            "operationName":"playChannel",
            "variables":{ input: undefined },
            "query":"mutation playChannel($input: PlayChannelInput!) {\n  playChannel(input: $input) {\n    playbackInfo {\n      sessionId\n      url\n    adPlaybackRestrictions\n      channel {\n        id\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        pauseLiveChannel: {
            "operationName":"pauseLiveChannel",
            "variables":{ input: undefined },
            "query":"mutation pauseLiveChannel($input: PauseLiveChannelInput!) {\n  pauseLiveChannel(input: $input) {\n    playbackInfo {\n      url\n      sessionId\n    adPlaybackRestrictions\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      playbackRestrictions {\n        message\n        __typename\n      }\n      event {\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      streamStart\n      streamEnd\n      maximumBufferSize\n      endOfStreamBehaviour\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        playVODAsset: {
            "operationName":"playVODAsset",
            "variables":{ input: undefined },
            "query":"mutation playVODAsset($input: PlayVODAssetInput!) {\n  playVODAsset(input: $input) {\n    playbackInfo {\n      deliveryKind\n      url\n      endOfEpisodeOffset\n      sessionId\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      vodAsset {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        setVODBookmark: {
            "operationName":"setVODBookmark",
            "variables":{ input: undefined, profileId: undefined },
            "query":"mutation setVODBookmark($input: SetVODBookmarkInput!, $profileId: ID!) {\n  setVODBookmark(input: $input) {\n    vodAsset {\n      ...cacheInfoFragment\n      personalInfo(profileId: $profileId) {\n        ...personalVODInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment personalVODInfoFragment on PersonalVODInfo {\n  ...cacheInfoFragment\n  bookmark {\n    ...bookmarkFragment\n    __typename\n  }\n  __typename\n}\n\nfragment cacheInfoFragment on Cacheable {\n  __typename\n  id\n  expiry\n}\n\nfragment bookmarkFragment on Bookmark {\n  ...cacheInfoFragment\n  position\n  audio\n  subtitle\n  __typename\n}\n"
        },
        playTrailer: {
            "operationName":"playTrailer",
            "variables":{ input: undefined },
            "query":"mutation playTrailer($input: PlayTrailerInput!) {\n  playTrailer(input: $input) {\n    playbackInfo {\n      deliveryKind\n      url\n      sessionId\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        playRecording: {
            "operationName":"playRecording",
            "variables":{ input: undefined },
            "query":"mutation playRecording($input: PlayRecordingInput!) {\n  playRecording(input: $input) {\n    playbackInfo {\n      url\n      sessionId\n    adPlaybackRestrictions\n      recording {\n        start\n        end\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        setRecordingBookmark: {
            "operationName":"setRecordingBookmark",
            "variables":{ input: undefined, profileId: undefined },
            "query":"mutation setRecordingBookmark($input: SetRecordingBookmarkInput!, $profileId: ID!) {\n  setRecordingBookmark(input: $input) {\n    recording {\n      start\n      ...cacheInfoFragment\n      personalInfo(profileId: $profileId) {\n        ...personalRecordingInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment personalRecordingInfoFragment on PersonalRecordingInfo {\n  bookmark {\n    ...cacheInfoFragment\n    position\n    __typename\n  }\n  __typename\n}\n\nfragment cacheInfoFragment on Cacheable {\n  __typename\n  id\n  expiry\n}\n"
        },
        restartEvent: {
            "operationName":"restartEvent",
            "variables":{ input: undefined },
            "query":"mutation restartEvent($input: RestartEventInput!) {\n  restartEvent(input: $input) {\n    playbackInfo {\n      url\n      streamStart\n      streamEnd\n      sessionId\n    adPlaybackRestrictions\n      event {\n        id\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        catchupEvent: {
            "operationName":"catchupEvent",
            "variables":{ input: undefined },
            "query":"mutation catchupEvent($input: CatchupEventInput!) {\n  catchupEvent(input: $input) {\n    playbackInfo {\n      url\n      streamStart\n      streamEnd\n      sessionId\n    adPlaybackRestrictions\n      event {\n        id\n        channel {\n          id\n          __typename\n        }\n        __typename\n      }\n      heartbeat {\n        ... on HttpHeartbeat {\n          url\n          interval\n          includeAuthHeaders\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
        },
        setEventBookmark: {
            "operationName":"setEventBookmark",
            "variables":{ input: undefined, profileId: undefined },
            "query":"mutation setEventBookmark($input: SetEventBookmarkInput!, $profileId: ID!) {\n  setEventBookmark(input: $input) {\n    event {\n      ...cacheInfoFragment\n      personalInfo(profileId: $profileId) {\n        ...personalEventInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment personalEventInfoFragment on PersonalEventInfo {\n  ...cacheInfoFragment\n  recordings(kindFilter: NETWORK) {\n    ... on NetworkRecording {\n      id\n      start\n      end\n      status\n      availableUntil\n      personalRecordingInfo: personalInfo(profileId: $profileId) {\n        ...personalRecordingInfoFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  bookmark {\n    ...bookmarkFragment\n    __typename\n  }\n  __typename\n}\n\nfragment cacheInfoFragment on Cacheable {\n  __typename\n  id\n  expiry\n}\n\nfragment bookmarkFragment on Bookmark {\n  ...cacheInfoFragment\n  position\n  audio\n  subtitle\n  __typename\n}\n\nfragment personalRecordingInfoFragment on PersonalRecordingInfo {\n  bookmark {\n    ...cacheInfoFragment\n    position\n    __typename\n  }\n  __typename\n}\n"
        },
        keepAlive: {
            "operationName":"keepAlive",
            "variables":{},
            "query":"mutation keepAlive {\n  keepSessionAlive {\n    sessionTimeout\n    __typename\n  }\n}\n"
        },
        stopPlayback: {
            "operationName":"stopPlayback",
            "variables":{ input: undefined },
            "query":"mutation stopPlayback($input: StopPlaybackInput!) {\n  stopPlayback(input: $input) {\n    success\n    __typename\n  }\n}\n"
        },
        getCurrentEvent: {
            "operationName": "getCurrentEvent",
            "variables": { },
            "query": "query getCurrentEvent($channelId: ID!, $time: Date!) {\n  channel(id: $channelId) {\n    eventsAt(time: $time, previous: 0, following: 0) {\n      id\n      expiry\n      items {\n        ...nowPlayingEventFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\n\nfragment nowPlayingEventFragment on Event {\n  ...eventInfoBasicFragment\n  __typename\n}\n\nfragment eventInfoBasicFragment on Event {\n  id\n  title\n  start\n  end\n  __typename\n}\n"
        }
    };

    return class extends com.zappware.chromecast.Player {
        // constructor
        constructor() {
            console.log('A1ATPUB-1042:35')
            super();

            this._state = com.zappware.chromecast.PlayerState.STOPPED;
            this._maxPlaybackOffset = 3600;
            this._keepSessionAliveTimer;

            // JIRA NEXX4-17023: The Zappware-User-Agent header is navigator.userAgent, prepended with 'chromecast/ (Nexx 4.0)'
            CONFIG.ZappwareUserAgent = `chromecast/${VERSION.split(' ')[0]} (Nexx 4.0) ${navigator.userAgent}`;

            // For Broadpeak deployments, the broadpeak session needs to be kept alive (ref. NEXX4-17187, NEXX4-17486)
            var contentUrl;
            var heartbeatTimer;
            playerManager.addEventListener(['PLAYER_LOAD_COMPLETE','MEDIA_FINISHED'], (event) => {
                console.log('A1ATPUB-1042:36')
                DEBUG && log("onPlayerManagerEvent(" + event.type + ")");

                if (!CONFIG.broadpeakHeartbeatInterval) {
                    return;
                }

                if (heartbeatTimer) {
                    clearInterval(heartbeatTimer);
                    heartbeatTimer = undefined;
                }
                if (contentUrl) {
                    // Send a teardown to broadpeak (NEXX4-17129)
                    com.zappware.chromecast.util.httpGet(contentUrl+ '/teardown', undefined, false).catch(() => void(0));
                    contentUrl = undefined;
                }
                if (event.media && event.media.contentUrl) {
                    contentUrl = event.media.contentUrl;
                    heartbeatTimer = setInterval(() =>
                        com.zappware.chromecast.util.httpGet(contentUrl + '/keepalive', undefined, false).catch(() => void(0))
                    , CONFIG.broadpeakHeartbeatInterval * 1000);
                }
            });
        }

        initialize(config) {
            super.initialize(config);
            console.log('A1ATPUB-1042:37')
            if (config.customData) {
                let _config = com.zappware.chromecast.util.cloneObject(config.customData);
                console.log('A1ATPUB-1042:38')
                // Override the configuration if provided in customData
                for (var prop in CONFIG) {
                    if (CONFIG.hasOwnProperty(prop)) {
                        if (_config[prop] && CONFIG[prop] !== _config[prop]) {
                            DEBUG && log("Updating CONFIG." + prop + " to " + _config[prop]);
                            CONFIG[prop] = _config[prop];
                        }
                    }
                }
            }

            if (this._initializing) {
                console.log('A1ATPUB-1042:39')
                return; // Already initializing
            }

            // Prior to handling load requests, clean up any remaining playback sessions that may exist in the back-end
            // This can be done by sending a stopPlayback request with empty string as sessionId (NEXX4-17105).
            //
            // This also triggers authentication and other initialization code which speeds up handling of the first load
            // request.

            var query = com.zappware.chromecast.util.cloneObject(queries.stopPlayback);
            query.variables.input = {
                sessionId: ""
            };
            this._initializing = this._graphql(query);

            // Hack alert: add this promise to the media array as playback info. This holds back any load operation until
            // the stop query is processed.
            let obj = { _playbackInfo: this._initializing };
            let _media = this._media;
            _media.push(obj);
            obj._playbackInfo.catch(function(e){
                DEBUG && log("Something went wrong while trying to stop all back-end sessions: " + e);
            })
            .then(function() {
                _media.splice(_media.indexOf(obj), 1);
            });
        }

        _getPlaybackMode(loadRequest) {
            console.log('A1ATPUB-1042:40')
            var query = JSON.parse(loadRequest.media.contentId)[0]; // The second query should be the pauseLiveChannel request
            switch(query.operationName) {
                case 'playChannel':
                    return com.zappware.chromecast.PlaybackMode.LIVETV;
                case 'pauseLiveChannel':
                    return com.zappware.chromecast.PlaybackMode.PLTV;
                case 'restartEvent':
                    return com.zappware.chromecast.PlaybackMode.STARTOVER;
                case 'playVODAsset':
                case 'playTrailer':
                    return com.zappware.chromecast.PlaybackMode.VOD;
                case 'catchupEvent':
                    return com.zappware.chromecast.PlaybackMode.CUTV;
                case 'playRecording':
                    return com.zappware.chromecast.PlaybackMode.NPVR;
                default:
                    break;
            }
        }

        _load(loadRequestData) {
            console.log('A1ATPUB-1042:41')
            var that = this;
            var index = this._media.indexOf(loadRequestData.media);
            var prevMedia = this._media[index - 1];
            var prevPlaybackInfo = (!!prevMedia) && prevMedia._playbackInfo;
            var media = loadRequestData.media;

            DEBUG && log("_load()");

            if (prevPlaybackInfo instanceof Promise) {
                console.log('A1ATPUB-1042:42')
                return prevPlaybackInfo.then(function() {
                    return that._load(loadRequestData);
                });
            }

            // Set bookmark for the previous media
            if (prevMedia) {
                console.log('A1ATPUB-1042:43')
                this._setBookmark(prevMedia);
            }

            // Piggy-back custom configuration on the media, and overwrite the playback config (if provided)
            media._customData = com.zappware.chromecast.util.cloneObject(this._config.customData);
            if (loadRequestData.customData.config && loadRequestData.customData.config.playback) {
                console.log('A1ATPUB-1042:44')
                media._customData.playbackConfig = loadRequestData.customData.config.playback;
            }

            // Add/remove support for PAUSE if we do / do not support PLTV
            if (media._playbackMode !== com.zappware.chromecast.PlaybackMode.LIVETV ||
                this._hasPLTV(media)) {
                playerManager.addSupportedMediaCommands(cast.framework.messages.Command.PAUSE);
                playerManager.addSupportedMediaCommands(cast.framework.messages.Command.SEEK);
            }
            else {
                playerManager.removeSupportedMediaCommands(cast.framework.messages.Command.PAUSE);
                playerManager.removeSupportedMediaCommands(cast.framework.messages.Command.SEEK);
            }

            var query = JSON.parse(media.contentId)[0];
            if (prevPlaybackInfo) {
                console.log('A1ATPUB-1042:45')
                if (prevPlaybackInfo.sessionId) {
                    query.variables.input.replaceSessionId = prevPlaybackInfo.sessionId;
                }

                this._annihilatePlaybackInfo(prevPlaybackInfo);
            }

            // For START_OVER / CUTV / VOD / NPVR: if no position is provided, set it to 0
            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.STARTOVER ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.CUTV      ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD       ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.NPVR      ){

                if (loadRequestData.customData.currentPosition === undefined) {
                    console.log('A1ATPUB-1042:46')
                    loadRequestData.customData.currentPosition = 0;
                }
            }

            /////////////////////////////////////////////////////////////////////////////////////////
            //
            // Workaround for use cases with dynamic streams, which is implemented as a custom
            // manifesthandler, and consists of two parts:
            //
            // 1. filter out the properties causing issues with dynamic streams (NEXX4-18810)
            // 2. reload and seek when the stream turns from a dynamic to a static stream
            //
            // Note that on Wind, this is also problematic for PLTV: when the current event ends when
            // in PLTV, playback is stopped. The fallback solution to reacquire and reload does not
            // work for NPLTV because of NEXX4-15889 and WINCBO-117!
            //
            if (this.playbackConfig.manifestHandler && this.playbackConfig.___workaround) {
                console.log('A1ATPUB-1042:47')
                this.playbackConfig.manifestHandler = this.playbackConfig.___workaround.manifestHandler;
                this.playbackConfig.___workaround = undefined;
            }

            this.playbackConfig.___workaround = {};
            this.playbackConfig.___workaround.manifestHandler = this.playbackConfig.manifestHandler;
            com.zappware.chromecast.adshandler.reset()
            this.playbackConfig.manifestHandler = this._manifestHandler.bind(this);

            // Acquire the url and ... happy streaming!
            media._playbackInfo = this._acquirePlaybackInfo(query, media)
            .then(function(playbackInfo) {
                console.log('A1ATPUB-1042:48')
                playbackInfo && com.zappware.chromecast.adshandler.setAdPolicy(playbackInfo.adPlaybackRestrictions)
                if (media !== that._currentMedia) {
                    console.log('A1ATPUB-1042:49')
                    media._playbackInfo = playbackInfo; // Save the playbackInfo so we can use the returned
                                                        // session id as replaceSessionId (WINPUB-1604)
                    DEBUG && log("_load(): not proceeding -> received another load request!");
                    throw "_interrupted";
                }

                if (!playbackInfo || !playbackInfo.url) {
                    console.log('A1ATPUB-1042:50')
                    DEBUG && log("Failed to acquire playbackInfo!");
                    throw "_failed";
                }

                DEBUG && log("Updating contentUrl to " + playbackInfo.url);
                media.contentType = 'application/dash+xml';
                media.contentUrl = playbackInfo.url;
                media._playbackInfo = playbackInfo;
                return com.zappware.chromecast.Player.prototype._load.apply(that, [loadRequestData]);
            })
            .catch(function(e) {
                console.log('A1ATPUB-1042:51')
                if (e instanceof Error) {
                    DEBUG && console.error(e);
                }

                if (e !== '_interrupted') {
                    console.log('A1ATPUB-1042:52')
                    // Something went terribly wrong
                    let code = com.zappware.chromecast.Error.LOAD_FAILED;
                    let details;
                    if (e) {
                        if (e.errors) {
                            code = com.zappware.chromecast.Error.GRAPHQL_ERROR;
                            details = e.errors;
                        }
                        if (typeof e === 'string' && Object.values(com.zappware.chromecast.Error).includes(e)) {
                            code = e;
                        }
                    }

                    that._error(code, details);
                    media._playbackInfo = undefined;
                }

                // Force failure by providing invalid media.
                loadRequestData.media = null;
            })
            .then(function() {
                return loadRequestData;
            });

            return media._playbackInfo;
        }

        _manifestHandler(manifest) {
            console.log('A1ATPUB-1042:53')
            let media = playerManager.getMediaInformation() || this._currentMedia;
            // Parsing the manifest file in order to get the adsblock info if adskipping is enabled.
            try {
                let isVod = media && media._playbackMode === com.zappware.chromecast.PlaybackMode.VOD
                let isAdSkippingEnabled = CONFIG.adSkippingEnabled || false
                 let  { adBlocks } =  isAdSkippingEnabled && !isVod && media && manifest && com.zappware.chromecast.manifestParserHelper.parseManifest(manifest)
                 isAdSkippingEnabled && !isVod && media && manifest && com.zappware.chromecast.adshandler.setAdsBlocks(adBlocks)
            } catch (error) {
                  console.log(error)
            }
            // DEBUG && com.zappware.chromecast.util.log("com.zappware.chromecast.cast", "MANIFEST: \n" + manifest);
            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.STARTOVER ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.CUTV      ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.NPVR      ){
                console.log('A1ATPUB-1042:54')
                try {
                    if (manifest.indexOf('type="dynamic"') > 0) {
                        console.log('A1ATPUB-1042:55')
                        // For a dynamic stream, the properties mediaPresentationDuration and presentationTimeOffset
                        // are confusing the shaka player, causing endless buffering and invalid positions returned.
                        // As a workaround, these properties are removed/replaced in the manifest.
                        let i = manifest.indexOf(' mediaPresentationDuration="');
                        if (i > 0) {
                            DEBUG && !this.playbackConfig.___workaround.dynamic && log("WARNING: changing manifest on the fly to workaround shaka player issue!");
                            manifest = manifest.slice(0, i) + manifest.slice(manifest.indexOf('"', i + 29) + 1);
                        }

                        i = 0;
                        while ((i = manifest.indexOf(' presentationTimeOffset="', i)) > 0) {
                            manifest = manifest.slice(0, i) + ' presentationTimeOffset="0"' + manifest.slice(manifest.indexOf('"', i + 26) + 1);
                            i = i + 26;
                        }
                        this.playbackConfig.___workaround.dynamic = true;
                    }
                    else if (this.playbackConfig.___workaround.dynamic && manifest.indexOf('type="static"') > 0) {
                        DEBUG && log("WARNING: Going from dynamic to static stream -> reload!");
                        console.log('A1ATPUB-1042:56')

                        // Stream turned from dynamic to static (https://github.com/google/shaka-player/issues/1055)
                        // and will cause the player to end. Anticipate on this and do a reload from the current
                        // position. This is with shaka player 2.5.6 -> retest if version is updated.

                        // Restore the manifest handler -> this workaround is not needed anymore
                        this.playbackConfig.manifestHandler = this.playbackConfig.___workaround.manifestHandler;
                        this.playbackConfig.___workaround = {};
                        let resumeState = (this._state === com.zappware.chromecast.PlayerState.PAUSED) ?
                            com.zappware.chromecast.PlayerState.PAUSED :
                            com.zappware.chromecast.PlayerState.PLAYING;
                        let position = com.zappware.chromecast.player.getPosition(media) - CONFIG.offsetToLive;
                        this._reacquireReloadAndSeek(
                            media,
                            JSON.parse(media.contentId)[0],
                            com.zappware.chromecast.player.getPosition(media),
                            resumeState);
                    }
                }
                catch(e) {
                    // Ignore any error: it should not hold back the reload.
                    DEBUG && log("Unexpected exception " + e + " in _manifestHandler()!");
                }
            }

//            try {
//                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                // Temporary hack to remove the highest quality video representations to allow A1-A to evaluate if it is still
//                // satisfactory.
//                // REF: NEXX4-15318 && https://tasktrack.telekom.at/jira/browse/PROBLEM-54390
//                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                let toRemove = [
//                    '<Representation id="video1-6000kbps" bandwidth="6000000" width="1280" height="720"',
//                    '<Representation id="video1-9000kbps" bandwidth="9000000" width="1280" height="720"'
//                ];
//                for (var r = 0; r < toRemove.length; r++) {
//                    let i = manifest.indexOf(toRemove[r]);
//                    if (i > 0) {
//                        DEBUG && !this.playbackConfig.___workaround.bandwidth && log("WARNING: changing manifest on the fly to top off bandwidth!");
//                        manifest = manifest.slice(0, i) + manifest.slice(manifest.indexOf('\n', i + 82) + 1);
//                        this.playbackConfig.___workaround.bandwidth = true;
//                    }
//                }
//            }
//            catch(e) {
//                // Ignore any error: it should not hold back the reload.
//                DEBUG && log("Unexpected exception " + e + " in _manifestHandler()!");
//            }
            return manifest;
        }

        _loadSession(media, customData) {
            var that = this;
            console.log('A1ATPUB-1042:57')
            // Start the keepAlive (MW)
            if (!this._keepSessionAliveTimer) {
                console.log('A1ATPUB-1042:58')
                var altSessionTimeout = 300;
                (function keepSessionAlive() {
                    that._keepAlive().then(function(sessionTimeout) {
                        DEBUG && log("Next keepSessionAlive is in " + sessionTimeout + "s");
                        sessionTimeout = sessionTimeout || altSessionTimeout; // in seconds
                        altSessionTimeout = sessionTimeout;
                        that._keepSessionAliveTimer = setTimeout(keepSessionAlive, sessionTimeout * 1000);
                    });
                })();
            }

            if (media && media._playbackInfo) {
                console.log('A1ATPUB-1042:59')
                DEBUG && assert(!(media._playbackInfo instanceof Promise), "media._playbackInfo should not be a Promise!");

                // Start heartbeat (as in playbackInfo) and bookmark interval timer
                this._inauguratePlaybackInfo(media._playbackInfo, this._getBookmarkQuery(media));
            }

            return Promise.resolve();
        }

        _selectPreferredTracks(config) {
            console.log('A1ATPUB-1042:60')
            var media = playerManager.getMediaInformation();

            if (media && media._customData.playbackConfig) {
                console.log('A1ATPUB-1042:61')
                var _config = media._customData.playbackConfig;

                config = com.zappware.chromecast.util.cloneObject(config); // Clone the config to avoid changing the original's properties
                for (var p in _config) {
                    if (_config.hasOwnProperty(p) && config.hasOwnProperty(p)) {
                        console.log('A1ATPUB-1042:62')
                        DEBUG && log("Overriding config.playback." + p + " with value " + _config[p]);
                        config[p] = _config[p];
                    }
                }
            }

            return super._selectPreferredTracks(config);
        }

        pause(){
            console.log('A1ATPUB-1042:63')
            DEBUG && log("pause(); state = " + this._state);

            if (this._state === com.zappware.chromecast.PlayerState.LOADING) {
                console.log('A1ATPUB-1042:64')
                // Ignore pause request if still loading
                return null;
            }

            var that = this;
            var media = playerManager.getMediaInformation();
            if (!media || !this._canPause(media)) {
                console.log('A1ATPUB-1042:65')
                DEBUG && log("Pause not supported.");
                com.zappware.chromecast.receiver.onPause();
                return null;
            }

            var playbackInfo = media._playbackInfo;
            if (playbackInfo instanceof Promise) {
                console.log('A1ATPUB-1042:66')
                return playbackInfo.then(function(){
                    return that.pause();
                });
            }

            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV) {
                console.log('A1ATPUB-1042:67')
                that._initiatePLTV(media);
            }

            return super.pause();
        }

        _initiatePLTV(media){
            console.log('A1ATPUB-1042:68')
            DEBUG && log("_initiatePLTV()");

            com.zappware.chromecast.receiver.setPlaybackMode(com.zappware.chromecast.PlaybackMode.PLTV);
            media._playbackMode = com.zappware.chromecast.PlaybackMode.PLTV;
            if (!media._startPLTVat) {
                console.log('A1ATPUB-1042:69')
                media._startPLTVat = com.zappware.chromecast.util.getCurrentTime();
            }
        }

        _startPLTV(media, position, resumeState){
            console.log('A1ATPUB-1042:70')
            DEBUG && log(`_startPLTV(${position},${resumeState})`);

            if (!media._playbackInfoLive) {
                console.log('A1ATPUB-1042:71')
                media._playbackInfoLive = media._playbackInfo;
            }

            if (position === undefined) {
                console.log('A1ATPUB-1042:72')
                position = media._startPLTVat - CONFIG.offsetToLive;
            }

            com.zappware.chromecast.receiver.onPlay(); // To keep the banner up

            var query = JSON.parse(media.contentId)[1]; // The second query should be the pauseLiveChannel request
            DEBUG && assert(query.operationName === 'pauseLiveChannel', 'Unexpected query: ' + JSON.stringify(query));

            return this._reacquireReloadAndSeek(media, query, position, resumeState)
                .then(function(_media) {
                    console.log('A1ATPUB-1042:73')
                    if (_media && _media._playbackInfo) {
                        console.log('A1ATPUB-1042:74')
                        _media._hasPLTV = true;
                        _media._hasTimeshiftEnabled = true;
                        _media._playbackInfoLive = undefined;
                        _media._offsetToLive = CONFIG.offsetToLive;
                    }
                    else {
                        console.log('A1ATPUB-1042:75')
                        // Something went terribly wrong -> clean up
                        DEBUG && log("Could not start PLTV!");

                        com.zappware.chromecast.receiver.setPlaybackMode(com.zappware.chromecast.PlaybackMode.LIVETV);
                        media._playbackMode = com.zappware.chromecast.PlaybackMode.LIVETV;
                        media._playbackInfo = media._playbackInfoLive;
                        media._playbackInfoLive = undefined;

                        // Jump to live. We will have to do a reload to force renewal of the session
                        media._playbackInfo.sessionId = undefined;
                        return this._stopPLTV();
                    }
                });
        }

        _stopPLTV() {
            console.log('A1ATPUB-1042:76')
            var media = playerManager.getMediaInformation() || this._currentMedia;

            media._playbackMode = com.zappware.chromecast.PlaybackMode.LIVETV;
            com.zappware.chromecast.receiver.setPlaybackMode(com.zappware.chromecast.PlaybackMode.LIVETV);

            delete media._startPLTVat;
            delete media._hasPLTV;
            delete media._hasTimeshiftEnabled;
            delete media._offsetToLive;

            DEBUG && log("_stopPLTV()");

            var that = this;
            var query = JSON.parse(media.contentId)[0]; // The first query should be the playChannel request
            DEBUG && assert(query.operationName === 'playChannel', 'Unexpected query: ' + JSON.stringify(query));

            com.zappware.chromecast.receiver.onPlay(); // To keep the banner up

            return this._reacquireReloadAndSeek(media, query, Number.MAX_SAFE_INTEGER);
        }

        _reacquireReloadAndSeek(media, query, position, resumeState) {
            console.log('A1ATPUB-1042:77')
            var that = this;

            this._state = com.zappware.chromecast.PlayerState.SEEKING;
            com.zappware.chromecast.receiver.onBuffering(true); // Show the loading indicator

            var playbackInfo = media._playbackInfo;
            if (playbackInfo.sessionId) {
                console.log('A1ATPUB-1042:78')
                query.variables.input.replaceSessionId = playbackInfo.sessionId;
            }

            this._annihilatePlaybackInfo(playbackInfo);
            this._reloadAndSeekInProgressForPosition = position;

            // Acquire the playbackInfo
            media._playbackInfo = this._acquirePlaybackInfo(query, media)
            .then(function(playbackInfo) {
                console.log('A1ATPUB-1042:79')
                if (playbackInfo && playbackInfo.url) {
                    console.log('A1ATPUB-1042:80')
                    com.zappware.chromecast.adshandler.setAdPolicy(playbackInfo.adPlaybackRestrictions)
                    media.contentUrl = playbackInfo.url;
                    media._playingStartedAt = com.zappware.chromecast.util.getCurrentTime();
                    media._playbackInfo = playbackInfo;

                    // Start keep alive timers etc.
                    that._inauguratePlaybackInfo(media._playbackInfo);

                    // Reload should trigger a new loadRequest
                    console.log('A1ATPUB-1042:0 reloadAndSeek')
                    return that._reloadAndSeek(position, resumeState)
                    .then(function(_media) {
                        console.log('A1ATPUB-1042:81')
                        if (_media) {
                            _media.contentUrl = playbackInfo.url;
                            _media._playingStartedAt = media._playingStartedAt;
                            _media._playbackInfo = playbackInfo;
                            _media._positionInfo = media._positionInfo;
                            _media._assetId = media._assetId;
                        }
                        return _media;
                    });
                }

                // Something went wrong. This is fatal! Clean up and raise error
                media._playbackInfo = undefined;
            })
            .catch(function(e) {
                if (e instanceof Error) {
                    DEBUG && console.error(e);
                }

                media._playbackInfo = undefined;
            })
            .then(function(_media) {
                if (!media._playbackInfo) {
                    that._error(com.zappware.chromecast.Error.LOAD_FAILED);
                }

                return _media || media;
            });

            return media._playbackInfo;
        }

        play(){
            console.log('A1ATPUB-1042:82')
            DEBUG && log("play(); state = " + this._state);
            if (this._state === com.zappware.chromecast.PlayerState.LOADING) {
                console.log('A1ATPUB-1042:83')
                // Ignore play request if still loading
                return null;
            }

            var media = playerManager.getMediaInformation();
            if (!media || !this._canPause(media)) {
                console.log('A1ATPUB-1042:84')
                DEBUG && log("Play not supported.");
                com.zappware.chromecast.receiver.onPlay();
                return null;
            }

            var playbackInfo = media._playbackInfo;
            if (playbackInfo instanceof Promise) {
                console.log('A1ATPUB-1042:85')
                var that = this;
                return playbackInfo.then(function(){
                    return that.play();
                });
            }

            var result = super.play();
            if (result) {
                console.log('A1ATPUB-1042:86')
                if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                    media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    console.log('A1ATPUB-1042:87')
                    if (media._startPLTVat && !media._hasTimeshiftEnabled && !media._playbackInfoLive) {
                        console.log('A1ATPUB-1042:88')
                        return this._startPLTV(media)
                        .then(function() {
                            return result;
                        });
                    }
                }
            }

            return result;
        }

        _updatePositionInfo(media) {
            console.log('A1ATPUB-1042:89')
            super._updatePositionInfo(media);

            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                console.log('A1ATPUB-1042:90')
                if (this.isTimeshiftEnabled(media)) {
                    console.log('A1ATPUB-1042:91')
                    const playbackInfo = media._playbackInfo;
                    DEBUG && assert(!(playbackInfo instanceof Promise), "playbackInfo should not be a Promise!");

                    const minPositions = [];
                    const liveSeekableRange = playerManager.getLiveSeekableRange();

                    if (liveSeekableRange && liveSeekableRange.end > liveSeekableRange.start) {
                        console.log('A1ATPUB-1042:92')
                        let bufferStart = com.zappware.chromecast.util.getCurrentTime() - (liveSeekableRange.end - liveSeekableRange.start);
                        if (media._offsetToLive) bufferStart += media._offsetToLive;
                        bufferStart && minPositions.push(bufferStart);
                    }

                    if (playbackInfo.maximumBufferSize) {
                        console.log('A1ATPUB-1042:93')
                        const maxBufferStart = media._positionInfo.maxPosition - playbackInfo.maximumBufferSize;
                        maxBufferStart && minPositions.push(maxBufferStart);
                    }

                    if (playbackInfo.streamStart) {
                        console.log('A1ATPUB-1042:94')
                        const streamStart = new Date(playbackInfo.streamStart).getTime() / 1000;
                        streamStart && minPositions.push(streamStart);
                    }

                    if (minPositions.length > 0) {
                        console.log('A1ATPUB-1042:95')
                        media._positionInfo.minPosition = Math.max(...minPositions);
                        media._positionInfo.curPosition = Math.max(Math.min(this._getCurrentPosition(media) || Number.MAX_SAFE_INTEGER, media._positionInfo.maxPosition), media._positionInfo.minPosition);

                        if (this._state === com.zappware.chromecast.PlayerState.PAUSED &&
                            media._positionInfo.curPosition <= media._positionInfo.minPosition) {
                                console.log('A1ATPUB-1042:96')
                                DEBUG && log('Auto-resuming at start of TSB')
                                playerManager.play();
                        }

                        return;
                    }
                }
                // While starting PLTV, assume maxPosition = 'now' and minPosition = 'in the past'
                if (media._startPLTVat && !media._hasTimeshiftEnabled) {
                    console.log('A1ATPUB-1042:97')
                    let now = com.zappware.chromecast.util.getCurrentTime();
                    media._positionInfo.minPosition = now - CONFIG.maxPLTVBufferSize;
                    media._positionInfo.maxPosition = now;
                    media._positionInfo.curPosition = Math.max(Math.min(this._getCurrentPosition(media) || Number.MAX_SAFE_INTEGER, media._positionInfo.maxPosition), media._positionInfo.minPosition);
                    return;
                }

                media._positionInfo.minPosition = media._positionInfo.curPosition;
            }
        }

        _inauguratePlaybackInfo(playbackInfo, bookmarkQuery) {
            console.log('A1ATPUB-1042:98')
            if (playbackInfo) {
                if (playbackInfo.heartbeat && !playbackInfo.heartbeat._timer) {
                    console.log('A1ATPUB-1042:99')
                    var interval = playbackInfo.heartbeat.interval || 300; // in seconds
                    DEBUG && log("Setting heartbeat interval to " + interval + "s");
                    playbackInfo.heartbeat._timer = setInterval(function() {
                        DEBUG && log("Sending heartbeat to " + playbackInfo.heartbeat.url);
                        com.zappware.chromecast.util.httpGet(playbackInfo.heartbeat.url, {
                            'Content-Type': 'application/json'
                        });
                    }, interval * 1000);
                }
                if (!playbackInfo._bookmarkTimer && bookmarkQuery) {
                    console.log('A1ATPUB-1042:100')
                    DEBUG && log("Setting bookmark interval to " + CONFIG.bookmarkInterval + "s");
                    playbackInfo._bookmarkTimer = setInterval(() => this._setBookmark(), CONFIG.bookmarkInterval * 1000);
                }
            }
        }

        _annihilatePlaybackInfo(playbackInfo) {
            console.log('A1ATPUB-1042:101')
            if (playbackInfo) {
                DEBUG && log("_annihilatePlaybackInfo() for sessionId " + playbackInfo.sessionId);
                DEBUG && assert(!(playbackInfo instanceof Promise), "media._playbackInfo should not be a Promise!");
                if (playbackInfo.heartbeat._timer) {
                    console.log('A1ATPUB-1042:101')
                    clearInterval(playbackInfo.heartbeat._timer);
                    playbackInfo.heartbeat._timer = undefined;
                }
                if (playbackInfo._bookmarkTimer) {
                    console.log('A1ATPUB-1042:102')
                    clearInterval(playbackInfo._bookmarkTimer);
                    playbackInfo._bookmarkTimer = undefined;
                }

                playbackInfo.sessionId = undefined;
            }
        }

        _acquirePlaybackInfo(query, media) {
            console.log('A1ATPUB-1042:103')
            var that = this;

            switch(query.operationName) {
                case 'pauseLiveChannel': // NOSONAR: Ignore purposely fall-through warning.
                    // Fill in the variables:
                    // Assure that we request pause time that is far enough in the past. If not, we
                    // risk obtaining an empty manifest later on.
                    var pausedAt = media._startPLTVat - 60;
                    query.variables.input.pausedAt = new Date(pausedAt * 1000).toISOString();
                    query.variables.input.eventId = com.zappware.chromecast.receiver.getCurrentEvent().id || media._currentEventId || null;

                    if (query.variables.input.eventId instanceof Promise) {
                        return query.variables.input.eventId.then(function(){
                            return that._acquirePlaybackInfo(query, media);
                        });
                    }
                    // Fall through on purpose
                case 'playChannel':  // NOSONAR: Ignore purposely fall-through warning.
                case 'playRecording':// NOSONAR: Ignore purposely fall-through warning.
                case 'catchupEvent': // NOSONAR: Ignore purposely fall-through warning.
                case 'restartEvent': // NOSONAR: Ignore purposely fall-through warning.
                case 'playVODAsset': // NOSONAR: Ignore purposely fall-through warning.
                case 'playTrailer':
                    if (!query.query) {
                        let isAdSkippingEnabled = CONFIG.adSkippingEnabled || false
                        query.query = isAdSkippingEnabled ? tempQueries[query.operationName].query : queries[query.operationName].query;

                        var variables = isAdSkippingEnabled ? tempQueries[query.operationName].variables : queries[query.operationName].variables;
                        for (var v in variables) {
                            if (variables.hasOwnProperty(v) && !query.variables.hasOwnProperty(v)) {
                                query.variables[v] = variables[v];
                            }
                        }
                    }
                    break;
                default:
                    DEBUG && log("Unsupported query: '" + query.operationName + "'");
                    return Promise.resolve();
            }

            DEBUG && log("_acquirePlaybackInfo(); query: " + JSON.stringify(query));
            return new Promise(function(resolve, reject) {
                that._graphql(query)
                .then(function(response) {
                    DEBUG && log("response = " + JSON.stringify(response));
                    if (response) {
                        if (response.data && response.data[query.operationName]) {
                            resolve(response.data[query.operationName].playbackInfo);
                        }
                        if (response.errors) {
                            reject(response);
                        }
                    }

                    resolve(undefined);
                })
                .catch(function(e) {
                    DEBUG && log("something went wrong in _acquirePlaybackInfo(): " + e);
                    reject(e);
                });
            })
            .then(function(playbackInfo) {
                // To support heartbeats to Broadpeak, we need the redirect url.
                if (CONFIG.broadpeakHeartbeatInterval && playbackInfo && playbackInfo.url) {
                    return com.zappware.chromecast.util.httpGetRedirectURL(playbackInfo.url, undefined, false)
                    .then(function(url) {
                        DEBUG && log("_acquirePlaybackInfo() yields " + url + " as redirect URL for " + playbackInfo.url);
                        playbackInfo.url = url;
                        return playbackInfo;
                    })
                    .catch(function(e) {
                        DEBUG && log("Failed to get redirect URL for " + playbackInfo.url + "!");
                        return playbackInfo;
                    });
                }

                return playbackInfo;
            });
        }

        // setPosition /////////////////////////////////////////////////////////////////////////////////
        setPosition(position, resumeState) {
            console.log('A1ATPUB-1042:104')
            DEBUG && log("setPosition(" + position + "); state = " + this._state);

            if (this._state === com.zappware.chromecast.PlayerState.LOADING) {
                console.log('A1ATPUB-1042:1 ignore seekrequest if still loading')
                // Ignore seek request if still loading
                return null;
            }

            var that = this;
            var media = playerManager.getMediaInformation();
            if (!media || !this._canSeek(media)) {
                console.log('A1ATPUB-1042:105')
                DEBUG && log("setPosition() not supported.");
                com.zappware.chromecast.receiver.onPlay();
                return null;
            }

            var playbackInfo = media._playbackInfo;
            if (playbackInfo instanceof Promise) {
                console.log('A1ATPUB-1042:106')
                return playbackInfo.then(function(){
                    return that.setPosition(position, resumeState);
                });
            }

            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                console.log('A1ATPUB-1042:107')
                // If position is close to maxPosition, assume we want to jump to live
                if (position + 10 < that.getMaxPosition()) {
                    console.log('A1ATPUB-1042:108')
                    if (!media._startPLTVat) {
                        this._initiatePLTV(media);
                    }
                    if (!media._hasTimeshiftEnabled && !media._playbackInfoLive) {
                        return this._startPLTV(media, position, resumeState);
                    }
                }
                else if (media._startPLTVat) { // position >= that.getMaxPosition()
                    // Jump to live
                    console.log('A1ATPUB-1042:109')
                    return this._stopPLTV();
                }
            }

            return super.setPosition(position, resumeState);
        }

        // shutdown ///////////////////////////////////////////////////////////////////////////////////
        shutdown() {
            console.log('A1ATPUB-1042:110')
            if (this._shuttingDown) {
                console.log('A1ATPUB-1042:111')
                return;
            }

            this._shuttingDown = true;

            // NEXX4-17105: Time is short to do what is needed; we need to limit to the bare
            //              essentials: -> fire off the network requests to tear down the session (no
            //              guarantees that it is handled before execution is interrupted!)
            var media = playerManager.getMediaInformation() || this._currentMedia;

            // Send a teardown to broadpeak (NEXX4-17129), and do not wait for completion (NEXX4-17105)
            if (CONFIG.broadpeakHeartbeatInterval && media && media.contentUrl) {
                console.log('A1ATPUB-1042:112')
                com.zappware.chromecast.util.httpGet(media.contentUrl + '/teardown', undefined, false).catch(() => void(0));
            }

            if (media && media._playbackInfo) {
                console.log('A1ATPUB-1042:113')
                // Set bookmark before we stop
                this._setBookmark(media);

                if (media._playbackInfo.sessionId) {
                    console.log('A1ATPUB-1042:114')
                    var query = com.zappware.chromecast.util.cloneObject(queries.stopPlayback);
                    query.variables.input = {
                        sessionId: media._playbackInfo.sessionId
                    };
                    this._graphql(query, media, true); // synchronous HTTP request to insist this is processed.
                }
            }
        }

        // onMediaStalled ///////////////////////////////////////////////////////////////////////////////////
        onMediaStalled() {
            console.log('A1ATPUB-1042:115')
            DEBUG && log("onMediaStalled()");
            var mediaInfo = playerManager.getMediaInformation() || this._currentMedia;

            if (!this._stalledPromise) {
                console.log('A1ATPUB-1042:116')
                com.zappware.chromecast.receiver.onBuffering(true);

                // Kick the playermanager by initiating a seek
                var _seekTo = playerManager.getCurrentTimeSec() + 1;

                if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV) {
                    console.log('A1ATPUB-1042:117')
                    // In LIVETV, try to keep up with the live point by seeking to EOS
                    // Subtract 10 seconds from EOS, else we risk running too close to the live point which causes the player to endlessly stall (SDA1A-60)
                    var seekableRange = playerManager.getLiveSeekableRange();
                    if (seekableRange && seekableRange.end) {
                        console.log('A1ATPUB-1042:118')
                        _seekTo = seekableRange.end - 10;
                    }
                }

                DEBUG && log("Media stalled: calling seek " + _seekTo);
                console.log('A1ATPUB-1042:2 onMediaStalled seek')
                playerManager.seek(_seekTo);

                var that = this;
                this._stalledPromise = this._waitForEvent('SEEKED').then(function() {
                    console.log('A1ATPUB-1042:3 onMediaStalled seek')
                    if (mediaInfo === that._currentMedia &&
                        (that._state === com.zappware.chromecast.PlayerState.PLAYING ||
                        that._state === com.zappware.chromecast.PlayerState.PAUSED)) {
                        console.log('A1ATPUB-1042:119')
                        com.zappware.chromecast.receiver.onBuffering(false);
                    }

                    that._stalledPromise = undefined;
                });
            }
        }

        // canPause /////////////////////////////////////////////////////////////////////////////////////
        canPause(mediaInfo) {
            console.log('A1ATPUB-1042:120')
            mediaInfo = mediaInfo || playerManager.getMediaInformation();

            if (mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                mediaInfo._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                console.log('A1ATPUB-1042:121')
                return this._hasPLTV(mediaInfo);
            }

            return true;
        }

        // isTimeshiftEnabled /////////////////////////////////////////////////////////////////////////
        isTimeshiftEnabled(mediaInfo, seekableRange) {
            console.log('A1ATPUB-1042:122')
            mediaInfo = mediaInfo || playerManager.getMediaInformation();

            if (this._hasPLTV(mediaInfo)) {
                console.log('A1ATPUB-1042:123')
                var playbackInfo = mediaInfo._playbackInfo || {};
                if (playbackInfo.maximumBufferSize || playbackInfo.streamStart) {
                    console.log('A1ATPUB-1042:124')
                    return true;
                }
            }

            return false;
        }

        _hasPLTV(media) {
            console.log('A1ATPUB-1042:125')
            if (media._hasPLTV === undefined) {
                console.log('A1ATPUB-1042:126')
                var query = JSON.parse(media.contentId)[1];
                media._hasPLTV = (query && query.operationName === 'pauseLiveChannel');
            }

            return media._hasPLTV;
        }

        _canPause(media) {
            console.log('A1ATPUB-1042:127')
            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                console.log('A1ATPUB-1042:128')
                return this._hasPLTV(media);
            }

            return true;
        }

        _canSeek(media) {
            if (media._playbackMode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                media._playbackMode === com.zappware.chromecast.PlaybackMode.PLTV) {
                console.log('A1ATPUB-1042:129')
                return this._hasPLTV(media);
            }
            console.log('A1ATPUB-1042:130')
            return true;
        }

        _stop(media) {
            console.log('A1ATPUB-1042:131')
            var that = this;
            if (media._playbackInfo instanceof Promise) {
                console.log('A1ATPUB-1042:132')
                return media._playbackInfo.then(function(){
                    return that._stop(media);
                });
            }

            if (media._playbackInfo) {
                console.log('A1ATPUB-1042:133')
                // Stop the heartbeat
                clearInterval(media._playbackInfo.heartbeat._timer);

                // Set bookmark before we stop
                if (media._playbackInfo._bookmarkTimer) {
                    console.log('A1ATPUB-1042:134')
                    this._setBookmark(media);
                    clearInterval(media._playbackInfo._bookmarkTimer);
                }

                if (media._playbackInfo.sessionId) {
                    console.log('A1ATPUB-1042:135')
                    var query = com.zappware.chromecast.util.cloneObject(queries.stopPlayback);
                    query.variables.input = {
                        sessionId: media._playbackInfo.sessionId
                    };

                    // To avoid we continue using this playback session:
                    delete media._playbackInfo.sessionId;
                    delete media._playbackInfo;

                    DEBUG && log("_stop(); query: " + JSON.stringify(query));
                    return this._graphql(query, media).then(function(response) {
                        DEBUG && response && response.errors && log("stopPlayback failed: " + JSON.stringify(response.errors));
                    });
                }

                return Promise.resolve();
            }
        }

        _keepAlive() {
            DEBUG && log("_keepAlive(); query: " + JSON.stringify(queries.keepAlive));
            return this._graphql(queries.keepAlive).then(function(response) {
                return response && response.data && response.data.keepSessionAlive.sessionTimeout;
            });
        }

        _getCurrentEvent(media) {
            console.log('A1ATPUB-1042:136')
            media = media || playerManager.getMediaInformation() || this._currentMedia;

            var query = queries.getCurrentEvent;
            query.variables = {
                "channelId": media._assetId,
                "time": new Date().toISOString()
            };
            DEBUG && log("_getCurrentEvent(); query: " + JSON.stringify(query));
            return this._graphql(query, media).then(function(response) {
                DEBUG && log("response = " + JSON.stringify(response));
                return response && response.data && response.data.channel.eventsAt.items[0];
            });
        }

        _getBookmarkQuery(media, position) {
            console.log('A1ATPUB-1042:137')
            media = media || playerManager.getMediaInformation() || this._currentMedia;

            var result;
            var profileId = media._customData.profileId;
            var query = JSON.parse(media.contentId)[0];
            switch(query.operationName) {
                case 'playVODAsset':
                    console.log('A1ATPUB-1042:140')
                    result = com.zappware.chromecast.util.cloneObject(queries['setVODBookmark']);
                    result.variables.profileId = profileId;
                    result.variables.input = {
                        profileId: profileId,
                        vodAssetId: query.variables.input.vodAssetId,
                        position: Math.floor(position)
                    };
                    break;
                case 'catchupEvent': // NOSONAR: Ignore purposely fall-through warning.
                case 'restartEvent':
                    console.log('A1ATPUB-1042:138')
                    result = com.zappware.chromecast.util.cloneObject(queries['setEventBookmark']);
                    result.variables.profileId = profileId;
                    result.variables.input = {
                        profileId: profileId,
                        eventId: query.variables.input.eventId,
                        position: Math.floor(position)
                    };
                    break;
                case 'playRecording':
                    console.log('A1ATPUB-1042:139')
                    result = com.zappware.chromecast.util.cloneObject(queries['setRecordingBookmark']);
                    result.variables.profileId = profileId;
                    result.variables.input = {
                        profileId: profileId,
                        recordingId: query.variables.input.recordingId,
                        position: Math.floor(position)
                    };
                    break;
                default:
                    break;
            }

            return result;
        }

        _setBookmark(media) {
            console.log('A1ATPUB-1042:141')
            media = media || playerManager.getMediaInformation() || this._currentMedia;
            if (media && media._playbackInfo && media._playbackInfo._bookmarkTimer) {
                console.log('A1ATPUB-1042:142')
                // Set bookmark only if we are watching for at least one minute.
                if ((com.zappware.chromecast.util.getCurrentTime() - media._playingStartedAt) >= 60) {
                    console.log('A1ATPUB-1042:143')
                    let position = this.getPosition(media);
                    if (position > 0) {
                        console.log('A1ATPUB-1042:144')
                        let query = this._getBookmarkQuery(media, position);
                        DEBUG && assert(query, "No bookmark query.");
                        DEBUG && log("_setBookmark(); query: " + JSON.stringify(query));
                        return this._graphql(query, media);
                    }
                }
            }

        }

        _logout() {
            console.log('A1ATPUB-1042:145')
            return this._graphql({
                "operationName":"logout",
                "variables":{},
                "query":"mutation logout {\n  logout\n}\n"
            });
        }

        _graphql(request) { }
    };

})();
