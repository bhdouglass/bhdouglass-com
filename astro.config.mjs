import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';
import taxonomyDb from './.frontmatter/database/taxonomyDb.json';
import pagefind from 'astro-pagefind';
import tailwindcss from "@tailwindcss/vite";
import og from 'astro-og';
import remarkAutoImports from './scripts/remark-auto-imports.mjs';

const SITE = 'https://bhdouglass.com/';
const categoryPages = taxonomyDb.taxonomy.categories.map((category) => `${SITE}blog/${category}/`);

export default defineConfig({
  site: SITE,
  server: { host: true },
  prefetch: true,
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkAutoImports, remarkToc],
  },
  integrations: [vue(), mdx(), sitemap({
    customPages: ["https://bhdouglass.com/resume/"],
    filter: (page) => !categoryPages.includes(page),
  }), robotsTxt({ sitemapBaseFileName: "sitemap" }), pagefind(), og()],
  vite: {
    plugins: [tailwindcss()],
  },
});