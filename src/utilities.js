export function titleCase(str) {
  return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export function tagTitleCase(tag) {
  return titleCase(tag.replace(/-/g, ' '));
};

export function categoriesToTags(categories) {
  return (categories ?? '').trim().split(' ').map((category) => category.trim());
}

export function sortPosts(posts) {
  if (process.env.NODE_ENV !== 'development') {
    posts = posts.filter((post) => !post.frontmatter.draft);
  }

  posts.sort((a, b) => (new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()))
  return posts;
}
