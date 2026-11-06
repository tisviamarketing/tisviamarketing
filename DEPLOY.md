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
- **Manrope is self-hosted** in `public/f/` — one variable woff2 per subset,
  preloaded. No connection to a font CDN, nothing third-party blocking render.
- **No `content-visibility` on sections.** It skips layout, so a jump to
  `#faq` lands in the wrong place. Sections use `contain: layout` instead.
- `backdrop-filter` on the sticky bar is **off below 880px**.
- Every image below the fold is `loading="lazy"` with a WebP `<picture>`
  source and explicit `width`/`height`.

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
