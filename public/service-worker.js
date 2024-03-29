const CACHE_NAME = 'static-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/global.css',
  '/build/bundle.css',
  '/build/bundle.css.map',
  '/build/bundle.js',
  '/build/bundle.js.map',
  '/images/favicon.ico',
];

self.addEventListener('install', function (evt) {
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch((e) => console.log(e))
  );
});

self.addEventListener('activate', function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (evt) {
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .match(evt.request)
        .then((response) => {
          return response || fetch(evt.request);
        })
        .catch((e) => console.log(e));
    })
  );
});
