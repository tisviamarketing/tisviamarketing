# Deploy notes

One Astro project. One Vercel project. Two domains, split by hostname.

| URL                        | Source                        |
|----------------------------|-------------------------------|
| tisviamarketing.in         | `src/pages/main/index.astro`  |
| academy.tisviamarketing.in | `src/pages/academy/index.astro` |

## Vercel
- **Root Directory: empty.** `vercel.json` sits at the repo root and sets
  `buildCommand`, `outputDirectory` and `framework` itself, so the dashboard
  settings do not need to be touched. Pointing Root Directory at a subfolder
  breaks the build.
- Deploys from `main`.
- The repo is public. On the Hobby plan a private repo blocks any deployment
  whose commit author is not the project owner.

## How the hostname split works
Neither site is built to the output root, and that is deliberate: Vercel
resolves real files **before** it applies rewrites, so an `index.html` at the
root would be served for `/` on every hostname and the routing would never run.

With both sites in folders, `/` matches no file and `vercel.json` decides —
`academy.tisviamarketing.in` is rewritten into `/academy/`, everything else
into `/main/`.

Files that *do* exist at the output root (`/_astro/*`, `/favicon.png`, the
logos) are matched by the filesystem first and so are shared by both hostnames
without any rewrite. Anything that must differ per hostname — `robots.txt`,
`sitemap.xml`, `og.png` — therefore lives in `public/main/` and
`public/academy/`, never at the root.

If the academy subdomain changes, update the `has.value` host in `vercel.json`;
it is an exact string match.

## Content
All academy copy lives in `src/data/academy.ts`; contact details in
`src/data/site.ts`. The academy page is deliberately short — about 700 words
across seven numbered blocks. Keep it that way: long copy is a regression here.

Legal qualifiers are deliberate and must survive edits:
- Ad spend is *"up to ₹10 crore managed"*.
- Live advertising spend is **separate from the programme fee**.
- The certificate is conditional on assignments and assessment.
- Post-programme support is *proposed*, not promised.
- No campaign result, income or client is guaranteed.

The message screenshots in `public/t/` are cropped and redacted: a student's
phone number is blurred in `t2`. Do not re-crop from the originals on the
client's machine without redacting again.

## Still needed before this is advertised
- Batch start date and daily session times (the page sends people to WhatsApp
  for both). Morning and evening batches exist but are not published yet.

## Performance rules
These are the things that made the page lag, and they stay fixed:
- **No `filter: blur()` on the hero.** The moving gradient is three
  `radial-gradient` circles moved by `transform`. A blurred box re-renders an
  offscreen buffer every frame and is what killed it on a phone.
- **Inter is self-hosted** in `public/f/` — one variable woff2 per subset
  (latin, latin-ext; latin-ext carries ₹ U+20B9), preloaded. No connection to
  a font CDN, nothing third-party blocking render.
- **No `content-visibility` on sections.** It skips layout, so a jump to
  `#faq` lands in the wrong place. Sections use `contain: layout` instead.
- `backdrop-filter` on the sticky bar is **off below 880px**.
- Every image below the fold is `loading="lazy"` with a WebP `<picture>`
  source and explicit `width`/`height`.

## Icons
The favicon is the Tisvia "T" knocked out of a blue tile, not the logo PNG —
a wordmark is unreadable at 16px.

**The mark is three pieces, not two.** Shipping only the first two turns it
into a "1", which is exactly what the first version did. Geometry measured off
`logo-marketing.png` by alpha profiling, with the mark's top-left at the
origin, in a 186 x 219 box:

| piece       | geometry                            |
| ----------- | ----------------------------------- |
| left wedge  | `(0,0) (54,0) (0,102)`              |
| stem        | `x 55..139, y 0..219`               |
| right wedge | `(136,0) (186,0) (186,102)`         |

It lives in two places that must stay in step: `public/favicon.svg`
(hand-written) and the generator that emits the PNG/ICO set.

The icon links carry `?v=2`. Images are served with a one-week
`Cache-Control`, so a browser that already has the old mark keeps showing it
until that query string changes — **bump it whenever the artwork changes**,
in `Layout.astro` and in both `site.webmanifest` files.

Shipped at the output root, so both hostnames share them:
`favicon.ico` (16/32/48/64), `favicon.svg`, `apple-touch-icon.png` (180,
square — iOS rounds it itself), `icon-192.png`, `icon-512.png` and
`icon-maskable.png` (mark inside the 80% safe zone).

`site.webmanifest` is per host, in `public/main/` and `public/academy/`,
because the name and theme colour differ. Its icons point at the root files.

## Type
Inter, not Manrope. Inter is already a tight, even face, so the tracking is
light — `-0.02em` on display, `0` on body. **Do not push headings past
`-0.025em`**; the previous `-0.045em` to `-0.06em` settings read as congested.

## Policy pages
Three per host, built from `src/components/Legal.astro`:
`/terms/`, `/privacy/`, `/refund/`. Each site has its own — the agency ones
are about retainers, project work and media spend; the academy ones are about
course enrolment, recordings, the WhatsApp group and the fee.

**The numbers in the academy refund policy are a business decision, not a
technical one**: full refund 7+ days before a batch, 50% inside 7 days and
before day 1, none once the first session is delivered, one free transfer with
48 hours' notice. Change them in `src/pages/academy/refund.astro`.

Legal qualifiers that used to sit under the academy price box now live only in
the FAQ and in `/terms/` — live ad spend is separate from the fee, and the
certificate is conditional on the assignments and the final assessment. If the
FAQ is ever cut, those have to land somewhere else on the page.

## Accessibility rules that are load-bearing
- `--muted` is `#6b7284`: 4.81:1 on white and 4.53:1 on `--bg-soft`. The old
  `#767d91` was 4.11:1 and failed AA everywhere it was used.
- `.cta__p` is `#eef1ff` on `--blue` (4.56:1). `#dbe2ff` was 3.99:1.
- The academy bar ships with `bar--over` because that is correct while the
  hero fills the screen, and JS removes it after. With JS off nothing would,
  so a `<noscript>` block forces the solid bar — otherwise white type sits
  on a white page.
- `<header>` and `<footer>` are siblings of `<main>`, never inside it;
  nested, they stop being landmarks.
- The 404 is shared by both hostnames, so every link on it is absolute, and
  it carries `noindex` with no canonical.

## DNS (GoDaddy)
| Type  | Name      | Value                                 |
|-------|-----------|---------------------------------------|
| A     | `@`       | `216.198.79.1`                        |
| CNAME | `academy` | `a28cf879de88f953.vercel-dns-017.com` |

GoDaddy **Domain Forwarding** must stay off — while it is on it adds its own
`A` records at `@` that fight Vercel's and cannot be deleted.

## Local
```
npm install
npm run dev      # http://localhost:4321/main/  and  /academy/
npm run build
```
