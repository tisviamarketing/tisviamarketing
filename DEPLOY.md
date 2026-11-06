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
Copy comes from the client's content pack (agency hero + full academy page).
Legal qualifiers in it are deliberate and must survive edits:
- ₹50 Cr+ is *combined revenue of businesses worked with*, not Tisvia's own.
- Ad spend is *"up to ₹10 crore managed"*.
- The 30-day post-programme support is *proposed*, not promised.
- The certificate is conditional on assignments and assessment.

## Still needed before this is advertised
- Real WhatsApp number and email in `src/data/site.ts` (currently placeholders).
- Programme fee, next batch date and daily timing for the academy page.

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
