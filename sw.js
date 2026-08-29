/* Tonnage — service worker : l'app marche hors ligne et se met à jour toute seule. */
const CACHE = "tonnage-v14";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./confidentialite.html", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
  "./img/push.jpg", "./img/pull.jpg", "./img/jambes.jpg", "./img/abdos.jpg", "./img/cardio.jpg", "./img/modif.png" "./img/tel1.png", "./img/tel2.png",
  "./img/muscles/back-avant-bras.png", "./img/muscles/back-base.png", "./img/muscles/back-deltoides.png", "./img/muscles/back-fessiers.png", "./img/muscles/back-grand-dorsal.png", "./img/muscles/back-ischio-jambiers.png", "./img/muscles/back-ligne.png", "./img/muscles/back-lombaires.png", "./img/muscles/back-mollets.png", "./img/muscles/back-trapezes.png", "./img/muscles/back-triceps.png", "./img/muscles/front-abdos.png", "./img/muscles/front-avant-bras.png", "./img/muscles/front-base.png", "./img/muscles/front-biceps.png", "./img/muscles/front-deltoides.png", "./img/muscles/front-ligne.png", "./img/muscles/front-mollets.png", "./img/muscles/front-pectoraux.png", "./img/muscles/front-quadriceps.png", "./img/muscles/front-trapezes.png"];

self.addEventListener("install", e => {
  /* un fichier en échec ne doit pas annuler la mise en cache de tous les autres */
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(u => c.add(u))))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* réseau d'abord (pour recevoir les mises à jour), cache en secours (pour l'usage hors ligne) */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});
