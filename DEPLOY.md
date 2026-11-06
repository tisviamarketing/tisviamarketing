# Deploy notes

**One** Vercel project serves both sites from the `main` branch of this repo.

| URL                        | Serves            |
|----------------------------|-------------------|
| tisviamarketing.in         | `index.html`      |
| academy.tisviamarketing.in | `academy/`        |

Plain HTML + CSS. No build step. No dependencies.

## Vercel project settings
- Framework Preset: **Other**
- Root Directory: *(leave as the repo root — do not set it)*
- Build Command / Output Directory / Install Command: *(all empty)*

Both domains are added to this same project under **Settings → Domains**.

## How the split works
`vercel.json` rewrites every request whose **Host** is
`academy.tisviamarketing.in` to the `/academy` folder. Every other host
falls through to the repo root, so the apex domain gets the landing page.

If the academy domain ever changes, update the `has.value` host in
`vercel.json` to match — it is an exact string match.

## DNS (GoDaddy)
Vercel shows the exact records under **Settings → Domains**.
Copy the values from that screen; do not reuse values from old notes.

GoDaddy **Domain Forwarding** must be off, or it adds its own `A` records
at `@` that fight Vercel's and cannot be deleted while the service is on.
