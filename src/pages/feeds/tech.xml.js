import rss from '@astrojs/rss';
import { sortPosts, getRssLink } from '../../utilities';
import { BLOG } from '../../constants';

const postImportResult = import.meta.glob('../blog/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: `${BLOG.title} by Brian Douglass`,
  description: BLOG.tagline,
  site: import.meta.env.SITE,
  items: sortPosts(posts).map(item => {
    let description = item.compiledContent().replace(/<[^>]*>/g, '');
    const space = description.substring(0, 200).lastIndexOf(' ');
    description = `${description.substring(0, space)}...`;

    return {
      title: item.frontmatter.title,
      description,
      // Create a full url, otherwise the utm params will have a / appended to them by @astrojs/rss
      link: getRssLink(item.url, import.meta.env.SITE),
      pubDate: item.frontmatter.date,
    };
  }),
});
