self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/favicon.ico',
          '/manifest.json',
          '/styles.css',
          '/main.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(
        registration => {
          console.log('ServiceWorker registrado con éxito:', registration);
        },
        error => {
          console.log('Fallo al registrar el ServiceWorker:', error);
        }
      );
    });
  }
  
  