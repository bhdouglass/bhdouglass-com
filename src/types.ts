import type { CollectionEntry } from "astro:content";

// For some reason the dates get passed into the markdown layout as strings...
export type Frontmatter = Omit<CollectionEntry<'blog'>['data'], 'date' | 'updatedDate'> & {
  date: string;
  updatedDate: string;
};
