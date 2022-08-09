import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bhdouglass.com',
  server: {
    host: true,
  },
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [sitemap()],
});
