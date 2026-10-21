# juggybob.github.io

The portfolio and product website for **JuggyBob** — four independent applications for
Android and Windows.

Live site: <https://juggybob.github.io/>

| Route | Page |
| --- | --- |
| `/` | Homepage — hero, project showcase, directory, screenshot strip, about |
| `/apps/ironpulse/` | IronPulse — workout logger for Android |
| `/apps/calcsuite/` | Calculator Suite — 66 mathematical tools for Android |
| `/apps/discount-hunter/` | Discount Hunter — Steam / GOG / Epic deal feed for Android |
| `/apps/codescope/` | CodeScope — native Windows front end for the `scc` engine |

## Stack

- [Astro](https://astro.build) 5 with TypeScript
- Plain CSS custom properties for the design system (dark and light themes)
- Small, dependency-free vanilla scripts for the carousel, lightbox, filter and theme switch
- Self-hosted variable fonts (Archivo, JetBrains Mono) — no third-party requests at runtime
- `@astrojs/sitemap` for the sitemap

There is no analytics, no tracking, no cookies and no external API. The whole site is static
HTML, CSS and a few kilobytes of JavaScript.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Add `?theme=light` or `?theme=dark` to any URL to preview a specific colour theme without
changing the stored preference.

## Project layout

```
src/
├── assets/fonts/     self-hosted variable web fonts
├── components/       header, footer, phone/window frames, gallery, cards, icons
├── data/             site metadata and the single source of truth for every project
├── layouts/          BaseLayout (head, theme, ambient background) and ProductLayout
├── pages/            the five routes plus a 404
└── styles/           global design tokens and base styles
public/               favicon, manifest, robots.txt and the product imagery
```

All project facts — versions, licences, feature copy, gallery captions — live in
`src/data/projects.ts`. Correcting a detail there updates the homepage, the product page
and the footer at once.

## Deploying

Pushes to `main` run `.github/workflows/deploy.yml`, which type-checks the project, builds
it and publishes `dist/` to GitHub Pages. The repository's **Settings → Pages → Source**
should be set to **GitHub Actions**.

## Screenshots

Every screenshot in the site is a genuine capture of the released application. The Android
screens were taken on an emulator running the published APK; the CodeScope screenshots are of
the published Windows build analysing a real repository.
