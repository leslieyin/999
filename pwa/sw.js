importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");
var cacheStorageKey = 'minimal-pwa-1'
var cacheList=[
  '/',
  'index.html',
  '/pwa/main.css',
  '/pwa/icons/64.png'
]
self.addEventListener('install',e =>{
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})

//activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
})

//fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch Event', evt);
})

self.addEventListener('fetch', function(event) {})
