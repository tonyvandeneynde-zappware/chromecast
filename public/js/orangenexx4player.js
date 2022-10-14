/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

 com.zappware.chromecast.OrangeNexx4Player = (function () {
    // logging
    const log = function(msg) { com.zappware.chromecast.util.log("com.zappware.chromecast.OrangeNexx4Player", msg); };

    return class extends com.zappware.chromecast.SDSCloudPlayer {
        
        _configureDRM(loadRequestData) {
            DEBUG && log("_configureDRM()");

            const playbackConfig = this.getPlaybackConfig();
            const { pathLic, altPathLic, altPathLicMatch } = ORANGE_NEXX4_CONFIG;
            
            playbackConfig.licenseUrl = pathLic
            playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
            playbackConfig.licenseRequestHandler = function (requestInfo) {
                const { media: { contentUrl } = {} } = loadRequestData;
                let licenseUrl = pathLic;
    
                if (altPathLic && altPathLicMatch && contentUrl && contentUrl.includes(altPathLicMatch)) licenseUrl = altPathLic;

                if (!licenseUrl) return;

                requestInfo.url = licenseUrl.replace('$URL$', encodeURIComponent(contentUrl))
                requestInfo.withCredentials = false;            
            }
        }
    };
})();

// Instantiate the player:
com.zappware.chromecast.player = new com.zappware.chromecast.OrangeNexx4Player();


