const cacheName = 'my_pwa_cache';
const staticAssets = [
  './images',
'./manifest.webmanifest'
]

self.addEventListener( 'install', async e => {
  const cache = await caches.open( cacheName );
  await cache.addAll( staticAssets );
  return self.skipWaiting();
} );

self.addEventListener( 'activate', e => {
  self.clients.claim();
} );
