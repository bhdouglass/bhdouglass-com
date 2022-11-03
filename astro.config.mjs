import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';

export default defineConfig({
  site: 'https://bhdouglass.com',
  server: {
    host: true,
  },
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkToc],
    extendDefaultPlugins: true,
  },
});
