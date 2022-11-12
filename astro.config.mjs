import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://bhdouglass.com',
  server: {
    host: true
  },
  markdown: {
    syntaxHighlight: 'prism'
  },
  integrations: [sitemap(), vue()],
  markdown: {
    remarkPlugins: [remarkToc],
    extendDefaultPlugins: true
  }
});