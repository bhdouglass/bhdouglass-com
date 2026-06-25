import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';
import taxonomyDb from './.frontmatter/database/taxonomyDb.json';
import pagefind from 'astro-pagefind';
import tailwindcss from "@tailwindcss/vite";
import og from 'astro-og';
import { satteri } from '@astrojs/markdown-satteri';
import satteriAutoImports from './plugins/satteri-auto-imports.mjs';
import satteriToc from './plugins/satteri-toc.mjs';

const autoImportComponents = [
  { name: 'RandomSupport', from: '../../components/support/RandomSupport.astro' },
  { name: 'DigitalOceanAffiliate', from: '../../components/support/DigitalOceanAffiliate.astro' },
  { name: 'Donate', from: '../../components/support/Donate.astro' },
  { name: 'FastmailReferral', from: '../../components/support/FastmailReferral.astro' },
  { name: 'NamecheapAffiliate', from: '../../components/support/NamecheapAffiliate.astro' },
  { name: 'Ad', from: '../../components/support/Ad.astro' },
  { name: 'Image', from: '../../components/Image.astro' },
  { name: 'ImageAttrib', from: '../../components/ImageAttrib.astro' },
  { name: 'NewsletterForm', from: '../../components/NewsletterForm.astro' },
  { name: 'InfoBlock', from: '../../components/InfoBlock.astro' },
];

const SITE = 'https://bhdouglass.com/';
const categoryPages = taxonomyDb.taxonomy.categories.map((category) => `${SITE}blog/${category}/`);

export default defineConfig({
  site: SITE,
  server: { host: true },
  prefetch: true,
  markdown: {
    syntaxHighlight: "prism",
    processor: satteri({
      mdastPlugins: [satteriAutoImports(autoImportComponents), satteriToc()],
    }),
  },
  integrations: [vue(), mdx(), sitemap({
    customPages: ["https://bhdouglass.com/resume/"],
    filter: (page) => !categoryPages.includes(page),
  }), robotsTxt({ sitemapBaseFileName: "sitemap" }), pagefind(), og()],
  vite: {
    plugins: [tailwindcss()],
  },
});