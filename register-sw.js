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

(async function() {
    "use strict";

    const ytEmbeds = document.getElementsByClassName("yt-embed");
    for (let embed of ytEmbeds) {

        let target = embed.getAttribute("data-src");
        if (target === undefined || target === null) continue;

        embed.addEventListener('click', function() {
            // Clear content of div / preview image
            while (embed.firstChild) {
                embed.removeChild(embed.firstChild);
            }

            // Generate iframe
            const iframe = document.createElement("iframe");
            iframe.src = target;
            iframe.setAttribute('allowfullscreen', 'allowfullscreen');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            embed.appendChild(iframe);

            embed.classList.add("loaded");

        }, {once: true});

    }

})();
