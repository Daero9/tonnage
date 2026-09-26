/* Tonnup — service worker : l'app marche hors ligne et se met à jour toute seule. */
const CACHE = "tonnup-beta-v11-20260926-2244";
const ASSETS = ["./index.html", "./manifest.webmanifest", "./confidentialite.html", "./conditions.html", "./icon-192.png?v=4", "./icon-512.png?v=4", "./apple-touch-icon.png?v=4",
  "./img/exos/abducteurs.png",
  "./img/exos/abduction-hanche.png",
  "./img/exos/adducteurs.png",
  "./img/exos/arnold-press.png",
  "./img/exos/australiennes.png",
  "./img/exos/barre-au-front.png",
  "./img/exos/butterfly-arriere-et-avant.png",
  "./img/exos/chaise-contre-le-mur.png",
  "./img/exos/crunch-ballon.png",
  "./img/exos/crunch-cable.png",
  "./img/exos/crunch.png",
  "./img/exos/curl-barre.png",
  "./img/exos/curl-concentre.png",
  "./img/exos/curl-elastique.png",
  "./img/exos/curl-halteres.png",
  "./img/exos/curl-incline.png",
  "./img/exos/curl-marteau-elastique.png",
  "./img/exos/curl-marteau.png",
  "./img/exos/curl-poulie-basse.png",
  "./img/exos/curl-pupitre.png",
  "./img/exos/develope-kettlebell.png",
  "./img/exos/developpe-couche-elastique.png",
  "./img/exos/developpe-couche-halteres.png",
  "./img/exos/developpe-couche.png",
  "./img/exos/developpe-elastique.png",
  "./img/exos/developpe-haltere.png",
  "./img/exos/developpe-incline-barre.png",
  "./img/exos/developpe-incline-halteres.png",
  "./img/exos/developpe-machine.png",
  "./img/exos/developpe-militaire-barre.png",
  "./img/exos/dips-sur-banc.png",
  "./img/exos/dips.png",
  "./img/exos/ecartes-basse.png",
  "./img/exos/ecartes-elastique.png",
  "./img/exos/ecartes-halteres.png",
  "./img/exos/ecartes-haute.png",
  "./img/exos/ecartes-poulie.png",
  "./img/exos/elevation-laterales-poulie.png",
  "./img/exos/elevations-frontale.png",
  "./img/exos/elevations-laterales-elastique.png",
  "./img/exos/elevations-laterales-halteres.png",
  "./img/exos/extension-nuque.png",
  "./img/exos/extension-triceps-elastique.png",
  "./img/exos/extension-triceps-poulie-barre.png",
  "./img/exos/extension-triceps-poulie-corde.png",
  "./img/exos/face-pull.png",
  "./img/exos/fente-bulgare-pdc.png",
  "./img/exos/fentes-avant.png",
  "./img/exos/fentes-bulgares.png",
  "./img/exos/fentes-laterales.png",
  "./img/exos/fentes.png",
  "./img/exos/fessier-poulie.png",
  "./img/exos/front-squat.png",
  "./img/exos/gainage.png",
  "./img/exos/gobelet-squat.png",
  "./img/exos/good-morning.png",
  "./img/exos/hack-squat.png",
  "./img/exos/haussement.png",
  "./img/exos/hip-thrust.png",
  "./img/exos/leg-curl-ballon.png",
  "./img/exos/leg-curl-machine.png",
  "./img/exos/leg-extension.png",
  "./img/exos/mollet-assis.png",
  "./img/exos/mollet-debout-pdc.png",
  "./img/exos/mollet-sur-marche.png",
  "./img/exos/mollets-debout.png",
  "./img/exos/montee-sur-step.png",
  "./img/exos/montees-sur-banc.png",
  "./img/exos/mountain-climber.png",
  "./img/exos/oiseau-elastique.png",
  "./img/exos/oiseau.png",
  "./img/exos/planche-laterale.png",
  "./img/exos/pompes-declinees.png",
  "./img/exos/pompes-inclinees.png",
  "./img/exos/pompes-piquees.png",
  "./img/exos/pompes-trx.png",
  "./img/exos/pompes.png",
  "./img/exos/pont-une-jambe.png",
  "./img/exos/pont.png",
  "./img/exos/presse-a-cuisses.png",
  "./img/exos/pull-over-poulie.png",
  "./img/exos/pull-over.png",
  "./img/exos/releves-de-jambes.png",
  "./img/exos/roulette-abdos.png",
  "./img/exos/rowing-barre.png",
  "./img/exos/rowing-haltere.png",
  "./img/exos/rowing-machine.png",
  "./img/exos/rowing-menton.png",
  "./img/exos/rowing-t-bar.png",
  "./img/exos/rowing-trx.png",
  "./img/exos/russian-twist.png",
  "./img/exos/smith.png",
  "./img/exos/souleve-de-terre-elastique.png",
  "./img/exos/souleve-de-terre-roumain.png",
  "./img/exos/souleve-de-terre-sumo.png",
  "./img/exos/souleve-de-terre.png",
  "./img/exos/squat-barre.png",
  "./img/exos/squat-elastique.png",
  "./img/exos/squat.png",
  "./img/exos/superman.png",
  "./img/exos/surelevees.png",
  "./img/exos/swing-kettlebell.png",
  "./img/exos/tirage-horizontal-elastique.png",
  "./img/exos/tirage-horizontal.png",
  "./img/exos/tirage-prise-neutre.png",
  "./img/exos/tirage-sous-la-table.png",
  "./img/exos/tirage-vertical-elastique.png",
  "./img/exos/tirage-vertical.png",
  "./img/exos/traction.png",
  "./img/exos/triceps-poulie.png",
  "./img/push-2.jpg", "./img/pull-2.jpg", "./img/jambes-2.jpg", "./img/bras-2.jpg", "./img/abdos-2.jpg", "./img/cardio-2.jpg", "./img/modif.png",
  "./img/abo-analyze-2.webp", "./img/ic-run-2.webp", "./img/ic-walk-1.webp", "./img/ic-gps-1.webp", "./img/ic-chrono-2.webp", "./img/ic-calendar-1.webp", "./img/analyse-perso.webp", "./img/prog-haltere.webp", "./img/prog-muscle.webp", "./img/prog-chrono.webp", "./img/hero-seance-2.webp", "./img/hero-alimentation-2.webp", "./img/hero-analyse-2.webp",
  "./img/logo-texte.png", "./img/couronne.png", "./img/play.png", "./img/photos.png", "./img/sc-appareil.webp", "./img/pack20.webp", "./img/pack50.webp", "./img/aucune-seance.png", "./img/montagne.png", "./img/recup.png", "./img/vs-sac.png", "./img/vs-etoile.png", "./img/flamme-24b.webp", "./img/cadeau.webp", "./img/cadenas.webp", /* POUSSIN */ "./img/poussin/bandeau-bleu@danger.webp", "./img/poussin/bandeau-bleu@en-forme.webp", "./img/poussin/bandeau-bleu@fatigue.webp", "./img/poussin/bandeau-bleu@fete.webp", "./img/poussin/bandeau-bleu@muscle.webp", "./img/poussin/bandeau-bleu@record.webp", "./img/poussin/bandeau-bleu@repos.webp", "./img/poussin/bandeau-bleu@seance.webp", "./img/poussin/bandeau-rose@danger.webp", "./img/poussin/bandeau-rose@en-forme.webp", "./img/poussin/bandeau-rose@fatigue.webp", "./img/poussin/bandeau-rose@fete.webp", "./img/poussin/bandeau-rose@muscle.webp", "./img/poussin/bandeau-rose@record.webp", "./img/poussin/bandeau-rose@repos.webp", "./img/poussin/bandeau-rose@seance.webp", "./img/poussin/bandeau@danger.webp", "./img/poussin/bandeau@en-forme.webp", "./img/poussin/bandeau@fatigue.webp", "./img/poussin/bandeau@fete.webp", "./img/poussin/bandeau@muscle.webp", "./img/poussin/bandeau@record.webp", "./img/poussin/bandeau@repos.webp", "./img/poussin/bandeau@seance.webp", "./img/poussin/bonnet-blanc@danger.webp", "./img/poussin/bonnet-blanc@en-forme.webp", "./img/poussin/bonnet-blanc@fatigue.webp", "./img/poussin/bonnet-blanc@fete.webp", "./img/poussin/bonnet-blanc@muscle.webp", "./img/poussin/bonnet-blanc@record.webp", "./img/poussin/bonnet-blanc@repos.webp", "./img/poussin/bonnet-blanc@seance.webp", "./img/poussin/bonnet-rose@danger.webp", "./img/poussin/bonnet-rose@en-forme.webp", "./img/poussin/bonnet-rose@fatigue.webp", "./img/poussin/bonnet-rose@fete.webp", "./img/poussin/bonnet-rose@muscle.webp", "./img/poussin/bonnet-rose@record.webp", "./img/poussin/bonnet-rose@repos.webp", "./img/poussin/bonnet-rose@seance.webp", "./img/poussin/bonnet-vert@danger.webp", "./img/poussin/bonnet-vert@en-forme.webp", "./img/poussin/bonnet-vert@fatigue.webp", "./img/poussin/bonnet-vert@fete.webp", "./img/poussin/bonnet-vert@muscle.webp", "./img/poussin/bonnet-vert@record.webp", "./img/poussin/bonnet-vert@repos.webp", "./img/poussin/bonnet-vert@seance.webp", "./img/poussin/boxe-bleu@danger.webp", "./img/poussin/boxe-bleu@en-forme.webp", "./img/poussin/boxe-bleu@fatigue.webp", "./img/poussin/boxe-bleu@fete.webp", "./img/poussin/boxe-bleu@muscle.webp", "./img/poussin/boxe-bleu@record.webp", "./img/poussin/boxe-bleu@repos.webp", "./img/poussin/boxe-bleu@seance.webp", "./img/poussin/boxe-rouge@danger.webp", "./img/poussin/boxe-rouge@en-forme.webp", "./img/poussin/boxe-rouge@fatigue.webp", "./img/poussin/boxe-rouge@fete.webp", "./img/poussin/boxe-rouge@muscle.webp", "./img/poussin/boxe-rouge@record.webp", "./img/poussin/boxe-rouge@repos.webp", "./img/poussin/boxe-rouge@seance.webp", "./img/poussin/boxe-vert@danger.webp", "./img/poussin/boxe-vert@en-forme.webp", "./img/poussin/boxe-vert@fatigue.webp", "./img/poussin/boxe-vert@fete.webp", "./img/poussin/boxe-vert@muscle.webp", "./img/poussin/boxe-vert@record.webp", "./img/poussin/boxe-vert@repos.webp", "./img/poussin/boxe-vert@seance.webp", "./img/poussin/casque-noir@danger.webp", "./img/poussin/casque-noir@en-forme.webp", "./img/poussin/casque-noir@fatigue.webp", "./img/poussin/casque-noir@fete.webp", "./img/poussin/casque-noir@muscle.webp", "./img/poussin/casque-noir@record.webp", "./img/poussin/casque-noir@repos.webp", "./img/poussin/casque-noir@seance.webp", "./img/poussin/casque-rouge@danger.webp", "./img/poussin/casque-rouge@en-forme.webp", "./img/poussin/casque-rouge@fatigue.webp", "./img/poussin/casque-rouge@fete.webp", "./img/poussin/casque-rouge@muscle.webp", "./img/poussin/casque-rouge@record.webp", "./img/poussin/casque-rouge@repos.webp", "./img/poussin/casque-rouge@seance.webp", "./img/poussin/casque-vert@danger.webp", "./img/poussin/casque-vert@en-forme.webp", "./img/poussin/casque-vert@fatigue.webp", "./img/poussin/casque-vert@fete.webp", "./img/poussin/casque-vert@muscle.webp", "./img/poussin/casque-vert@record.webp", "./img/poussin/casque-vert@repos.webp", "./img/poussin/casque-vert@seance.webp", "./img/poussin/casquette-bleu@danger.webp", "./img/poussin/casquette-bleu@en-forme.webp", "./img/poussin/casquette-bleu@fatigue.webp", "./img/poussin/casquette-bleu@fete.webp", "./img/poussin/casquette-bleu@muscle.webp", "./img/poussin/casquette-bleu@record.webp", "./img/poussin/casquette-bleu@repos.webp", "./img/poussin/casquette-bleu@seance.webp", "./img/poussin/casquette-bodeaux@danger.webp", "./img/poussin/casquette-bodeaux@en-forme.webp", "./img/poussin/casquette-bodeaux@fatigue.webp", "./img/poussin/casquette-bodeaux@fete.webp", "./img/poussin/casquette-bodeaux@muscle.webp", "./img/poussin/casquette-bodeaux@record.webp", "./img/poussin/casquette-bodeaux@repos.webp", "./img/poussin/casquette-bodeaux@seance.webp", "./img/poussin/casquette-noir@danger.webp", "./img/poussin/casquette-noir@en-forme.webp", "./img/poussin/casquette-noir@fatigue.webp", "./img/poussin/casquette-noir@fete.webp", "./img/poussin/casquette-noir@muscle.webp", "./img/poussin/casquette-noir@record.webp", "./img/poussin/casquette-noir@repos.webp", "./img/poussin/casquette-noir@seance.webp", "./img/poussin/ceinture@danger.webp", "./img/poussin/ceinture@en-forme.webp", "./img/poussin/ceinture@fatigue.webp", "./img/poussin/ceinture@fete.webp", "./img/poussin/ceinture@muscle.webp", "./img/poussin/ceinture@record.webp", "./img/poussin/ceinture@repos.webp", "./img/poussin/ceinture@seance.webp", "./img/poussin/danger.webp", "./img/poussin/debardeur-noir@danger.webp", "./img/poussin/debardeur-noir@en-forme.webp", "./img/poussin/debardeur-noir@fatigue.webp", "./img/poussin/debardeur-noir@fete.webp", "./img/poussin/debardeur-noir@muscle.webp", "./img/poussin/debardeur-noir@record.webp", "./img/poussin/debardeur-noir@repos.webp", "./img/poussin/debardeur-noir@seance.webp", "./img/poussin/en-forme.webp", "./img/poussin/fatigue.webp", "./img/poussin/fete.webp", "./img/poussin/ico-bandeau-bleu.webp", "./img/poussin/ico-bandeau-rose.webp", "./img/poussin/ico-bandeau.webp", "./img/poussin/ico-bonnet-blanc.webp", "./img/poussin/ico-bonnet-rose.webp", "./img/poussin/ico-bonnet-vert.webp", "./img/poussin/ico-boxe-bleu.webp", "./img/poussin/ico-boxe-rouge.webp", "./img/poussin/ico-boxe-vert.webp", "./img/poussin/ico-casque-noir.webp", "./img/poussin/ico-casque-rouge.webp", "./img/poussin/ico-casque-vert.webp", "./img/poussin/ico-casquette-bleu.webp", "./img/poussin/ico-casquette-bodeaux.webp", "./img/poussin/ico-casquette-noir.webp", "./img/poussin/ico-ceinture.webp", "./img/poussin/ico-debardeur-noir.webp", "./img/poussin/ico-lunette-noir.webp", "./img/poussin/ico-medaille-bleu.webp", "./img/poussin/ico-medaille-rouge.webp", "./img/poussin/ico-petit-noeud-rose.webp", "./img/poussin/ico-petit-noeud-rouge.webp", "./img/poussin/ico-sifflet.webp", "./img/poussin/lunette-noir@danger.webp", "./img/poussin/lunette-noir@en-forme.webp", "./img/poussin/lunette-noir@fatigue.webp", "./img/poussin/lunette-noir@fete.webp", "./img/poussin/lunette-noir@muscle.webp", "./img/poussin/lunette-noir@record.webp", "./img/poussin/lunette-noir@repos.webp", "./img/poussin/lunette-noir@seance.webp", "./img/poussin/medaille-bleu@danger.webp", "./img/poussin/medaille-bleu@en-forme.webp", "./img/poussin/medaille-bleu@fatigue.webp", "./img/poussin/medaille-bleu@fete.webp", "./img/poussin/medaille-bleu@muscle.webp", "./img/poussin/medaille-bleu@record.webp", "./img/poussin/medaille-bleu@repos.webp", "./img/poussin/medaille-bleu@seance.webp", "./img/poussin/medaille-rouge@danger.webp", "./img/poussin/medaille-rouge@en-forme.webp", "./img/poussin/medaille-rouge@fatigue.webp", "./img/poussin/medaille-rouge@fete.webp", "./img/poussin/medaille-rouge@muscle.webp", "./img/poussin/medaille-rouge@record.webp", "./img/poussin/medaille-rouge@repos.webp", "./img/poussin/medaille-rouge@seance.webp", "./img/poussin/muscle.webp", "./img/poussin/petit-noeud-rose@danger.webp", "./img/poussin/petit-noeud-rose@en-forme.webp", "./img/poussin/petit-noeud-rose@fatigue.webp", "./img/poussin/petit-noeud-rose@fete.webp", "./img/poussin/petit-noeud-rose@muscle.webp", "./img/poussin/petit-noeud-rose@record.webp", "./img/poussin/petit-noeud-rose@repos.webp", "./img/poussin/petit-noeud-rose@seance.webp", "./img/poussin/petit-noeud-rouge@danger.webp", "./img/poussin/petit-noeud-rouge@en-forme.webp", "./img/poussin/petit-noeud-rouge@fatigue.webp", "./img/poussin/petit-noeud-rouge@fete.webp", "./img/poussin/petit-noeud-rouge@muscle.webp", "./img/poussin/petit-noeud-rouge@record.webp", "./img/poussin/petit-noeud-rouge@repos.webp", "./img/poussin/petit-noeud-rouge@seance.webp", "./img/poussin/record.webp", "./img/poussin/repos.webp", "./img/poussin/seance.webp", "./img/poussin/sifflet@danger.webp", "./img/poussin/sifflet@en-forme.webp", "./img/poussin/sifflet@fatigue.webp", "./img/poussin/sifflet@fete.webp", "./img/poussin/sifflet@muscle.webp", "./img/poussin/sifflet@record.webp", "./img/poussin/sifflet@repos.webp", "./img/poussin/sifflet@seance.webp", /* /POUSSIN */ "./img/humeur-bien.png", "./img/humeur-fatigue.png", "./img/humeur-tres-fatigue.png", "./img/drive.png", "./img/drive-blanc.png", "./img/onb-seances.jpg", "./img/onb-aliments.jpg", "./img/onb-charge.jpg", "./img/onb-progression.jpg", "./img/onb-seances-en.jpg", "./img/onb-aliments-en.jpg", "./img/onb-charge-en.jpg", "./img/onb-progression-en.jpg", "./img/onb-seances-es.jpg", "./img/onb-aliments-es.jpg", "./img/onb-charge-es.jpg", "./img/onb-progression-es.jpg", "./img/onb-seances-pt.jpg", "./img/onb-aliments-pt.jpg", "./img/onb-charge-pt.jpg", "./img/onb-progression-pt.jpg", 
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
  /* Les images, elles, se servent du cache D'ABORD. Elles ne changent jamais de contenu
     sous un meme nom — une image redessinee prend un nouveau nom de fichier — donc la
     copie gardee est toujours la bonne. En « reseau d'abord », chaque changement de
     page redemandait la photo de l'en-tete au serveur une fois le cache du navigateur
     expire (dix minutes) : l'en-tete restait vide le temps de l'aller-retour. */
  if (req.destination === "image" || /\.(webp|png|jpe?g|svg)($|\?)/.test(req.url)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    })));
    return;
  }
  const page = req.mode === "navigate" || /\.html($|\?)/.test(req.url);
  /* on reconstruit la demande a partir de l URL : on ne peut pas recopier une requete
     de navigation en changeant sa politique de cache, le navigateur la refuse */
  const demande = page ? new Request(req.url, {cache: "reload", credentials: "same-origin"}) : req;
  e.respondWith(
    fetch(demande)
      .then(res => {
        const copy = res.clone();
        /* Une navigation se range sous « ./index.html », jamais sous son URL. Sinon la
           meme page vit en double dans le cache — une fois sous « ./ », une fois sous
           « ./index.html » —, soit 2,4 Mo pour rien sur le telephone. C est deja la cle
           que le repli hors ligne va chercher, quelques lignes plus bas. */
        const cle = req.mode === "navigate" ? "./index.html" : req;
        caches.open(CACHE).then(c => c.put(cle, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});
