import { format } from "date-fns";
import type { CollectionEntry } from 'astro:content';

export function titleCase(str: string) {
  return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

export function tagTitleCase(tag: string) {
  return titleCase(tag.replace(/-/g, ' '));
};

export function categoriesToTags(categories?: string[]) {
  return categories?.map((category) => category.trim()) ?? [];
}

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  if (process.env.NODE_ENV !== 'development') {
    posts = posts.filter((post) => !post.data.draft);
  }

  posts.sort((a, b) => (new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()))
  return posts;
}

export function getRssLink(url: string, base: string) {
  const rssUrl = new URL(`${url}/`, base);
  rssUrl.searchParams.append('utm_source', 'rss');
  rssUrl.searchParams.append('utm_medium', 'rss');
  return rssUrl.href;
}

export function getBlogDate(date: string | Date, updatedDate?: string | Date) {
  const dateString = date instanceof Date ? format(date, 'yyyy-MM-dd HH:mm:ss xx') : date;
  const updatedDateString = updatedDate instanceof Date ? format(updatedDate, 'yyyy-MM-dd HH:mm:ss xx') : updatedDate

  let blogDate = dateString;
  if (updatedDate === 'now') {
    blogDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss xx');
  }
  else if (updatedDate) {
    blogDate = updatedDateString;
  }

  return blogDate;
}
