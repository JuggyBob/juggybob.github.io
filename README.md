# juggybob.github.io

The portfolio and product website for **JuggyBob** — four independent applications for
Android and Windows.

Live site: <https://juggybob.github.io/>

| Route | Page |
| --- | --- |
| `/` | Homepage — hero, project showcase, directory, deep dive, screenshot strip, about |
| `/apps/ironpulse/` | IronPulse — workout logger for Android |
| `/apps/calcsuite/` | Calculator Suite — 66 mathematical tools for Android |
| `/apps/discount-hunter/` | Discount Hunter — Steam / GOG / Epic deal feed for Android |
| `/apps/codescope/` | CodeScope — native Windows front end for the `scc` engine |

## Stack

- [Astro](https://astro.build) 5 with TypeScript
- Plain CSS custom properties for the design system (dark and light themes)
- Small, dependency-free vanilla scripts for the carousel, lightbox, filter, theme switch
  and application menu
- Self-hosted variable fonts (Archivo, JetBrains Mono) — no third-party requests at runtime
- `@astrojs/sitemap` for the sitemap

There is no analytics, no tracking, no cookies and no external API. The whole site is static
HTML, CSS and a few kilobytes of JavaScript.

## Design system

- **Typography** — Archivo for display and body (variable, with the width axis used for
  editorial headlines), JetBrains Mono for labels and metadata. Both are self-hosted.
- **Colour** — a deep midnight-graphite dark theme with blue-violet undertones, and a warm
  ivory light theme. Each project carries its own accent drawn from its real icon.
- **Motion** — four slowly drifting blurred colour fields, a slow light shaft and a fine
  grain behind every page, plus a shared reveal vocabulary (`rise`, `depth`, `side`, `clip`).
  Everything is disabled under `prefers-reduced-motion`.
- **Surfaces** — hairline borders and restrained elevation rather than glass panels.

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
├── components/       header, application menu, phone/window frames, lightbox, cards
├── data/             site metadata and the single source of truth for every project
├── layouts/          BaseLayout (head, theme, ambient background) and ProductLayout
├── pages/            the five routes plus a 404
└── styles/           global design tokens and base styles
public/               favicon, manifest, robots.txt and the product imagery
```

All project facts — versions, licences, feature copy, gallery captions — live in
`src/data/projects.ts`. Correcting a detail there updates the homepage, the application
menu, the product page and the footer at once.

## Deployment

`.github/workflows/deploy.yml` is the **single, authoritative** publishing path. It runs on
every push to `main` and on manual dispatch, and it:

1. checks the repository out and sets up Node 20;
2. installs the pinned dependencies with `npm ci`;
3. runs `npm run build` (Astro's type-check plus the static build into `dist/`);
4. **verifies the generated output** — that `dist/` exists, that every route produced an
   HTML file, and that the fonts and application icons are present — failing the job
   loudly rather than uploading a half-finished artifact;
5. uploads `dist/` with `actions/upload-pages-artifact`;
6. deploys it with `actions/deploy-pages`.

The repository's **Settings → Pages → Source** is set to **GitHub Actions**. That is why
GitHub's legacy Jekyll build (`pages-build-deployment`) does not run: it was previously
trying to parse the Astro source files as YAML front matter, which failed with
`Invalid YAML front matter in src/components/Footer.astro` →
`YOUR SITE COULD NOT BE BUILT`. With the publishing source set to *GitHub Actions* only the
workflow above runs.

## Screenshots

Every screenshot in the site is a genuine capture of the released application. The Android
screens were taken on an emulator running the published APK; the CodeScope screenshots are of
the published Windows build analysing a real repository.
