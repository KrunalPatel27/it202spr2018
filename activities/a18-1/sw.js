self.addEventListener('install', function(event) {
     console.log("install");
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'index.html'
      ]);
    })
  );
});
self.addEventListener('activate', function(event) {
    console.log("activate");
});

self.addEventListener('fetch', function(e) {
    // log the event
    console.log('[Service Worker] Fetch', e);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
