import { MarkdownInstance } from "astro";
import { Frontmatter } from "./types";
import { format } from "date-fns";

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

export function sortPosts(posts: MarkdownInstance<Frontmatter>[]) {
  if (process.env.NODE_ENV !== 'development') {
    posts = posts.filter((post) => !post.frontmatter.draft);
  }

  posts.sort((a, b) => (new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()))
  return posts;
}

export function getRssLink(url: string, base: string) {
  const rssUrl = new URL(`${url}/`, base);
  rssUrl.searchParams.append('utm_source', 'rss');
  rssUrl.searchParams.append('utm_medium', 'rss');
  return rssUrl.href;
}

export function getBlogDate(frontmatter: Frontmatter) {
  let date = frontmatter.date;
  if (frontmatter.updatedDate === 'now') {
    date = format(new Date(), 'yyyy-MM-dd HH:mm:ss xx');
  }
  else if (frontmatter.updatedDate) {
    date = frontmatter.updatedDate;
  }

  return date;
}
