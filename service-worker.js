/* STAGE service worker — unique cache so it never collides with LIVE */
const CACHE_NAME = 'conga-stage-v13';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(CORE)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k===CACHE_NAME ? null : caches.delete(k))))
    ).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, resClone));
        return res;
      }).catch(()=>cached);
    })
  );
});
