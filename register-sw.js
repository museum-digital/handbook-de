(async function() {
    "use strict";
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }

    const mn = document.createElement("link");
    mn.setAttribute('rel', 'manifest');
    mn.setAttribute('href', '/manifest.webmanifest');
    document.head.appendChild(mn);
})();
