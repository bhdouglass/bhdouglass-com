import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import chalk from 'chalk';

const postPath = process.argv[2];
if (!postPath) {
  console.error(chalk.red('No path specified'));
  process.exit(1);
}
const postSlug = path.basename(postPath).replace('.mdx', '').replace('.md', '');

const directoryPath = './src/content/blog';
const files = await fs.readdir(directoryPath);
const markdownFiles = files.filter((file) => path.extname(file) === '.md' || path.extname(file) === '.mdx');

const frontmatterList = [];
for (const file of markdownFiles) {
  const slug = file.replace('.mdx', '').replace('.md', '');
  if (slug === postSlug) {
    continue;
  }

  const filePath = path.join(directoryPath, file);
  const data = await fs.readFile(filePath, 'utf8');

  const { data: frontmatter } = matter(data);
  frontmatterList.push({
    ...frontmatter,
    slug,
  });
}

// Sort the most recent posts to the top of the list
frontmatterList.sort((a, b) => {
  if (a.date > b.date) {
    return -1;
  }
  else if (a.date < b.date) {
    return 1;
  }

  return 0;
});

const categoryMap = new Map();
for (const frontmatter of frontmatterList) {
  const categories = frontmatter.categories ?? [];
  for (const category of categories) {
    const slugs = categoryMap.get(category) ?? [];
    slugs.push(frontmatter.slug);
    categoryMap.set(category, slugs);
  }
}

const postData = await fs.readFile(postPath, 'utf8');
const { data: postFrontmatter } = matter(postData);

const categories = postFrontmatter.categories ?? [];
const related = new Set();
for (const category of categories) {
  const slugs = categoryMap.get(category) ?? [];
  for (const slug of slugs) {
    related.add(slug);
  }
}

console.log('relatedPosts:');
for (const slug of related) {
    console.log(`  - ${slug}`);
}
