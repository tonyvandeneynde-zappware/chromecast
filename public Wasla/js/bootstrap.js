/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

// Initialize the namespaces in com.zappware.chromecast
var com;
if (typeof(com) === "undefined") {
  com = {};
}
com.zappware = {};
com.zappware.chromecast = {};
com.zappware.chromecast.cast = {
    init: function() {},
    sendCustomMessage: function() {}
};

function _applyZoom(container) {
    if (container) {
        if (window.innerWidth/1280 < window.innerHeight/720) {
            let zoom = window.innerWidth / 1280; // the screen elements are scaled and positioned on 1280x720.

            container.style.transform = "scale(" + zoom +")";
            container.style.transformOrigin = "0 0";
            container.style.top  = (window.innerHeight - 720 * zoom)/2 + "px";
        }
        else {
            let zoom = window.innerHeight / 720; // the screen elements are scaled and positioned on 1280x720.

            container.style.transform = "scale(" + zoom +")";
            container.style.transformOrigin = "0 0";
            container.style.left  = (window.innerWidth - 1280 * zoom)/2 + "px";
        }
    }
}

window.onload = function() {
    // Apply a zoom factor if we're dealing with larger/smaller screen devices
    if (window.innerWidth !== 1280 || window.innerHeight !== 720) {
        _applyZoom(document.getElementById('container'));
    }

    com.zappware.chromecast.cast.init(com.zappware.chromecast.player.getPlaybackConfig());
    com.zappware.chromecast.receiver.init();
};

(function() {
    // Set src for iframe splash if provided as query parameter (NEXX4-16167)
    let splashFrame = document.querySelector('iframe#splash');
    if (!splashFrame) {
        // No splash, no fun
        return;
    }

    // Apply a zoom factor for the splash frame if we're dealing with larger/smaller screen devices
    if (window.innerWidth !== 1280 || window.innerHeight !== 720) {
        _applyZoom(document.getElementById('background'));
    }

    // When no splash is specified in url, or splash url failed to load, replace the iframe with an default img
    var _onNoSplashFrame = function() {
        var img = document.createElement('img');
        img.id = 'splash';

        // replace iframe with img
        splashFrame.parentNode.replaceChild(img, splashFrame);
    };

    let query = window.location.search.substring(1); // drop the leading '?'
    if (query) {
        query = new URLSearchParams(query);
        if (query.get('splash')) {
            splashFrame.src = query.get('splash');
            splashFrame.onerror = _onNoSplashFrame;
            return;
        }
    }

    _onNoSplashFrame();
})();