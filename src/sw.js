
var debug              = false;
var CACHE_NAME         = 'my-site-cache-v1';
var urlsToCache = [
    // Style files
    '/FontAwesome/css/font-awesome.css',
    '/',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        Promise.all([
        caches.open(CACHE_NAME)
            .then(function(cache) {
                if (debug === true) console.log('Opened cache');
                return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
            }),

        ])
    );
});

self.addEventListener('fetch', function(event) {

    if (event.request.url.startsWith(location.origin) === false) return;
    if (event.request.url.indexOf('htm') < 1) return;

    event.respondWith(
        caches.match(event.request)
            .then(function(response) {

                if (response) {
                    if (debug === true) console.log("Serving " + event.request.url + " from cache.");
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        var responseToCache = response.clone();

                        return response;
                    }
                ).catch(
                    () => {
                        console.log("Problem");
                        console.log("Fixing");
                        return caches.open(CACHE_NAME).then(
                            function(cache) {
                                // cache.keys().then(function(keys) { console.log(keys); })
                                return cache.match("/")
                            }
                        );
                    }
                    );
            })
        );
});


