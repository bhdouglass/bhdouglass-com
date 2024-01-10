import rss from '@astrojs/rss';
import { sortPosts, getRssLink } from '../../utilities';
import { BLOG } from '../../constants';
import { type CollectionEntry, getCollection } from 'astro:content';

const blogEntries = await getCollection('blog', (post): post is CollectionEntry<"blog"> => !post.data.draft);
const posts = sortPosts(blogEntries);

export function GET() {
  return rss({
    title: `${BLOG.title} by Brian Douglass`,
    description: BLOG.tagline,
    site: import.meta.env.SITE,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/', // Needed to use the <media:content> tag
    },
    items: sortPosts(posts).map(post => {
      return {
        title: post.data.title,
        description: post.data.description,
        // Create a full url, otherwise the utm params will have a / appended to them by @astrojs/rss
        link: getRssLink(`/blog/${post.slug}`, import.meta.env.SITE),
        pubDate: post.data.date,
        customData: post.data.image ? `<media:content url="${new URL(post.data.image, import.meta.env.SITE).href}" medium="image" />` : '',
      };
    }),
  });
};
