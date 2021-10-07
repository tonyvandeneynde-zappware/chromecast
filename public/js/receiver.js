/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.receiver = (function () {
    var DOM = {};
    var mediaInfo = {};
    var metadata = {};
    var mediaSessionToken = null;
    var currentEvent = null;
    var currentMetadata = null;
    var unlockedAgeRating = null;
    var error = null;
    var progressTimer = null;
    var bannerTimer = null;
    var stopTimer = null;
    var gOneSec = 1000;
    var mode;

    // If a deployment specific default configuration is available, use that one.
    var defaultConfig = (typeof DEFAULT_CONFIG !== 'undefined') ?
        DEFAULT_CONFIG :
        {
            language: 'eng',
            showStatistics: false,
            bannerTimeout: 5,
            ageRating: 18,
            playback: {
              audioLanguagePreference: ['eng'], // ISO 639-3 language code in lowercase, e.g. 'eng', 'nld'...
              subtitleLanguagePreference: ['eng'],
              hardOfHearing: false,
              visuallyImpaired: false
            },
            blackout: [],
            customData: {}
        };

    // Start with the default configuration
    var config = com.zappware.chromecast.util.cloneObject(defaultConfig);

    // parental control
    var locked = false;

    // event blocking
    var blocked = false;

    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.receiver", msg); };

    function init() {
        com.zappware.chromecast.util.waitFontsLoaded();
        DOM = {
            mediaTitle: document.querySelector('#mediaTitle'),
            background: document.querySelector('#background'),
            playbackBanner: document.querySelector('#playbackBanner'),
            displayTitle: document.querySelector('#displayTitle'),
            displayDescription: document.querySelector('#displayDescription'),
            channelTitle: document.querySelector('#channelTitle'),
            channelLogo: document.querySelector('#channelLogo'),
            topLine: document.querySelector('#topLine'),
            startTime: document.querySelector('#bottomLeft'),
            endTime: document.querySelector('#bottomRight'),
            progressBar: document.querySelector('#progressBar'),
            progressBackground: document.querySelector('#progressBackground'),
            progressForeground: document.querySelector('#progressForeground'),
            progressBuffer: document.querySelector('#progressBuffer'),
            progressMarker: document.querySelector('#progressMarker'),
            progressPlaying: document.querySelector('#progressPlaying'),
            trickplay: document.querySelector('#trickplay'),
            overlay: document.querySelector('#overlay'),
            statisticsOverlay: document.querySelector('#statisticsOverlay'),
            statistics: document.querySelector('#statistics')
        };

        // Set the default language
        com.zappware.chromecast.globaltext.setLanguage(config.language);

        // Show / hide statistics
        if (config.showStatistics) {
            com.zappware.chromecast.util.removeClass(DOM.statisticsOverlay, 'hidden');
        }
        else {
            com.zappware.chromecast.util.addClass(DOM.statisticsOverlay, 'hidden');
        }
    }

    function getMediaSessionToken() {
        return mediaSessionToken;
    }

    function onLoad(_mode, _mediaSessionToken, _metadata) {
        DEBUG && log("onLoad(" + _mediaSessionToken + ")");

        if (progressTimer) {
            clearInterval(progressTimer);
            progressTimer = null;
        }
        if (stopTimer) {
            clearTimeout(stopTimer);
            stopTimer = null;
        }

        // Clear the current event, error, and blocked status
        currentEvent = null;
        currentMetadata = null;
        error = null;
        blocked = false;
        unlockedAgeRating = null;

        setPlaybackMode(_mode);
        mediaSessionToken = _mediaSessionToken;
        mediaInfo = {};
        _setLocked();

        if (_metadata && _metadata.customData) {
            _metadata = com.zappware.chromecast.util.getAsObject(_metadata.customData);
            _metadata.mediaSessionToken = mediaSessionToken;

            this.setMetaData(_metadata);
        }
        _currentEventUpdated(currentEvent);
        _updateMediaInfo();
    }

    function onBuffering(buffering) {
        DEBUG && log("onBuffering(" + buffering + ")");

        if (buffering) {
            if (this._stoppedBufferingTimeout) {
                clearTimeout(this._stoppedBufferingTimeout);
                this._stoppedBufferingTimeout = undefined;
                this._stoppedBufferingAtPosition = undefined;
            }
            com.zappware.chromecast.util.addClass(document.body, 'Buffering');
        }
        else {
            var that = this;
            // Poll the current position until it is updated
            (function _checkPosition(_position) {
                var state = com.zappware.chromecast.player.getState();
                var expectPositionUpdate = (
                    state !== com.zappware.chromecast.PlayerState.ERROR &&
                    state !== com.zappware.chromecast.PlayerState.STOPPED &&
                    state !== com.zappware.chromecast.PlayerState.PAUSED);

                if (_position === undefined) {
                    _position = com.zappware.chromecast.player.getPosition();
                }
                if (expectPositionUpdate && _position === com.zappware.chromecast.player.getPosition()) {
                    that._stoppedBufferingTimeout = setTimeout(_checkPosition, 100, _position);
                }
                else {
                    that._stoppedBufferingTimeout = undefined;
                    com.zappware.chromecast.util.removeClass(document.body, 'Buffering');
                }
            })();
        }
    }

    function onPlaying() {
        DEBUG && log("onPlaying() " + mediaSessionToken);

        // first play of the meda item => store it as reference for playback position 0
        mediaInfo.bufferStart = com.zappware.chromecast.player.getPosition();

        // start an interval timer for update of the progressbar, the bitrate statistics, and
        // the event block status.
        if (!progressTimer) {
            function _onProgressUpdate() {
                var currentPosition = com.zappware.chromecast.player.getPosition();
                if (mode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                    mode === com.zappware.chromecast.PlaybackMode.PLTV) {
                    if (currentPosition >= mediaInfo.end) {
                        if (_checkCurrentEventUpdate()) {
                            _updateMediaInfo();

                            // No metadata anymore?
                            if (!currentEvent) {
                                _handleNoMetaData(5000);
                            }
                        }
                    }
                }
                else if (mediaInfo.end === undefined || currentEvent && currentEvent.end < mediaInfo.start + currentPosition) {
                    if (_checkCurrentEventUpdate()) {
                        _updateMediaInfo();
                    }
                }

                _updateProgressBar(currentPosition);

                // 2. Update the bitrate statistics
                if (config.showStatistics) {
                    _updateStatistics();
                }

                // 3. Check the block status
                var shouldBlock = _shouldBlock(currentEvent, currentPosition);
                if (shouldBlock !== blocked) {

                    // Recall _currentEventUpdated with the current event to force an update of the block status
                    _currentEventUpdated(currentEvent);
                }
            }
            progressTimer = setInterval(_onProgressUpdate, gOneSec);

            // Update progress now
            _onProgressUpdate();
        }

        // Update the channel id / title / logo
        if (metadata[mediaSessionToken] && metadata[mediaSessionToken][0]) {
            mediaInfo.channelId = metadata[mediaSessionToken][0].channelId;
            mediaInfo.channelLogo = metadata[mediaSessionToken][0].channelLogo;
            mediaInfo.channelTitle = metadata[mediaSessionToken][0].channelTitle;

            if (_checkCurrentEventUpdate()) {
                _updateMediaInfo();
            }
            else {
                _currentEventUpdated(currentEvent);
            }
        }
        else {
            DEBUG && log("No metadata for " + mediaSessionToken);

            currentEvent = null;
            currentMetadata = null;
            mediaInfo = {bufferStart: mediaInfo.bufferStart };
            _updateMediaInfo();
        }

        // Show play icon
        _showTrickplay('Play');

        // NOTE:
        //
        // We need the metadata to decide whether we should lock for age rating restrictions.
        // If we do not have age rating restrictions in the config, we allow to proceed without
        // meta data.

        if (currentEvent || config.ageRating > 21) {
            if (!currentEvent) {
                _setLocked(false);
            }
            _showBanner();
        }

        if (!currentEvent) {
            // Playing but no currentEvent? raise an error
            _handleNoMetaData();
        }
    }

    function _handleNoMetaData(delay) {
        // Send an errorUpdate message to allow a sender to react and provide metadata just-in-time.
        com.zappware.chromecast.cast.sendCustomMessage({
            action: 'errorUpdate',
            params: {
                mediaSessionToken: mediaSessionToken,
                error: com.zappware.chromecast.Error.NO_METADATA,
                details: metadata[mediaSessionToken]
            }
        });

        setTimeout(() => {
            // No metadata -> raise a real error
            if (!currentEvent) {
                com.zappware.chromecast.receiver.onError(com.zappware.chromecast.Error.NO_METADATA, metadata[mediaSessionToken]);
            }
        }, delay || 0);
    }

    function _onStateChange() {
        var state = com.zappware.chromecast.player.getState();

        DEBUG && log("_onStateChange(); state = " + state);

        _showTrickplay((state === com.zappware.chromecast.PlayerState.PAUSED) ? 'Pause' : 'Play');
        _showBanner((state === com.zappware.chromecast.PlayerState.PLAYING) && !locked && !blocked); // autohide depends on state

        // In principle, we should only call _updateMediaMetadata when going from LIVE to PLTV
        _updateMediaMetadata();
    }

    function onPlay() {
        DEBUG && log("onPlay()");
        _onStateChange();
    }

    function onPause() {
        DEBUG && log("onPause()");
        _onStateChange();
    }

    function onSeeked() {
        DEBUG && log("onSeeked()");
        if (_checkCurrentEventUpdate()) {
            _updateMediaInfo();
        }

        _onStateChange();
    }

    function onStop() {
        DEBUG && log("onStop()");

        // We're done
        _wereDone();

        // Clear the mediasession
        mediaSessionToken = null;

        // Give the sender app some time to issue a new load request
        com.zappware.chromecast.util.addClass(document.body, 'Buffering');
        stopTimer = setTimeout(function() {
            // Hide banner
            _hideBanner();

            // Show splash screen
            com.zappware.chromecast.util.removeClass(document.body, 'Buffering');
            com.zappware.chromecast.util.removeClass(document.body, 'Error');
            com.zappware.chromecast.util.removeClass(document.body, 'Locked');
            com.zappware.chromecast.util.removeClass(document.body, 'Black');
            com.zappware.chromecast.util.addClass(document.body, 'Splash');
        }, 5000);
    }

    function onError(code, more) {
        DEBUG && log("onError(" + code + ")");

        // We're done
        _wereDone();

        com.zappware.chromecast.util.addClass(document.body, 'Error');
        if (!error || error.code !== code) {
            // Limit length, it has been stated that the maximum message size is 64K -> 4000 chars should be ample.
            // Ref. https://stackoverflow.com/questions/35753780/what-is-the-maximum-size-of-a-message-in-the-cast-sdk
            if (more && more.length > 4000) {
                more = more.substring(0, 4000);
            }

            error = {
                code: code,
                details: more
            };

            com.zappware.chromecast.cast.sendCustomMessage({
                action: 'errorUpdate',
                params: com.zappware.chromecast.receiver.getError()
            });
        }

        // Give the sender app some time to set a display message for this error
        var _mediaSessionToken = mediaSessionToken;
        setTimeout(function() {
            if (mediaSessionToken === _mediaSessionToken && com.zappware.chromecast.util.hasClass(document.body, 'Error') && error) {
                var displayMessage = getDisplayMessage();
                if (!displayMessage.title  && !displayMessage.description && !displayMessage.background) {
                    _setErrorMessage(error.code);
                }
            }
        }, 3000);
    }

    function _wereDone() {

        // If locked, send a custom message to notify the clients that we are not locked anymore
        if (locked) {
            locked = undefined;
            com.zappware.chromecast.cast.sendCustomMessage({
                action: 'lockedUpdate',
                params: com.zappware.chromecast.receiver.getLocked()
            });
        }

        // Clear lock status
        _setLocked();

        // Kill any progress
        if (progressTimer) {
            clearInterval(progressTimer);
            progressTimer = null;
        }

        _currentEventUpdated(undefined);
        currentMetadata = null;
        mediaInfo = {};
    }

    /**
     * Sets configuration options for the receiver application such as the UI language, bit rate display, etc.
     *
     * @param {Object} params : {
     *                     language: <string>,
     *                     showStatistics: <boolean>,
     *                     bannerTimeout: <integer>,
     *                     ageRating: <integer>
     *                 }
     *
     * @returns {undefined}
     */
    function setConfig(params) {
        DEBUG && log("setConfig(" + JSON.stringify(params) + ")");

        // Iterate over the params provided:
        for (var property in params) {
            if (params.hasOwnProperty(property) && defaultConfig.hasOwnProperty(property)) {
                // If the property is there with a value of "DEFAULT" -> revert to the default
                var value = (params[property] !== "DEFAULT") ?
                    params[property] : defaultConfig[property];
                var previousValue = config[property];

                config[property] = value;

                switch (property) {
                    case 'language':
                        if (value !== com.zappware.chromecast.globaltext.getLanguage()) {
                            com.zappware.chromecast.globaltext.setLanguage(value);
                            _updateMediaInfo();
                        }
                        break;
                    case 'showStatistics':
                        if (value !== previousValue) {
                            if (value) {
                                com.zappware.chromecast.util.removeClass(DOM.statisticsOverlay, 'hidden');
                                _updateStatistics();
                            }
                            else {
                                com.zappware.chromecast.util.addClass(DOM.statisticsOverlay, 'hidden');
                            }
                        }
                        break;
                    case 'ageRating':
                        if (value !== previousValue && currentEvent) {
                            _currentEventUpdated(currentEvent);
                        }
                        break;
                    case 'customData':
                        const { profileId } = value
                        const { profileId: previousProfileId } = previousValue
                        if (profileId && previousProfileId) {
                            if (profileId !== previousProfileId) {
                                // Close the receiver app with a small delay to allow session cleanup.
                                setTimeout(() => window.close(), 2000);
                                com.zappware.chromecast.receiver.onBuffering(true);
                                com.zappware.chromecast.player.shutdown();
                            }
                        }
                        break;
                    case 'playback':
                    case 'qos':
                        config[property] = _setConfig(property, params[property], previousValue);
                        break;
                    default:
                        break;
                }
            }
        }

        com.zappware.chromecast.player.initialize(config);
    }

    function _setConfig(key, params, previousValue) {
        var result = com.zappware.chromecast.util.cloneObject(previousValue);

        // Iterate over the params provided:
        for (var property in params) {
            if (params.hasOwnProperty(property)) {
                // If the property is there with a value of undefined -> revert to the default
                var value = (params[property] !== "DEFAULT") ?
                    params[property] : defaultConfig[key][property];

                // There is no immediate action when changing this config value -> changes are
                // taken into account on the next load request.
                result[property] = value;
            }
        }

        return result;
    }

    /**
     * Returns the config as currently used by the chromecast receiver
     *
     * @returns {Object} params
     */
    function getConfig() {

        // Add version to config
        config.version = VERSION;

        return com.zappware.chromecast.util.cloneObject(config);
    }

    /**
     * Sets the meta data to be used by the chromecast receiver.
     *
     * @param {type} params : {
     *                     contentType: <string>,
     *                     channelLogo: <string>,
     *                     channelTitle: <string>,
     *                     items: [{
     *                         title: <string>,
     *                         start: <integer>,
     *                         end: <integer>,
     *                         image: <string>,
     *                         ageRating: <integer>
     *                     }]
     *                 }
     *
     * @returns {undefined}
     */
    function setMetaData(params) {
        DEBUG && log("setMetaData(" + params.mediaSessionToken + ")");

        // Store in hashmap
        if (metadata[params.mediaSessionToken] && !params.clear) {
            metadata[params.mediaSessionToken].unshift(params);
        }
        else {
            metadata[params.mediaSessionToken] = [params];
        }

        if (params.mediaSessionToken === mediaSessionToken) {
            // Update the channel id / title / logo
            mediaInfo.channelId = params.channelId;
            mediaInfo.channelLogo = params.channelLogo;
            mediaInfo.channelTitle = params.channelTitle;

            if (params.title) {
                mediaInfo.title = params.title;
            }

            var _currentEvent = currentEvent;
            _checkCurrentEventUpdate();
            _updateMediaInfo();

            if (currentEvent) {
                if (!_currentEvent) {
                    _showBanner();
                }
                if (error === com.zappware.chromecast.Error.NO_METADATA) {
                    error = null;
                }
            }
            else {
                if (!error  && com.zappware.chromecast.player.getPosition() >= 0) {
                    // Playing but no currentEvent? raise an error
                    _handleNoMetaData();
                }
            }

            currentMetadata = metadata[params.mediaSessionToken][0];
        }
    }

    /**
     * Returns the metadata as currently used by the chromecast receiver
     *
     * @returns {Object} params
     */
    function getMetaData(params) {
        var token = params && params.mediaSessionToken || mediaSessionToken;
        return token && metadata[token];
    }

    /**
     * Get the current playing event info.
     *
     * @returns {Object} params : {
     *                       title: <string>,
     *                       start: <integer>,
     *                       bufferStart: <integer>,
     *                       end: <integer>,
     *                       image: <string>,
     *                       ageRating: <integer>,
     *                       locked: <boolean>,
     *                       channelId: <string>,
     *                       channelLogo: <string>,
     *                       channelTitle: <string>
     *                   }
     */
    function getCurrentEvent() {
        var result = {
            id: currentEvent && currentEvent.id || undefined,
            title: currentEvent && _maskItWhenLocked(currentEvent, 'title') || undefined,
            subtitle: currentEvent && _maskItWhenLocked(currentEvent, 'subtitle') || undefined,
            start: currentEvent && currentEvent.start || undefined,
            bufferStart: com.zappware.chromecast.player.getMinPosition(),
            end: currentEvent && currentEvent.end || undefined,
            image: currentEvent && _maskItWhenLocked(currentEvent, 'image') || undefined,
            ageRating: currentEvent && currentEvent.ageRating || undefined,
            customData: currentEvent && currentEvent.customData || undefined,
            locked: locked,
            blocked: blocked,
            channelId: mediaInfo.channelId || undefined,
            channelTitle: mediaInfo.channelTitle || undefined,
            channelLogo: mediaInfo.channelLogo || undefined,
            mediaSessionToken: mediaSessionToken
        };

        if (mode !== com.zappware.chromecast.PlaybackMode.LIVETV &&
            mode !== com.zappware.chromecast.PlaybackMode.PLTV) {

            result.start = result.bufferStart = 0;
            if (currentMetadata) {
                // Overwrite the event properties with the properties provided at root level.
                if (_maskItWhenLocked(currentMetadata, 'title')) {
                    result.title = _maskItWhenLocked(currentMetadata, 'title');
                }
                // Overwrite the event properties with the properties provided at root level.
                if (_maskItWhenLocked(currentMetadata, 'subtitle')) {
                    result.subtitle = _maskItWhenLocked(currentMetadata, 'subtitle');
                }
                if (_maskItWhenLocked(currentMetadata, 'image')) {
                    result.image = _maskItWhenLocked(currentMetadata, 'image');
                }
                if (currentMetadata.hasOwnProperty('ageRating')) {
                    result.ageRating = Math.max(currentMetadata.ageRating, result.ageRating || 0);
                }
                if (currentMetadata.hasOwnProperty('start')) {
                    result.start = currentMetadata.start;
                }
                if (currentMetadata.hasOwnProperty('end')) {
                    result.end = currentMetadata.end;
                }
                if (currentMetadata.hasOwnProperty('bufferStart')) {
                    result.bufferStart = currentMetadata.bufferStart;
                }
                if (currentMetadata.hasOwnProperty('customData')) {
                    result.customData = currentMetadata.customData;
                }
                if (currentMetadata.hasOwnProperty('end')) {
                    result.duration = currentMetadata.end - result.start;
                }
            }
            if (!result.duration) {
                result.duration = Math.floor(com.zappware.chromecast.player.getMaxPosition()) || undefined;
            }

            if (!result.end && result.duration) {
                result.end = result.start + result.duration;
            }
        }

        return result;
    }

    function _maskItWhenLocked(_event, prop) {
        // To support masking of rated content, metadata properties 'titleWhenLocked', 'subtitleWhenLocked',
        // 'imageWhenLocked' overrule the default properties set.
        if (_shouldLock(_event)) {
            if (_event && _event.hasOwnProperty(prop + 'WhenLocked')) {
                return _event[prop + 'WhenLocked'];
            }
        }
        if (_event && _event.hasOwnProperty(prop)) {
            return _event[prop];
        }
        return undefined;
    }

    /**
     * Sets the playback position to an absolute date/time (only applicable for Live TV).
     *
     * @param {Object} params : {
     *                     position: <integer>
     *                 }
     * @returns {undefined}
     */
    function setCurrentPosition(params) {
        if (params.mediaSessionToken === mediaSessionToken) {
            var resumeState = (params.resumeState === 'PLAYBACK_PAUSE') ? com.zappware.chromecast.PlayerState.PAUSED : undefined;

            // Translate to absolute position; This is needed when the request comes in via cast.framework.messages.MessageType.SEEK
            if (mode === com.zappware.chromecast.PlaybackMode.LIVETV ||
                mode === com.zappware.chromecast.PlaybackMode.PLTV   ){
                if (params.position < 946684800 && com.zappware.chromecast.player.getMediaStartAbsoluteTime()) { // 01/01/2000 00:00
                    params.position = params.position + com.zappware.chromecast.player.getMediaStartAbsoluteTime();
                }
            }

            com.zappware.chromecast.player.setPosition(params.position, resumeState);

            _showBanner();
        }
    }

    /**
     * Gets the playback position.
     *
     * @returns {position: <integer>}
     */
    function getCurrentPosition(params) {
        if (params.mediaSessionToken === mediaSessionToken) {
            return com.zappware.chromecast.player.getPosition();
        }
    }

    /**
     * Gets the minimum playback position.
     *
     * @returns {position: <integer>}
     */
    function getMinPosition(params) {
        if (params.mediaSessionToken === mediaSessionToken) {
            return com.zappware.chromecast.player.getMinPosition();
        }
    }

    /**
     * Gets the playback position.
     *
     * @returns {position: <integer>}
     */
    function getMaxPosition(params) {
        if (params.mediaSessionToken === mediaSessionToken) {
            return com.zappware.chromecast.player.getMaxPosition();
        }
    }

    /**
     * This function locks audio/video representation, e.g. for age rated programmes.
     *
     * @param {Object} params : {
     *                     locked: <boolean>
     *                 }
     * @returns {undefined}
     */
    function setLocked(params) {
        DEBUG && log("setLocked(" + params.mediaSessionToken + ")");
        if (params.mediaSessionToken === mediaSessionToken) {
            let wasLocked = locked;

            _setLocked(params.locked);

            // If we succeeded in unlocking, remember the unlocked age rating
            if (wasLocked === true && locked === false) {
                unlockedAgeRating = currentEvent && currentEvent.ageRating || undefined;

                // Update possibly unmasked metadata
                _currentEventUpdated(currentEvent, currentMetadata, true);
                _updateMediaInfo();
                _updateMediaMetadata();
            }
        }
    }

    function _setLocked(_locked) {
        DEBUG && log("_setLocked(" + _locked + "); blocked = " + blocked);
        locked = _locked;

        com.zappware.chromecast.util.removeClass(document.body, 'Splash');
        com.zappware.chromecast.util.removeClass(document.body, 'Blocked');
        com.zappware.chromecast.util.removeClass(document.body, 'Locked');
        com.zappware.chromecast.util.removeClass(document.body, 'Black');
        com.zappware.chromecast.util.removeClass(document.body, 'Buffering');
        com.zappware.chromecast.util.removeClass(document.body, 'Error');

        if (locked === false && blocked === false) {
            // unmute
            com.zappware.chromecast.player.setMuted(false);

            _setDisplayMessage({
                title: '',
                description: ''
            });

            // Auto-hide banner if showing
            if (!com.zappware.chromecast.util.hasClass(DOM.playbackBanner, 'hidden')) {
                _showBanner();
            }
        }
        else {
            // mute
            com.zappware.chromecast.player.setMuted(true);

            com.zappware.chromecast.util.addClass(document.body, blocked ? 'Blocked' : locked ? 'Locked' : 'Black');

            _setDisplayMessage({
                title: (blocked) ? com.zappware.chromecast.globaltext.getString('contentBlockedTitle') : (locked) ? com.zappware.chromecast.globaltext.getString('contentLockedTitle') : "",
                description: (blocked) ? com.zappware.chromecast.globaltext.getString('contentBlockedDescription') : (locked) ? com.zappware.chromecast.globaltext.getString('contentLockedDescription') : ""
            });

            _showBanner(false);
        }
    }

    /**
     * Returns the current lock status
     *
     *
     * @param {Object} params
     * @returns {Object}
     */
    function getLocked(params) {
        return {
            mediaSessionToken: mediaSessionToken,
            locked: !!locked, // Return a boolean value -> if locked is undefined, we return 'false'
            ageRating: getCurrentEvent().ageRating
        };
    }

    function _setErrorMessage(code) {
        let kTitle = 'onErrorTitle';
        let kDescr = 'onErrorDescription';

        // If there is a specific error message defined for this code, use that one:
        if (com.zappware.chromecast.ErrorMessage[code]) {
            if (com.zappware.chromecast.ErrorMessage[code].title) {
                kTitle = com.zappware.chromecast.ErrorMessage[code].title;
            }
            if (com.zappware.chromecast.ErrorMessage[code].description) {
                kDescr = com.zappware.chromecast.ErrorMessage[code].description;
            }
        }

        _setDisplayMessage({
            title: com.zappware.chromecast.globaltext.getString(kTitle),
            description: com.zappware.chromecast.globaltext.getString(kDescr).replace('$CODE$', code)
        });
    }

    function _setDisplayMessage(params) {
        var displayMessage = getDisplayMessage();

        if (JSON.stringify(params) !== JSON.stringify(displayMessage)) {
            setDisplayMessage(params);

            com.zappware.chromecast.cast.sendCustomMessage({
                action: 'displayMessageUpdate',
                params: getDisplayMessage()
            });
        }
    }

    /**
     *
     * @param {Object} params
     * @returns {undefined}
     */
    function setDisplayMessage(params) {
        DOM.displayTitle.innerHTML = params.title || "";
        DOM.displayDescription.innerHTML = params.description || "";

        if (params.background) {
            DOM.background.style.background = params.background;
        }
        else {
            if (params.innerHtml) {
                DOM.background.innerHTML = params.innerHtml;
            }
            else {
                DOM.background.style.background = "";
            }
        }

        if (params.title || params.description || params.background) {
            _hideBanner();
            com.zappware.chromecast.util.addClass(document.body, 'Message');
        }
        else {
            com.zappware.chromecast.util.removeClass(document.body, 'Message');
        }
    }

    /**
     * Returns the display parameters as currently set by the chromecast receiver
     *
     * @returns {Object} params
     */
    function getDisplayMessage() {
        return {
            title: DOM.displayTitle.innerHTML || "",
            description: DOM.displayDescription.innerHTML || "",
            background: DOM.background.style.background,
            innerHtml: DOM.background.innerHTML
        };
    }

    /**
     * Returns the current error status
     *
     * @returns {Object} params
     */
    function getError() {
        return {
            mediaSessionToken: mediaSessionToken,
            error: error && error.code || com.zappware.chromecast.Error.NO_ERROR,
            details: error && error.details || undefined
        };
    }

    function getCustomData(messageType) {
        var customData = com.zappware.chromecast.player.getCustomData(cast.framework.messages.MessageType.MEDIA_STATUS);

        if (customData) {
            customData.mediaSessionToken = mediaSessionToken;
        }

        return customData;
    }

    // Private functions //////////////////////////////////////////////////////////////////////////

    function _checkCurrentEventUpdate() {
        if (!mediaSessionToken || !metadata[mediaSessionToken]) {
            return;
        }

        var position = com.zappware.chromecast.player.getPosition();
        var update;
        var _metadata = metadata[mediaSessionToken][0];

        // Find the current event in the metadata
        if (mode === com.zappware.chromecast.PlaybackMode.LIVETV    ||
            mode === com.zappware.chromecast.PlaybackMode.PLTV      ||
            mode === com.zappware.chromecast.PlaybackMode.STARTOVER ||
            mode === com.zappware.chromecast.PlaybackMode.CUTV      ||
            mode === com.zappware.chromecast.PlaybackMode.NPVR      ){

            for (var a = 0; !update && a < metadata[mediaSessionToken].length; a++) {
                _metadata = metadata[mediaSessionToken][a];
                var items =  _metadata.items;
                var offset = _metadata.start || 0;
                for (var i = 0; items && i < items.length; i++) {
                    var event = items[i];
                    if ((parseInt(event.start) <= (offset + position)) && parseInt(event.end) > (offset + position)) {
                        update = event;
                        break;
                    }
                }
            }
        }
        else {
            update = com.zappware.chromecast.util.cloneObject((_metadata.title) ? _metadata : _metadata.items[0]);
        }

        if (update) {
            if (currentEvent !== update && JSON.stringify(currentEvent) !== JSON.stringify(update) || mediaInfo.end === undefined) {
                _currentEventUpdated(update, _metadata);
                return true;
            }
        }
        else {
            // Tiens, there is no current event any more
            if (currentEvent) {
                _currentEventUpdated(undefined);
                return true;
            }
        }

        return false;
    }

    function _currentEventUpdated(event, _metadata, force) {
        DEBUG && log("_currentEventUpdated(" + JSON.stringify(event) + " // " + JSON.stringify(currentEvent) + "); mode = " + mode);

        var wasBlocked = blocked;
        var wasLocked = locked;
        var state = com.zappware.chromecast.player.getState();
        var playing = (
            state === com.zappware.chromecast.PlayerState.PLAYING ||
            state === com.zappware.chromecast.PlayerState.PAUSED  ||
            state === com.zappware.chromecast.PlayerState.SEEKING );

        // Update the block status
        blocked = _shouldBlock(event);

        // Send a custom message to notify the clients of the new lock status
        if (wasBlocked !== blocked) {
            if (blocked) {
                com.zappware.chromecast.cast.sendCustomMessage({
                    action: 'errorUpdate',
                    params: {
                        mediaSessionToken: mediaSessionToken,
                        error: com.zappware.chromecast.Error.EVENT_BLOCKED,
                        details: event
                    }
                });
            }
        }

        // NOTE:
        // In case we are blocked, we do not update the lock status as such, it remains as it was until
        // we are not blocked anymore (blocked overrules locked).
        //
        _setLocked(blocked ? locked : playing ? _shouldLock(event) : undefined);

        // Send a custom message to notify the clients of the new lock status
        if (wasLocked !== locked) {
            com.zappware.chromecast.cast.sendCustomMessage({
                action: 'lockedUpdate',
                params: com.zappware.chromecast.receiver.getLocked()
            });
        }

        var _prevEvent = currentEvent && getCurrentEvent();
        var _currentEvent;

        currentEvent = event;
        currentMetadata = _metadata || currentMetadata;

        _currentEvent = getCurrentEvent();

        // Update media info
        mediaInfo.title = _currentEvent.title || "";
        mediaInfo.start = parseInt(_currentEvent.start);
        mediaInfo.end   = parseInt(_currentEvent.end);

        if (!(mediaInfo.end > mediaInfo.start)) {
            mediaInfo.end = undefined;
        }

        if (_currentEvent.hasOwnProperty('bufferStart') && _currentEvent.bufferStart > 0) {
            // mediaInfo.offset = _currentEvent.bufferStart - _currentEvent.start;
        }

        if (force || JSON.stringify(_prevEvent) !== JSON.stringify(_currentEvent)) {
            // Send a custom message to notify the clients of the new event
            com.zappware.chromecast.cast.sendCustomMessage({
                action: 'currentEventUpdate',
                params: _currentEvent
            });
        }

        // Trigger update of media metadata
        _updateMediaMetadata();
    }

    function _updateMediaMetadata() {

        if (!currentEvent) {
            return;
        }

        // Update the metadata of the mediaInfo
        var media = playerManager.getMediaInformation();
        if (mode === com.zappware.chromecast.PlaybackMode.LIVETV ||
            mode === com.zappware.chromecast.PlaybackMode.PLTV ){

            let startAbsoluteTime = com.zappware.chromecast.player.getMediaStartAbsoluteTime(media);
            if (media && startAbsoluteTime) {
                media.streamType = 'LIVE';

                function _toGenericMediaMetadata(_event) {
                    let genericMediaMetadata = new cast.framework.messages.GenericMediaMetadata();

                    genericMediaMetadata.title = _maskItWhenLocked(_event, 'title') || "";
                    genericMediaMetadata.subtitle = _maskItWhenLocked(_event, 'subtitle') || "";
                    genericMediaMetadata.images = _maskItWhenLocked(_event, 'image') ? [new cast.framework.messages.Image(_maskItWhenLocked(_event, 'image'))] : [];
                    genericMediaMetadata.sectionDuration = _event.end - _event.start;
                    genericMediaMetadata.sectionStartAbsoluteTime = _event.start;
                    return genericMediaMetadata;
                }

                const containerMetadata = new cast.framework.messages.ContainerMetadata();
                containerMetadata.title = currentMetadata.channelTitle;
                containerMetadata.sections = [];

                let currentIndex = currentMetadata.items.indexOf(currentEvent);
                for (var i = currentIndex - 1; i <= currentIndex + 1; i++) {
                    if (currentMetadata.items[i]) {
                        containerMetadata.sections.push(_toGenericMediaMetadata(currentMetadata.items[i]));
                    }
                }

                playerManager.getQueueManager().setContainerMetadata(containerMetadata);
            }
        }
        else if (media) {
            media.streamType = 'BUFFERED';

            if (!media.metadata) {
                media.metadata = new cast.framework.messages.GenericMediaMetadata();
            }

            media.metadata.title = _maskItWhenLocked(currentEvent, 'title') || "";
            media.metadata.subtitle = _maskItWhenLocked(currentEvent, 'subtitle') || "";
            media.metadata.images = (_maskItWhenLocked(currentEvent, 'image')) ? [new cast.framework.messages.Image(_maskItWhenLocked(currentEvent, 'image'))] : [];
        }
    }


    function _shouldLock(event) {
        if (!event) {
            return undefined;
        }

        if (unlockedAgeRating >= event.ageRating) {
            return false;
        }

        if (config.ageRating < event.ageRating) {
            return true;
        }
        if (config.ageRatingLockWhenEqual && config.ageRating === event.ageRating) {
            return true;
        }

        return false;
    }

    function _shouldBlock(_currentEvent, currentPosition) {
        var shouldBlock = _currentEvent && JSON.parse(_currentEvent.blocked || false) || false;
        if (mode === com.zappware.chromecast.PlaybackMode.LIVETV ||
            mode === com.zappware.chromecast.PlaybackMode.PLTV ){
            if (config.blackout && !shouldBlock) {
                if (currentPosition === undefined) {
                    currentPosition = com.zappware.chromecast.player.getPosition();
                }
                for (var i = 0; i < config.blackout.length; i++) {
                    var blackout = config.blackout[i];
                    if ((blackout.channelId === mediaInfo.channelId) &&
                        (currentPosition >= parseInt(blackout.start)) &&
                        (currentPosition < parseInt(blackout.end))) {
                        shouldBlock = true;
                        break;
                    }
                }
            }
        }
        return shouldBlock;
    }

    function _showTrickplay(tp) {
        switch (tp) {
            case 'Play':
                com.zappware.chromecast.util.removeClass(DOM.trickplay, 'Pause');
                com.zappware.chromecast.util.addClass(DOM.trickplay, 'Play');
                com.zappware.chromecast.util.removeClass(DOM.trickplay, 'deactivated');
                break;
            case 'Pause':
                com.zappware.chromecast.util.removeClass(DOM.trickplay, 'Play');
                com.zappware.chromecast.util.addClass(DOM.trickplay, 'Pause');
                com.zappware.chromecast.util.removeClass(DOM.trickplay, 'deactivated');
                break;
            default:
                com.zappware.chromecast.util.removeClass(DOM.trickplay, 'Pause');
                com.zappware.chromecast.util.removeClass(DOM.trickplay, 'Play');
                com.zappware.chromecast.util.addClass(DOM.trickplay, 'deactivated');
                break;
        }
    }

    function _showOverlay(visible) {
        if (visible) {
            com.zappware.chromecast.util.removeClass(DOM.overlay, 'hidden');
        } else {
            com.zappware.chromecast.util.addClass(DOM.overlay, 'hidden');
        }
    }

    function setPlaybackMode(_mode) {
        if (mode) {
            com.zappware.chromecast.util.removeClass(document.body, mode);
        }
        if (_mode) {
            com.zappware.chromecast.util.addClass(document.body, _mode);
        }
        mode = _mode;
    }

    function _updateMediaInfo() {
        DEBUG && log("_updateMediaInfo()");

        DOM.mediaTitle.innerText = mediaInfo.title || "";
        DOM.topLine.innerText = "";
        DOM.startTime.innerText = "";
        DOM.endTime.innerText = "";


        if (mode !== com.zappware.chromecast.PlaybackMode.VOD  &&
            mode !== com.zappware.chromecast.PlaybackMode.NPVR ){

            var fTime   = com.zappware.chromecast.globaltext.getString(config.ampmDateFormat ? 'formatTimeAMPM' : 'formatTime');
            var fNoTime = com.zappware.chromecast.globaltext.getString('formatNoTime');
            var fDate   = com.zappware.chromecast.globaltext.getString(config.ampmDateFormat ? 'formatDateAMPM' : 'formatDate');
            DOM.startTime.innerText = mediaInfo.start >= 0 && com.zappware.chromecast.util.formatDate(mediaInfo.start, fTime) || fNoTime;
            DOM.endTime.innerText = mediaInfo.end >= 0 && com.zappware.chromecast.util.formatDate(mediaInfo.end, fTime) || fNoTime;
            if (mediaInfo.start !== undefined && mediaInfo.end !== undefined) {
                var str = com.zappware.chromecast.util.formatDate(mediaInfo.start, fTime) + ' - ' + com.zappware.chromecast.util.formatDate(mediaInfo.end, fTime) + ' ' + com.zappware.chromecast.util.formatDate(mediaInfo.start, fDate);
                DOM.topLine.innerText = str;
            }
        }
        if (mediaInfo.channelLogo) {
            DOM.channelLogo.src = mediaInfo.channelLogo;
        }
        else {
            DOM.channelLogo.removeAttribute('src');
        }
        DOM.channelTitle.innerText = mediaInfo.channelTitle || "";
    }

    function _updateProgressBar(currentPosition) {
        // DOM.startTime.innerText = currentPosition !== undefined && com.zappware.chromecast.util.formatDate(currentPosition, "HH:mm:ss") || "--:--";

        com.zappware.chromecast.util.removeClass(DOM.playbackBanner, 'ready');

        var minPosition = com.zappware.chromecast.player.getMinPosition();
        var maxPosition = com.zappware.chromecast.player.getMaxPosition();

        // we calculate all values relative to the start of the event and in seconds.
        if (currentPosition === undefined ||
            mediaInfo.start === undefined ||
            mediaInfo.end   === undefined ||
            minPosition     === undefined ||
            maxPosition     === undefined ){
            // We can't update the progress -> reset widths and return
            DOM.progressForeground.style.width = DOM.progressBuffer.style.width = 0;
            if (DOM.progressPlaying) {
                DOM.progressPlaying.style.width = 0;
            }
            return;
        }

        var startPosition = 0;
        var endPosition = mediaInfo.end - mediaInfo.start;

        // If currentPostion/minPosition/maxPosition are (too) small, assume relative positions -> make them absolute.
        if (mode !== com.zappware.chromecast.PlaybackMode.VOD  &&
            mode !== com.zappware.chromecast.PlaybackMode.NPVR ){
            if (currentPosition < 946684800) { // 01/01/2000 00:00
                currentPosition = currentPosition + mediaInfo.start;
                minPosition = minPosition + mediaInfo.start;
                maxPosition = maxPosition + mediaInfo.start;
            }
            startPosition = mediaInfo.start;
            endPosition = mediaInfo.end;
        }

        // Indicate we can jump to Live (NEXX4-17455)
        if (mode !== com.zappware.chromecast.PlaybackMode.VOD){
            if (maxPosition < endPosition) {
                com.zappware.chromecast.util.addClass(document.body, 'live');
            }
            else {
                com.zappware.chromecast.util.removeClass(document.body, 'live');
            }
        }

        com.zappware.chromecast.util.addClass(DOM.playbackBanner, 'ready');

        var offset = mediaInfo.offset || 0;
        currentPosition += offset;
        minPosition     += offset;

        var totalTime = endPosition - startPosition;
        var startOfBuffer = Math.max(minPosition - startPosition, 0);
        var endOfBuffer = Math.min(totalTime, Math.max(maxPosition - startPosition + offset, 0));
        // one 100% corresponds to the width of the event = totalTime
        var w = DOM.progressBar.getClientRects()[0].width;

        function toPixel(t) {
            return Math.round((w * t) / totalTime) + 'px';
        }

        // The foreground is the part that is in the past.
        DOM.progressForeground.style.left = 0;
        DOM.progressForeground.style.width = toPixel(Math.max(0, Math.min(totalTime, startOfBuffer)));

        // The buffer is the part from startOfBuffer to now.
        var left = Math.max(0, Math.min(totalTime, startOfBuffer));
        var width = Math.min(totalTime, endOfBuffer) - left;
        DOM.progressBuffer.style.left = toPixel(left);
        DOM.progressBuffer.style.width = toPixel(width);

        // The marker is the current play position. The current position is relative to the start of streaming.
        // The marker position however is relative to the start of the event.
        var pos = currentPosition - startPosition;
        if (DOM.progressMarker) {
            left = Math.max(0, Math.min(totalTime, pos));
            DOM.progressMarker.style.left = toPixel(left - DOM.progressMarker.style.width/2);

            // If there is a formatProgressTime defined, the current position is set as inner text for the progressMarker
            let formatProgress = com.zappware.chromecast.globaltext.getString((Math.floor(currentPosition) >= 3600) ? 'formatProgressLong' : 'formatProgressShort');
            if (config.ampmDateFormat && currentPosition > 946684800) { // 01/01/2000 00:00)
                // Absolute time in AMPM dateformat
                formatProgress = com.zappware.chromecast.globaltext.getString('formatProgressLongAMPM') || formatProgress;
            }
            if (formatProgress) {
                DOM.progressMarker.innerText = com.zappware.chromecast.util.formatDate(Math.floor(currentPosition), formatProgress);
            }
        }

        // progressPlaying is an alternative manner to display the current position instead of using a marker.
        if (DOM.progressPlaying) {
            var right = Math.max(0, Math.min(totalTime, pos));
            left = Math.max(0, Math.min(totalTime, startOfBuffer));
            DOM.progressPlaying.style.left = toPixel(left);
            DOM.progressPlaying.style.width = toPixel(right - left);
        }

        // display the remaining duration for NPVR/VOD
        if (mode === com.zappware.chromecast.PlaybackMode.VOD  ||
            mode === com.zappware.chromecast.PlaybackMode.NPVR ){
            let duration = endPosition - startPosition;
            if (duration > 0) {
                let remainingDuration = Math.ceil(Math.max(duration - currentPosition, 0));
                let formatDuration = com.zappware.chromecast.globaltext.getString((remainingDuration >= 3600) ? 'formatDurationLong' : 'formatDurationShort');
                DOM.endTime.innerText = com.zappware.chromecast.util.formatDate(remainingDuration, formatDuration);
            }
        }
    }

    function _hideBanner() {
        DEBUG && log("_hideBanner()");
        com.zappware.chromecast.util.addClass(DOM.playbackBanner, 'hidden');
        if (bannerTimer) {
            clearTimeout(bannerTimer);
        }
        _showOverlay(false);
        bannerTimer = null;
    }

    function _showBanner(autohide) {
        if (autohide === undefined) {
            var state = com.zappware.chromecast.player.getState();

            autohide = (state === com.zappware.chromecast.PlayerState.PLAYING) && !locked && !blocked;
        }

        DEBUG && log("_showBanner(" + autohide + ")");
        com.zappware.chromecast.util.waitFontsLoaded().then(function() {
            _updateProgressBar(com.zappware.chromecast.player.getPosition());
            _showOverlay(true);
            com.zappware.chromecast.util.removeClass(DOM.playbackBanner, 'hidden');
            if (bannerTimer) {
                clearTimeout(bannerTimer);
            }
            if (autohide) {
                bannerTimer = setTimeout(_hideBanner, config.bannerTimeout * gOneSec);
            }
        });
    }

    function _updateStatistics() {
        var rates = [
            {m_max: Math.pow(2, 10), m_unit: 'bps'},
            {m_max: Math.pow(2, 20), m_unit: 'Kbps'},
            {m_max: Math.pow(2, 30), m_unit: 'Mbps'}];

        var rate = playerManager.getStats().streamBandwidth || 0;
        var idx = 0;
        while ((rate >= rates[idx].m_max) && (idx < rates.length - 1)) {
            ++idx;
        }
        if (idx > 0) {
            rate = (Math.round(10 * rate / rates[idx - 1].m_max) / 10);
        }

        DOM.statistics.innerText = com.zappware.chromecast.globaltext.getString('bitrate') + ': ' + rate + ' ' + rates[idx].m_unit;
    }

    /* return the public functions */
    return {
        init: init,

        // Cast API
        onLoad: onLoad,
        onPlay: onPlay,
        onBuffering: onBuffering,
        onPlaying: onPlaying,
        onPause: onPause,
        onSeeked: onSeeked,
        onStop: onStop,
        onError: onError,

        // Custom messages
        setConfig: setConfig,
        getConfig: getConfig,
        setMetaData: setMetaData,
        getMetaData: getMetaData,
        getCurrentEvent: getCurrentEvent,
        setLocked: setLocked,
        getLocked: getLocked,
        setDisplayMessage: setDisplayMessage,
        getDisplayMessage: getDisplayMessage,
        getError: getError,
        setCurrentPosition: setCurrentPosition,
        getCurrentPosition: getCurrentPosition,
        getMinPosition: getMinPosition,
        getMaxPosition: getMaxPosition,

        // Other
        getMediaSessionToken: getMediaSessionToken,
        getCustomData: getCustomData,
        setPlaybackMode: setPlaybackMode
    };
}());

///////////////////////////////////////////////////////////////////////////////////////////////////
