// Nur Tiefenwacht-Dateien speichern; andere Apps auf derselben Domain bleiben getrennt.
const CACHE_PREFIX = 'tiefenwacht-';
const CACHE = CACHE_PREFIX + 'v1';
const ROOT = new URL('./', self.location.href);
const APP_SHELL = ['index.html', 'manifest.webmanifest', 'icon-192.png',
  'icon-512.png', 'icon-maskable-512.png'].map(path => new URL(path, ROOT).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE)
      .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== ROOT.origin ||
      !url.pathname.startsWith(ROOT.pathname)) return;
  const isHome = event.request.mode === 'navigate' &&
    (url.pathname === ROOT.pathname || url.pathname === ROOT.pathname + 'index.html');
  const key = isHome ? APP_SHELL[0] : event.request.url;
  // Keine beliebigen Seiten oder fremden Apps in den Offline-Speicher aufnehmen.
  if (!APP_SHELL.includes(key)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request, { cache: 'no-cache' });
      if (response.ok && !response.redirected) {
        try { await cache.put(key, response.clone()); } catch (_) { /* Speicher voll */ }
        return response;
      }
      return (await cache.match(key)) || response;
    } catch (error) {
      const cached = await cache.match(key);
      if (cached) return cached;
      throw error;
    }
  })());
});
