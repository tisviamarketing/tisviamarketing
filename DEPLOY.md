# Deploy notes

Two static sites, one repo. Each one is its own Vercel project.

| Folder     | Domain                     | What it is                      |
|------------|----------------------------|---------------------------------|
| `site/`    | tisviamarketing.in         | One-page hero. Meta ads agency. |
| `academy/` | academy.tisviamarketing.in | Main site. Placeholder for now. |

Plain HTML + CSS. No build step. No dependencies.

## Vercel settings (per project)
- Framework Preset: **Other**
- Root Directory: `site` or `academy`
- Build Command: *(leave empty)*
- Output Directory: *(leave empty)*
- Install Command: *(leave empty)*

Both projects deploy from the `main` branch of this repo.

## DNS (GoDaddy)
Vercel shows the exact records to add under Project → Settings → Domains.
Copy the values it shows — do not reuse old values from notes.
