import inquirer from 'inquirer';
import chalk from 'chalk';
import { formatISO } from 'date-fns';
import fs from 'fs/promises';

const answers = await inquirer.prompt([
  { type: 'input', name: 'title', message: 'What is the post\'s title?' },
  { type: 'input', name: 'categories', message: 'What categories?' },
]);

const content = `---
layout: ../../layouts/BlogPostLayout.astro
title: "${answers.title}"
date: ${formatISO(new Date())}
categories:
  - ${answers.categories.split(' ').join('\n  - ')}
image: /images/blog/generic/placeholder.svg
imageAlt: TODO
description: TODO
draft: true
---
`;

const fileTitle = answers.title.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[:.!?]/g, '');
const path = `src/content/blog/${fileTitle}.mdx`;

await fs.writeFile(path, content);

console.log(chalk.green(`New post created at: ${path}`));
