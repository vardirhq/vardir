# vardir

Nettsiden til [Vardir](https://vardir.no) — et uavhengig utviklingsstudio i Halden.

Statisk side (ren HTML/CSS/JS, ingen byggesteg), publisert med GitHub Pages.

## Struktur

```
index.html                     Hele siden (norsk one-pager)
assets/css/style.css           Designsystem, keyframes og splash-animasjon
assets/js/main.js              Splash-livssyklus, mobilmeny, prosjekt-toggle
assets/img/                    Logo, favicon, og:image
.github/workflows/deploy-pages.yml   Pages-deploy fra main
```

## Splash

En rask (~2,6 s) CSS/SVG-port av merkevare-reveal-animasjonen (komet → heksagon-montering → indigo-kile → ordmerke). Den vises én gang per nettleserøkt, kan hoppes over med klikk/Escape, og deaktiveres helt for brukere med `prefers-reduced-motion`.

## Lokal utvikling

Åpne `index.html` direkte, eller kjør en enkel server:

```sh
python3 -m http.server 8000
```

## Publisering

Push til `main` deployer automatisk via GitHub Actions. Engangsoppsett: i repo-innstillingene, sett **Settings → Pages → Source** til «GitHub Actions».
