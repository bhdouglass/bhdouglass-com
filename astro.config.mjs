import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://bhdouglass.com/',
  server: {
    host: true
  },
  markdown: {
    syntaxHighlight: 'prism'
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    vue(),
    mdx(),
    sitemap({
       // TODO filter out noindex pages
      customPages: ['https://bhdouglass.com/resume/'],
    }),
    robotsTxt({ sitemapBaseFileName: 'sitemap' }),
  ],
  markdown: {
    remarkPlugins: [remarkToc],
  }
});
