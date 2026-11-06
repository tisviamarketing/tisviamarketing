// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tisviamarketing.in',
  build: { format: 'directory' },
  compressHTML: true,
  devToolbar: { enabled: false },
});
