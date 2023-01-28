export type Frontmatter = { // TODO figure out how to get this from the content collection
  title: string;
  date: string;
  updatedDate?: string;
  description?: string;
  categories?: string;
  draft?: boolean;
  image?: string;
  imageAlt?: string;
};
