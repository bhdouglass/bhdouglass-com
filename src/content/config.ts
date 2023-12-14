import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().or(z.enum(['now'])).optional(),
    categories: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
