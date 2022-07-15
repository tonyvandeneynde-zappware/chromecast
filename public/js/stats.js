/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.Stats = (function () {
    // logging
    var log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.Stats", msg); };

    var bitrates = [];

    var stats = function() {
        this._handlePlayerManagerEvent = this._handlePlayerManagerEvent.bind(this);
    };

    stats.prototype.start = function() {
        DEBUG && log("start()");
        var value = playerManager.getStats().streamBandwidth;
        bitrates.push({
            timestamp: com.zappware.chromecast.util.getCurrentTime(),
            value: value
        });
        playerManager.addEventListener(cast.framework.events.category.DEBUG, this._handlePlayerManagerEvent);
        playerManager.addEventListener(cast.framework.events.category.CORE,  this._handlePlayerManagerEvent);
    };

    stats.prototype.stop = function() {
        DEBUG && log("stop()");
        playerManager.removeEventListener(cast.framework.events.category.DEBUG, this._handlePlayerManagerEvent);
        playerManager.removeEventListener(cast.framework.events.category.CORE, this._handlePlayerManagerEvent);
    };

    stats.prototype.reset = function() {
        bitrates = [];
    };

    stats.prototype.getCurrentBitrate = function() {
        return playerManager.getStats().streamBandwidth;
    };

    stats.prototype.getAverageBitrate = function() {
        if (bitrates.length === 0) {
            return 0;
        }
        if (bitrates.length === 1) {
            return bitrates[0].value;
        }

        var totalInterval = 0;
        var result = 0;

        for (var i = 0; i < bitrates.length; ++i) {
            var endTime = (i < bitrates.length-1) ? bitrates[i+1].timestamp : com.zappware.chromecast.util.getCurrentTime();
            var interval = endTime - bitrates[i].timestamp;
            if (bitrates[i].value !== undefined) {
                result += bitrates[i].value * interval;
                totalInterval += interval;
            }
        }
        return Math.round(result / totalInterval);
    };

    stats.prototype.getNbrSwitchesLowerProfile = function() {
        return this._getNbrSwitches(function(a,b) { return (a > b);});
    };

    stats.prototype.getNbrSwitchesHigherProfile = function() {
        return this._getNbrSwitches(function(a,b) { return (a < b);});
    };

    stats.prototype._getNbrSwitches = function(functor) {
        if (bitrates.length <= 1) {
            return 0;
        }

        var result = 0;
        var previousValue = bitrates[0];
        for (var i = 1; i < bitrates.length; ++i) {
            if (bitrates[i].value !== undefined) {
                if (functor(previousValue, bitrates[i].value)) {
                    result++;
                }
                previousValue = bitrates[i].value;
            }
        }
        return result;
    };

    stats.prototype._handlePlayerManagerEvent = function(event) {
        switch (event && event.type) {
            case 'PLAY':
                var value = playerManager.getStats().streamBandwidth;
                bitrates.push({
                    timestamp: com.zappware.chromecast.util.getCurrentTime(),
                    value: value
                });
                DEBUG && log("_handlePlayerManagerEvent(" + JSON.stringify(event) + "): Added bitrate " + value + "bps");
                break;
            case 'REQUEST_PAUSE':
                // We are not buffering when paused, hence we set an undefined value so we can take this into
                // account when calculating the average.
                bitrates.push({
                    timestamp: com.zappware.chromecast.util.getCurrentTime(),
                    value: undefined
                });
                DEBUG && log("_handlePlayerManagerEvent(" + JSON.stringify(event) + "): Added bitrate undefined");
                break;
            case 'BITRATE_CHANGED':
                bitrates.push({
                    timestamp: com.zappware.chromecast.util.getCurrentTime(),
                    value: event.totalBitrate
                });
                DEBUG && log("_handlePlayerManagerEvent(" + JSON.stringify(event) + "): Added bitrate " + event.totalBitrate + "bps");
                break;
            default:
                break;
        }
    };

    return stats;
})();


