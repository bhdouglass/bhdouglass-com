import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import taxonomyDb from './.frontmatter/database/taxonomyDb.json';

const SITE = 'https://bhdouglass.com/';
const categoryPages = taxonomyDb.taxonomy.categories.map((category) => `${SITE}blog/${category}/`);

// https://astro.build/config
export default defineConfig({
  site: SITE,
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
      filter: (page) => !categoryPages.includes(page),
    }),
    robotsTxt({ sitemapBaseFileName: 'sitemap' }),
  ],
  markdown: {
    remarkPlugins: [remarkToc],
  }
});
