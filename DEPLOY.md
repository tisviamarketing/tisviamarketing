# Deploy notes

**One** Vercel project serves both sites from the `main` branch of this repo.

| URL                        | Serves       |
|----------------------------|--------------|
| tisviamarketing.in         | `index.html` |
| academy.tisviamarketing.in | `academy/`   |

Plain HTML + CSS. No build step. No dependencies.

## Vercel project settings
- Framework Preset: **Other**
- Root Directory: **empty** (the repo root)
- Build Command / Output Directory / Install Command: *(all empty)*

Leave **Root Directory empty**. Every file the site needs sits at the repo
root — `index.html`, `academy/` and `vercel.json`. If that setting is ever
pointed at a subfolder, the files have to move into it as well, `vercel.json`
included, or every URL 404s.

Both domains are attached to this same project under **Settings → Domains**.

## How the split works
`vercel.json` rewrites every request whose **Host** is
`academy.tisviamarketing.in` into the `academy` folder. Every other host
falls through to `index.html`, so the apex domain gets the landing page.

If the academy subdomain ever changes, update the `has.value` host in
`vercel.json` — it is an exact string match.

## DNS (GoDaddy)
Current live records:

| Type  | Name      | Value                                   |
|-------|-----------|-----------------------------------------|
| A     | `@`       | `216.198.79.1`                          |
| CNAME | `academy` | `a28cf879de88f953.vercel-dns-017.com`   |

GoDaddy **Domain Forwarding** must stay off. While it is on it adds its own
`A` records at `@` that fight Vercel's and cannot be deleted.
