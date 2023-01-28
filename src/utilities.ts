import { format } from "date-fns";
import type { CollectionEntry } from 'astro:content';

export function titleCase(str: string) {
  return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export function tagTitleCase(tag: string) {
  return titleCase(tag.replace(/-/g, ' '));
};

export function categoriesToTags(categories?: string) {
  return (categories ?? '').trim().split(' ').map((category) => category.trim());
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

export function getBlogDate(date: string, updatedDate?: string) {
  let blogData = date;
  if (updatedDate === 'now') {
    date = format(new Date(), 'yyyy-MM-dd HH:mm:ss xx');
  }
  else if (updatedDate) {
    date = updatedDate;
  }

  return date;
}
