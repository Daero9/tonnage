/* Tonnup — service worker : l'app marche hors ligne et se met à jour toute seule. */
const CACHE = "tonnup-beta-v10-20260911-0049";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./confidentialite.html", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
  "./img/exos/arnold-press.png",
  "./img/exos/australiennes.png",
  "./img/exos/butterfly-arriere-et-avant.png",
  "./img/exos/crunch.png",
  "./img/exos/crunch-ballon.png",
  "./img/exos/curl-barre.png",
  "./img/exos/curl-elastique.png",
  "./img/exos/curl-halteres.png",
  "./img/exos/curl-incline.png",
  "./img/exos/curl-marteau.png",
  "./img/exos/curl-marteau-elastique.png",
  "./img/exos/develope-kettlebell.png",
  "./img/exos/developpe-couche.png",
  "./img/exos/developpe-couche-elastique.png",
  "./img/exos/developpe-couche-halteres.png",
  "./img/exos/developpe-elastique.png",
  "./img/exos/developpe-haltere.png",
  "./img/exos/developpe-incline-barre.png",
  "./img/exos/developpe-incline-halteres.png",
  "./img/exos/developpe-militaire-barre.png",
  "./img/exos/dips.png",
  "./img/exos/dips-sur-banc.png",
  "./img/exos/ecartes-elastique.png",
  "./img/exos/ecartes-halteres.png",
  "./img/exos/ecartes-poulie.png",
  "./img/exos/elevations-laterales-elastique.png",
  "./img/exos/elevations-laterales-halteres.png",
  "./img/exos/extension-triceps-elastique.png",
  "./img/exos/extension-triceps-poulie-barre.png",
  "./img/exos/extension-triceps-poulie-corde.png",
  "./img/exos/fente-bulgare-pdc.png",
  "./img/exos/fentes.png",
  "./img/exos/fentes-avant.png",
  "./img/exos/fentes-bulgares.png",
  "./img/exos/fentes-laterales.png",
  "./img/exos/front-squat.png",
  "./img/exos/gobelet-squat.png",
  "./img/exos/good-morning.png",
  "./img/exos/mollet-debout-pdc.png",
  "./img/exos/mollet-sur-marche.png",
  "./img/exos/mollets-debout.png",
  "./img/exos/montee-sur-step.png",
  "./img/exos/montees-sur-banc.png",
  "./img/exos/oiseau.png",
  "./img/exos/oiseau-elastique.png",
  "./img/exos/pompes.png",
  "./img/exos/pompes-trx.png",
  "./img/exos/rowing-barre.png",
  "./img/exos/rowing-haltere.png",
  "./img/exos/rowing-t-bar.png",
  "./img/exos/rowing-trx.png",
  "./img/exos/russian-twist.png",
  "./img/exos/souleve-de-terre.png",
  "./img/exos/souleve-de-terre-elastique.png",
  "./img/exos/souleve-de-terre-roumain.png",
  "./img/exos/souleve-de-terre-sumo.png",
  "./img/exos/squat.png",
  "./img/exos/squat-barre.png",
  "./img/exos/squat-elastique.png",
  "./img/exos/swing-kettlebell.png",
  "./img/exos/tirage-horizontal.png",
  "./img/exos/tirage-horizontal-elastique.png",
  "./img/exos/tirage-prise-neutre.png",
  "./img/exos/tirage-sous-la-table.png",
  "./img/exos/tirage-vertical.png",
  "./img/exos/tirage-vertical-elastique.png",
  "./img/exos/traction.png",
  "./img/push.jpg", "./img/pull.jpg", "./img/jambes.jpg", "./img/abdos.jpg", "./img/cardio.jpg", "./img/modif.png", 
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
  /* « réseau d'abord » ne suffisait pas : GitHub Pages sert la page avec un
     Cache-Control de dix minutes, et fetch() la reprenait telle quelle dans le cache
     HTTP du navigateur — puis la rangeait dans le nôtre. On demandait donc une
     nouveauté qu'on ne recevait pas. Pour la PAGE seulement, on court-circuite ce
     cache ; les images et le reste gardent le leur, elles ne changent pas de contenu. */
  const page = req.mode === "navigate" || /\.html($|\?)/.test(req.url);
  /* on reconstruit la demande a partir de l URL : on ne peut pas recopier une requete
     de navigation en changeant sa politique de cache, le navigateur la refuse */
  const demande = page ? new Request(req.url, {cache: "reload", credentials: "same-origin"}) : req;
  e.respondWith(
    fetch(demande)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});
