import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://bhdouglass.com',
  server: {
    host: true
  },
  markdown: {
    syntaxHighlight: 'prism'
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    vue(),
    sitemap({
      filter: (page) => page !== 'https://bhdouglass.com/projects.html/' && page !== 'https://bhdouglass.com/contact.html/',
    }),
    robotsTxt({ sitemapBaseFileName: 'sitemap' }),
  ],
  markdown: {
    remarkPlugins: [remarkToc],
    extendDefaultPlugins: true
  }
});
