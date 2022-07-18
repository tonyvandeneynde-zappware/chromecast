/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

com.zappware.chromecast.GlobalText = function(configuration) {
    var currentLanguage = configuration.default;
    var strings = configuration.map;
    for (var s in strings) {
        if (strings.hasOwnProperty(s) && configuration.strings[strings[s]]) {
            strings[s] = configuration.strings[strings[s]];
        }
    }

    var longMonthKeys = [
        'longMonthNameJanuary', 'longMonthNameFebruary', 'longMonthNameMarch', 'longMonthNameApril',
        'longMonthNameMay', 'longMonthNameJune', 'longMonthNameJuly', 'longMonthNameAugust',
        'longMonthNameSeptember', 'longMonthNameOctober', 'longMonthNameNovember', 'longMonthNameDecember'];
    var shortMonthKeys = [
        'shortMonthNameJanuary', 'shortMonthNameFebruary', 'shortMonthNameMarch', 'shortMonthNameApril',
        'shortMonthNameMay', 'shortMonthNameJune', 'shortMonthNameJuly', 'shortMonthNameAugust',
        'shortMonthNameSeptember', 'shortMonthNameOctober', 'shortMonthNameNovember', 'shortMonthNameDecember'
    ];
    var shortDayKeys = [
        'shortDayNameSunday', 'shortDayNameMonday', 'shortDayNameTuesday', 'shortDayNameWednesday',
        'shortDayNameThursday', 'shortDayNameFriday', 'shortDayNameSaturday'
    ];
    var longDayKeys = [
        'longDayNameSunday', 'longDayNameMonday', 'longDayNameTuesday', 'longDayNameWednesday',
        'longDayNameThursday', 'longDayNameFriday', 'longDayNameSaturday'
    ];

    this.getLanguage = function() {
        return currentLanguage;
    };

    this.setLanguage = function(l) {
        if (strings[l]) {
            currentLanguage = l;
        }
        else {
            DEBUG && console.error("Request to set unsupported language: " + l + ". Supported languages: " + JSON.stringify(Object.keys(strings)));
        }
    };
    this.getLongMonthName = function(m) {
        var key = longMonthKeys[m];
        if (key) {
            return strings[currentLanguage][key];
        }
    };
    this.getShortMonthName = function(m) {
        var key = shortMonthKeys[m];
        if (key) {
            return strings[currentLanguage][key];
        }
    };
    this.getLongDayName = function(d) {
        var key = longDayKeys[d];
        if (key) {
            return strings[currentLanguage][key];
        }
    };
    this.getShortDayName = function(d) {
        var key = shortDayKeys[d];
        if (key) {
            return strings[currentLanguage][key];
        }
    };
    this.getString = function(key) {
        if (key) {
            return strings[currentLanguage][key];
        }
    };
};

com.zappware.chromecast.globaltext = new com.zappware.chromecast.GlobalText(GLOBALTEXT);