import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    updatedDate: z.string().optional(),
    categories: z.string(), // TODO make this an array
    image: z.string(),
    imageAlt: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
