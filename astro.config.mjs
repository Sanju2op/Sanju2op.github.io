import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://sanju2op.github.io';

// Sub-projects live as plain static folders copied in by the deploy workflow,
// so the sitemap needs them listed by hand.
const staticPages = ['MusicApp/', 'project_1/', 'project_2/', 'project_3/', 'project_4/'].map((p) => `${site}/${p}`);

export default defineConfig({
  site,
  integrations: [sitemap({ customPages: staticPages })],
});
