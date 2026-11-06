# Deploy notes

**One** Vercel project serves both sites from the `main` branch of this repo.

| URL                        | Serves       |
|----------------------------|--------------|
| tisviamarketing.in         | `main/`      |
| academy.tisviamarketing.in | `academy/`   |

Plain HTML + CSS. No build step. No dependencies.

## Vercel project settings
- Framework Preset: **Other**
- Root Directory: **empty** (the repo root)
- Build Command / Output Directory / Install Command: *(all empty)*

Leave **Root Directory empty**. `vercel.json` has to sit beside the folders
it routes, at whatever Vercel treats as the project root. If that setting is
ever pointed at a subfolder, everything has to move into it as well.

Both domains are attached to this same project under **Settings → Domains**.

## How the split works
Neither site sits at the repo root, and that is deliberate. Vercel matches
real files **before** it applies rewrites, so an `index.html` at the root
would be served for `/` on every host and the routing below would never run.

With both sites in folders, `/` matches nothing and `vercel.json` decides:
a request whose **Host** is `academy.tisviamarketing.in` is rewritten into
`academy/`, and everything else falls through to `main/`.

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
