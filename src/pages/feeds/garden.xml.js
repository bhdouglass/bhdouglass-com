import rss from '@astrojs/rss';
import { sortPosts } from '../../utilities';

const postImportResult = import.meta.glob('../blog/garden/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: 'The Chef, the Family and the Garden by Brian Douglass',
  description: 'Recipes, gardening, and family related short posts',
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
