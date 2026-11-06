# Deploy notes

**One** Vercel project serves both sites from the `main` branch of this repo.

| URL                        | Serves                  |
|----------------------------|-------------------------|
| tisviamarketing.in         | `site/index.html`       |
| academy.tisviamarketing.in | `site/academy/`         |

Plain HTML + CSS. No build step. No dependencies.

## Vercel project settings
- Framework Preset: **Other**
- Root Directory: **`site`**
- Build Command / Output Directory / Install Command: *(all empty)*

Everything the site needs lives inside `site/`, including `vercel.json` —
Vercel treats the Root Directory as the project root, so the config must
sit in there, not at the repo root.

Both domains are attached to this same project under **Settings → Domains**.

## How the split works
`site/vercel.json` rewrites every request whose **Host** is
`academy.tisviamarketing.in` into the `academy` folder. Every other host
falls through to `site/index.html`, so the apex domain gets the landing page.

If the academy subdomain ever changes, update the `has.value` host in
`site/vercel.json` — it is an exact string match.

## DNS (GoDaddy)
Current live records:

| Type  | Name      | Value                                   |
|-------|-----------|-----------------------------------------|
| A     | `@`       | `216.198.79.1`                          |
| CNAME | `academy` | `a28cf879de88f953.vercel-dns-017.com`   |

GoDaddy **Domain Forwarding** must stay off. While it is on it adds its own
`A` records at `@` that fight Vercel's and cannot be deleted.
