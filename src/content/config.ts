import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().or(z.enum(['now'])).optional(),
    categories: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
