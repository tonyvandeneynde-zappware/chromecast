/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

function assert(condition, msg) {
    console.assert(condition, msg);

    if (!condition) {
        com.zappware.chromecast.cast.sendCustomLogMessage("Assertion failed: " + msg);
    }
}

com.zappware.chromecast.util = (function () {

    function getCurrentTime() {
        return ((new Date()).getTime())/1000;  // return epoch time in seconds
    }

    function cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function ID(id) {
        return document.querySelector((id[0] === '#' ? '#' : '') + id);
    }

    function hasClass(Elem, aClass) {
        return Elem.classList.contains(aClass);
    }

    function changeClass(Elem, OldClass, NewClass) {
        Elem.className = Elem.className.replace(new RegExp('(\\s|^)'+OldClass+'(\\s|$)'),'$1'+NewClass+'$2');
    }

    function removeClass(Elem, RemovedCls) {
        "use strict";
        if (Elem) {
            Elem.classList.remove(RemovedCls);
        }
    }

    function addClass(Elem, NewClass) {
        "use strict";
        if (Elem) {
            Elem.classList.add(NewClass);
        }
    }

    function _formatDate(date, format) {
        "use strict";
        if (!format) {
            return "";
        }

        var i, literals = format.match(/"[^"]*"|'[^']*'/g);
        if (literals) {
            for (i = 0; i < literals.length; i++) {
                format = format.replace(literals[i], "$" + i + "$");
            }
        }

        var year = "" + date.year;
        format = format.replace("yyyy", year);
        format = format.replace("yyy", year.substring(1, 4));
        format = format.replace("yy", year.substring(2, 4));
        format = format.replace("y", parseInt(year) % 100);

        var hours = date.hours;
        var strH = "" + hours;
        var strHH = strH;
        if (hours < 10) {
            strHH = '0' + strH;
        }
        format = format.replace("HH", strHH);
        format = format.replace("H", strH);

        // AM/PM notation
        var strh = "" + hours % 12;
        if (strh === "0") {
            strh = "12"; // the hour '0' should be '12'
        }
        var strhh = strh;
        if (strhh.length === 1) {
            strhh = "0" + strh;
        }
        var ampm = (hours < 12) ? "am" : "pm";
        var AMPM = (hours < 12) ? "AM" : "PM";

        format = format.replace("hh", strhh);
        format = format.replace("h", strh);
        format = format.replace("a", ampm);
        format = format.replace("A", AMPM);

        var min = date.minutes;
        var strm = "" + min;
        var strmm = strm;
        if (min < 10) {
            strmm = '0' + strm;
        }
        format = format.replace("mm", strmm);
        format = format.replace("m", strm);

        var sec = date.seconds;
        var strs = "" + sec;
        var strss = strs;
        if (sec < 10) {
            strss = '0' + strs;
        }
        format = format.replace("ss", strss);
        format = format.replace("s", strs);

        var month = date.month+1;
        var strM = "" + month;
        var strMM = strM;
        if (month < 10) {
            strMM = '0' + strM;
        }

        format = format.replace("MMMM", '$++++$');
        format = format.replace("MMM", '$+++$');
        format = format.replace("MM", '$++$');

        format = format.replace("$++++$", com.zappware.chromecast.globaltext.getLongMonthName(date.month));
        format = format.replace("$+++$", com.zappware.chromecast.globaltext.getShortMonthName(date.month));
        format = format.replace("$++$", strMM);
        format = format.replace("$+$", strM);

        var day = date.day;
        var strd = "" + day;
        var strdd = strd;
        if (day < 10) {
            strdd = '0' + strd;
        }
        format = format.replace("dddd", '$++++$');
        format = format.replace("ddd", '$+++$');
        format = format.replace("dd", '$++$');

        format = format.replace("$++++$", com.zappware.chromecast.globaltext.getLongDayName(date.dayOfWeek));
        format = format.replace("$+++$", com.zappware.chromecast.globaltext.getShortDayName(date.dayOfWeek));
        format = format.replace("$++$", strdd);
        format = format.replace("$+$", strd);

        if (literals) {
            for (i = 0; i < literals.length; i++) {
                format = format.replace("$" + i + "$", literals[i].substring(1, literals[i].length-1));
            }
        }

        return format;
    }

    /**
     * Formats a Date object into a String in the specified format. If a number is provided it is
     * assumed to be:
     * - a duration in seconds if it is below 86400000
     * - an epoch time in seconds if below 4102444800 (01/01/2100 00:00)
     * - an epoch time in millisecons
     *
     * @static
     * @method formatDate
     * @param {Date|Number} date The date object or a number (epoch time in ms or sec or duration)
     * @param {String} format The format string.
     * @return {String} The date formatted as a string.
     */
    function formatDate(date, format) {
        "use strict";

        if (typeof(date) === "number" || date instanceof Date) {
            if (typeof(date) === "number" && date > 86400000) {
                if (date < 4102444800) { // 01/01/2100 00:00
                    date = date * 1000;
                }
                date = new Date(date);
            }

            var dateObj;
            if (date instanceof Date) {
                dateObj = {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate(),
                    dayOfWeek: date.getDay(),
                    hours: date.getHours(),
                    minutes: date.getMinutes(),
                    seconds: date.getSeconds()
                };
            }
            else {
                // duration
                var minutes = (format.includes('s')) ?
                    Math.floor(date / 60) :
                    Math.ceil(date / 60);
                var hours = Math.floor(minutes / 60);

                dateObj = {
                    hours: hours,
                    minutes: minutes - (hours * 60),
                    seconds: date - (minutes * 60)
                };
            }

            return _formatDate(dateObj, format);
        }

        return "";
    }

    function _log(module, msg) {
        if (!msg) {
            msg = module;
            module = "";
        }

        function getTimestamp() {
            var now = new Date();
            var hrs = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            var ms = now.getMilliseconds();
            var timestamp = ((hrs < 10) ? "0" : "") + hrs + ":" + ((min < 10) ? "0" : "") + min + ":" + ((sec < 10) ? "0" : "") + sec + "." + ((ms < 10) ? "00" : ((ms < 100) ? "0" : "")) + ms + " ";
            return timestamp;
        }

        if (module) {
            module = "[" + module + "] ";
        }

        msg = getTimestamp() + module + msg;
        console.info(msg);
        com.zappware.chromecast.cast.sendCustomLogMessage(msg);
    }

    function getAsObject(data) {
        if (typeof data === 'string' || data instanceof String) {
            try {
                return JSON.parse(data);
            }
            catch(e) {}
        }

        return data;
    }

    function httpHead(url, timeout) {
        return new Promise(function (resolve, reject) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.timeout = timeout;
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4) {
                    if (xmlHttp.status === 200) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                }
            };
            xmlHttp.onError = xmlHttp.onTimeout = function(e) {
                reject(e);
            };

            xmlHttp.open("HEAD", url, true);
            xmlHttp.send(null);
        });
    }

    function httpGet(url, headers, withCredentials, response) {
        return new Promise(function (resolve, reject) {
            var xmlHttp = new XMLHttpRequest();

            xmlHttp.withCredentials = (withCredentials !== false);
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4) {
                    if (xmlHttp.status === 200) {
                        resolve(xmlHttp[response] || xmlHttp.responseText);
                    }
                    else {
                        reject(xmlHttp);
                    }
                }
            };
            xmlHttp.onError = function(e) {
                reject(e);
            };

            xmlHttp.open("GET", url, true);
            if (headers) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        xmlHttp.setRequestHeader(key, headers[key]);
                    }
                }
            }
            xmlHttp.send(null);
        });
    }

    function httpGetXML(url, headers, withCredentials) {
        return httpGet(url, headers, withCredentials, 'responseXML');
    }

    function httpGetRedirectURL(url, headers, withCredentials) {
        return httpGet(url, headers, withCredentials, 'responseURL');
    }

    function httpPostSync(url, headers, payload) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", url, false);
        if (headers) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xmlHttp.setRequestHeader(key, headers[key]);
                }
            }
        }
        xmlHttp.send(payload);

        return xmlHttp;
    }

    function httpPost(url, headers, payload) {
        return new Promise(function (resolve, reject) {
            var xmlHttp = new XMLHttpRequest();

            xmlHttp.withCredentials = true;
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4) {
                    if (xmlHttp.status === 200) {
                        resolve(xmlHttp.responseText);
                    }
                    else {
                        reject(xmlHttp);
                    }
                }
            };
            xmlHttp.onError = function(e) {
                reject(e);
            };

            xmlHttp.open("POST", url, true);
            if (headers) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        xmlHttp.setRequestHeader(key, headers[key]);
                    }
                }
            }
            xmlHttp.send(payload);
        });
    }

    function httpDelete(url, headers) {
        const xmlHttp = new XMLHttpRequest();

        xmlHttp.open("DELETE", url, true);

        if (headers) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xmlHttp.setRequestHeader(key, headers[key]);
                }
            }
        }

        xmlHttp.send();

        return xmlHttp;
    }

    /**
     * Converts an XML tree into an object tree.
     *
     * @static
     * @method xmlToObj
     * @param {Node} xml The XML node.
     * @return {Object} An object tree representation of the XML tree.
     */
    function xmlToObj(xml) {
        "use strict";
        var obj = {};
        if (xml.nodeType === 1) {
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0, jLen = xml.attributes.length; j < jLen; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType === 3) {
            return xml.nodeValue;
        }
        if (xml.hasChildNodes()) {
            for (var i = 0, iLen = xml.childNodes.length; i < iLen; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (nodeName === '#text') {
                    // NOTE: If there are siblings, the text value is appended to @text!
                    if (xml.childNodes.length === 1) {
                        obj = xmlToObj(item);
                    }
                    else {
                        obj["@text"] = xmlToObj(item);
                    }
                }
                else if (typeof(obj[nodeName]) === "undefined") {
                    obj[nodeName] = xmlToObj(item);
                }
                else {
                    if (!Array.isArray(obj[nodeName])) {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xmlToObj(item));
                }
            }
        }
        else {
            obj = undefined;
        }
        return obj;
    }

    function normalizeLanguageIsoCode(isoCode) {
        "use strict";
        switch (isoCode) {
            case 'arm':
                return 'hye'; // Armenian
            case 'baq':
                return 'eus'; // Basque
            case 'tib':
                return 'bod'; // Tibetan
            case 'bur':
                return 'mya'; // Burmese
            case 'cze':
                return 'ces'; // Czech
            case 'chi':
                return 'zho'; // Chinese
            case 'wel':
                return 'cym'; // Welsh
            case 'ger':
                return 'deu'; // German
            case 'bnl':
            case 'dut':
                return 'nld'; // Dutch
            case 'per':
                return 'fas'; // Persian
            case 'fre':
                return 'fra'; // French
            case 'geo':
                return 'kat'; // Georgian
            case 'gre':
                return 'ell'; // Greek
            case 'ice':
                return 'isl'; // Icelandic
            case 'mac':
                return 'mkd'; // Macedonian
            case 'mao':
                return 'mri'; // Maori
            case 'may':
                return 'msa'; // Malay
            case 'rum':
                return 'ron'; // Romanian
            case 'slo':
                return 'slk'; // Slovak
            case 'sqi':
                return 'alb'; // Albanian
            case 'scr':
                return 'hrv'; // Croatian
            case 'scc':
                return 'srp'; // Serbian
            default:
                return isoCode;
        }
    }

    function getLanguageFromIsoCode(isoCode) {
        var RFC5646_LANGUAGE_TAGS = {
          'af': 'Afrikaans',
          'af-ZA': 'Afrikaans (South Africa)',
          'ar': 'Arabic',
          'ar-AE': 'Arabic (U.A.E.)',
          'ar-BH': 'Arabic (Bahrain)',
          'ar-DZ': 'Arabic (Algeria)',
          'ar-EG': 'Arabic (Egypt)',
          'ar-IQ': 'Arabic (Iraq)',
          'ar-JO': 'Arabic (Jordan)',
          'ar-KW': 'Arabic (Kuwait)',
          'ar-LB': 'Arabic (Lebanon)',
          'ar-LY': 'Arabic (Libya)',
          'ar-MA': 'Arabic (Morocco)',
          'ar-OM': 'Arabic (Oman)',
          'ar-QA': 'Arabic (Qatar)',
          'ar-SA': 'Arabic (Saudi Arabia)',
          'ar-SY': 'Arabic (Syria)',
          'ar-TN': 'Arabic (Tunisia)',
          'ar-YE': 'Arabic (Yemen)',
          'az': 'Azeri (Latin)',
          'az-AZ': 'Azeri (Latin) (Azerbaijan)',
          'az-Cyrl-AZ': 'Azeri (Cyrillic) (Azerbaijan)',
          'be': 'Belarusian',
          'be-BY': 'Belarusian (Belarus)',
          'bg': 'Bulgarian',
          'bg-BG': 'Bulgarian (Bulgaria)',
          'bs-BA': 'Bosnian (Bosnia and Herzegovina)',
          'ca': 'Catalan',
          'ca-ES': 'Catalan (Spain)',
          'cs': 'Czech',
          'cs-CZ': 'Czech (Czech Republic)',
          'cy': 'Welsh',
          'cy-GB': 'Welsh (United Kingdom)',
          'da': 'Danish',
          'da-DK': 'Danish (Denmark)',
          'de': 'German',
          'de-AT': 'German (Austria)',
          'de-CH': 'German (Switzerland)',
          'de-DE': 'German (Germany)',
          'de-LI': 'German (Liechtenstein)',
          'de-LU': 'German (Luxembourg)',
          'dv': 'Divehi',
          'dv-MV': 'Divehi (Maldives)',
          'el': 'Greek',
          'el-GR': 'Greek (Greece)',
          'en': 'English',
          'en-AU': 'English (Australia)',
          'en-BZ': 'English (Belize)',
          'en-CA': 'English (Canada)',
          'en-CB': 'English (Caribbean)',
          'en-GB': 'English (United Kingdom)',
          'en-IE': 'English (Ireland)',
          'en-JM': 'English (Jamaica)',
          'en-NZ': 'English (New Zealand)',
          'en-PH': 'English (Republic of the Philippines)',
          'en-TT': 'English (Trinidad and Tobago)',
          'en-US': 'English (United States)',
          'en-ZA': 'English (South Africa)',
          'en-ZW': 'English (Zimbabwe)',
          'eo': 'Esperanto',
          'es': 'Spanish',
          'es-AR': 'Spanish (Argentina)',
          'es-BO': 'Spanish (Bolivia)',
          'es-CL': 'Spanish (Chile)',
          'es-CO': 'Spanish (Colombia)',
          'es-CR': 'Spanish (Costa Rica)',
          'es-DO': 'Spanish (Dominican Republic)',
          'es-EC': 'Spanish (Ecuador)',
          'es-ES': 'Spanish (Spain)',
          'es-GT': 'Spanish (Guatemala)',
          'es-HN': 'Spanish (Honduras)',
          'es-MX': 'Spanish (Mexico)',
          'es-NI': 'Spanish (Nicaragua)',
          'es-PA': 'Spanish (Panama)',
          'es-PE': 'Spanish (Peru)',
          'es-PR': 'Spanish (Puerto Rico)',
          'es-PY': 'Spanish (Paraguay)',
          'es-SV': 'Spanish (El Salvador)',
          'es-UY': 'Spanish (Uruguay)',
          'es-VE': 'Spanish (Venezuela)',
          'et': 'Estonian',
          'et-EE': 'Estonian (Estonia)',
          'eu': 'Basque',
          'eu-ES': 'Basque (Spain)',
          'fa': 'Farsi',
          'fa-IR': 'Farsi (Iran)',
          'fi': 'Finnish',
          'fi-FI': 'Finnish (Finland)',
          'fo': 'Faroese',
          'fo-FO': 'Faroese (Faroe Islands)',
          'fr': 'French',
          'fr-BE': 'French (Belgium)',
          'fr-CA': 'French (Canada)',
          'fr-CH': 'French (Switzerland)',
          'fr-FR': 'French (France)',
          'fr-LU': 'French (Luxembourg)',
          'fr-MC': 'French (Principality of Monaco)',
          'gl': 'Galician',
          'gl-ES': 'Galician (Spain)',
          'gu': 'Gujarati',
          'gu-IN': 'Gujarati (India)',
          'he': 'Hebrew',
          'he-IL': 'Hebrew (Israel)',
          'hi': 'Hindi',
          'hi-IN': 'Hindi (India)',
          'hr': 'Croatian',
          'hr-BA': 'Croatian (Bosnia and Herzegovina)',
          'hr-HR': 'Croatian (Croatia)',
          'hu': 'Hungarian',
          'hu-HU': 'Hungarian (Hungary)',
          'hy': 'Armenian',
          'hy-AM': 'Armenian (Armenia)',
          'id': 'Indonesian',
          'id-ID': 'Indonesian (Indonesia)',
          'is': 'Icelandic',
          'is-IS': 'Icelandic (Iceland)',
          'it': 'Italian',
          'it-CH': 'Italian (Switzerland)',
          'it-IT': 'Italian (Italy)',
          'ja': 'Japanese',
          'ja-JP': 'Japanese (Japan)',
          'ka': 'Georgian',
          'ka-GE': 'Georgian (Georgia)',
          'kk': 'Kazakh',
          'kk-KZ': 'Kazakh (Kazakhstan)',
          'kn': 'Kannada',
          'kn-IN': 'Kannada (India)',
          'ko': 'Korean',
          'ko-KR': 'Korean (Korea)',
          'kok': 'Konkani',
          'kok-IN': 'Konkani (India)',
          'ky': 'Kyrgyz',
          'ky-KG': 'Kyrgyz (Kyrgyzstan)',
          'lt': 'Lithuanian',
          'lt-LT': 'Lithuanian (Lithuania)',
          'lv': 'Latvian',
          'lv-LV': 'Latvian (Latvia)',
          'mi': 'Maori',
          'mi-NZ': 'Maori (New Zealand)',
          'mk': 'FYRO Macedonian',
          'mk-MK': 'FYRO Macedonian (Former Yugoslav Republic of Macedonia)',
          'mn': 'Mongolian',
          'mn-MN': 'Mongolian (Mongolia)',
          'mr': 'Marathi',
          'mr-IN': 'Marathi (India)',
          'ms': 'Malay',
          'ms-BN': 'Malay (Brunei Darussalam)',
          'ms-MY': 'Malay (Malaysia)',
          'mt': 'Maltese',
          'mt-MT': 'Maltese (Malta)',
          'nb': 'Norwegian (Bokm?l)',
          'nb-NO': 'Norwegian (Bokm?l) (Norway)',
          'nl': 'Dutch',
          'nl-BE': 'Dutch (Belgium)',
          'nl-NL': 'Dutch (Netherlands)',
          'nn-NO': 'Norwegian (Nynorsk) (Norway)',
          'ns': 'Northern Sotho',
          'ns-ZA': 'Northern Sotho (South Africa)',
          'pa': 'Punjabi',
          'pa-IN': 'Punjabi (India)',
          'pl': 'Polish',
          'pl-PL': 'Polish (Poland)',
          'ps': 'Pashto',
          'ps-AR': 'Pashto (Afghanistan)',
          'pt': 'Portuguese',
          'pt-BR': 'Portuguese (Brazil)',
          'pt-PT': 'Portuguese (Portugal)',
          'qu': 'Quechua',
          'qu-BO': 'Quechua (Bolivia)',
          'qu-EC': 'Quechua (Ecuador)',
          'qu-PE': 'Quechua (Peru)',
          'ro': 'Romanian',
          'ro-RO': 'Romanian (Romania)',
          'ru': 'Russian',
          'ru-RU': 'Russian (Russia)',
          'sa': 'Sanskrit',
          'sa-IN': 'Sanskrit (India)',
          'se': 'Sami',
          'se-FI': 'Sami (Finland)',
          'se-NO': 'Sami (Norway)',
          'se-SE': 'Sami (Sweden)',
          'sk': 'Slovak',
          'sk-SK': 'Slovak (Slovakia)',
          'sl': 'Slovenian',
          'sl-SI': 'Slovenian (Slovenia)',
          'sq': 'Albanian',
          'sq-AL': 'Albanian (Albania)',
          'sr-BA': 'Serbian (Latin) (Bosnia and Herzegovina)',
          'sr-Cyrl-BA': 'Serbian (Cyrillic) (Bosnia and Herzegovina)',
          'sr-SP': 'Serbian (Latin) (Serbia and Montenegro)',
          'sr-Cyrl-SP': 'Serbian (Cyrillic) (Serbia and Montenegro)',
          'sv': 'Swedish',
          'sv-FI': 'Swedish (Finland)',
          'sv-SE': 'Swedish (Sweden)',
          'sw': 'Swahili',
          'sw-KE': 'Swahili (Kenya)',
          'syr': 'Syriac',
          'syr-SY': 'Syriac (Syria)',
          'ta': 'Tamil',
          'ta-IN': 'Tamil (India)',
          'te': 'Telugu',
          'te-IN': 'Telugu (India)',
          'th': 'Thai',
          'th-TH': 'Thai (Thailand)',
          'tl': 'Tagalog',
          'tl-PH': 'Tagalog (Philippines)',
          'tn': 'Tswana',
          'tn-ZA': 'Tswana (South Africa)',
          'tr': 'Turkish',
          'tr-TR': 'Turkish (Turkey)',
          'tt': 'Tatar',
          'tt-RU': 'Tatar (Russia)',
          'ts': 'Tsonga',
          'uk': 'Ukrainian',
          'uk-UA': 'Ukrainian (Ukraine)',
          'ur': 'Urdu',
          'ur-PK': 'Urdu (Islamic Republic of Pakistan)',
          'uz': 'Uzbek (Latin)',
          'uz-UZ': 'Uzbek (Latin) (Uzbekistan)',
          'uz-Cyrl-UZ': 'Uzbek (Cyrillic) (Uzbekistan)',
          'vi': 'Vietnamese',
          'vi-VN': 'Vietnamese (Viet Nam)',
          'xh': 'Xhosa',
          'xh-ZA': 'Xhosa (South Africa)',
          'zh': 'Chinese',
          'zh-CN': 'Chinese (S)',
          'zh-HK': 'Chinese (Hong Kong)',
          'zh-MO': 'Chinese (Macau)',
          'zh-SG': 'Chinese (Singapore)',
          'zh-TW': 'Chinese (T)',
          'zu': 'Zulu',
          'zu-ZA': 'Zulu (South Africa)'
        };

        if (RFC5646_LANGUAGE_TAGS[isoCode]) {
            return RFC5646_LANGUAGE_TAGS[isoCode];
        }

        return isoCode;
    }

    /**
     * Checks if the web fonts are loaded.
     *
     * @method checkFontsLoaded
     * @return {Promise} A promise that is resolved when the fonts are loaded.
     */
    function waitFontsLoaded () {
        if (waitFontsLoaded._checkFontsLoadedPromise === undefined) {
            waitFontsLoaded._checkFontsLoadedPromise = new Promise(function(resolve, reject) {
                if (typeof(FONTS) === "undefined" || !FONTS.length) {
                    resolve();
                    return;
                }

                var fontDetector = new FontDetector();
                var counter = 0;

                // the promise is resolved when the fonts are loaded. The fonts are
                // loaded when the fontDetector.detect function returns true.
                (function check() {
                    var detected = 0;
                    for (var i = 0; i < FONTS.length; i++) {
                        if (fontDetector.detect(FONTS[i])) {
                            detected += 1;
                        }
                    }

                    if (detected === FONTS.length) {
                        resolve();
                        return;
                    }

                    counter += 1;
                    if (counter > 50) {
                        reject(new Error("Failed to load fonts"));
                    }
                    else {
                        DEBUG && com.zappware.chromecast.util.log("Waiting a bit more for font detection");
                        setTimeout(check, 100);
                    }
                })();
            });
        }

        return waitFontsLoaded._checkFontsLoadedPromise;
    }

    /* return the public functions */
    return {
        getCurrentTime: getCurrentTime,
        cloneObject: cloneObject,
        ID: ID,
        hasClass: hasClass,
        changeClass: changeClass,
        removeClass: removeClass,
        addClass: addClass,
        formatDate: formatDate,
        log: _log,
        getAsObject: getAsObject,
        httpHead: httpHead,
        httpGet: httpGet,
        httpGetXML: httpGetXML,
        httpGetRedirectURL: httpGetRedirectURL,
        httpPost: httpPost,
        httpPostSync: httpPostSync,
        httpDelete: httpDelete,
        xmlToObj: xmlToObj,
        normalizeLanguageIsoCode: normalizeLanguageIsoCode,
        getLanguageFromIsoCode: getLanguageFromIsoCode,
        waitFontsLoaded: waitFontsLoaded
    };

}());

///////////////////////////////////////////////////////////////////////////////////////////////////