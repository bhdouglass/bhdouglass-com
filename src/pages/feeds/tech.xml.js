import rss from '@astrojs/rss';
import { sortPosts } from '../../utilities';
import { TECH_BLOG } from '../../constants';

const postImportResult = import.meta.glob('../blog/tech/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: `${TECH_BLOG.title} by Brian Douglass`,
  description: TECH_BLOG.tagline,
  site: import.meta.env.SITE,
  items: sortPosts(posts).map(item => {
    let description = item.compiledContent().replace(/<[^>]*>/g, '');
    const space = description.substring(0, 200).lastIndexOf(' ');
    description = `${description.substring(0, space)}...`;

    return {
      title: item.frontmatter.title,
      description,
      link: item.url + '?utm_source=rss',
      pubDate: item.frontmatter.date,
    };
  }),
});
