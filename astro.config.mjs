import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';
import taxonomyDb from './.frontmatter/database/taxonomyDb.json';
import m2dx from 'astro-m2dx';
import pagefind from 'astro-pagefind';
import tailwindcss from "@tailwindcss/vite";

import og from 'astro-og';

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  autoImports: true,
  exportComponents: true,
};

const SITE = 'https://bhdouglass.com/';
const categoryPages = taxonomyDb.taxonomy.categories.map((category) => `${SITE}blog/${category}/`);

// https://astro.build/config
export default defineConfig({
  site: SITE,
  server: {
    host: true,
  },
  prefetch: true,
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [vue(), mdx(), sitemap({
    customPages: ["https://bhdouglass.com/resume/"],
    filter: (page) => !categoryPages.includes(page),
  }), robotsTxt({ sitemapBaseFileName: "sitemap" }), pagefind(), og()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions], remarkToc],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});