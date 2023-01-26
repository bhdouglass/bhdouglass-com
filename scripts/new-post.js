import inquirer from 'inquirer';
import chalk from 'chalk';
import { format } from 'date-fns';
import fs from 'fs/promises';

const answers = await inquirer.prompt([
  { type: 'input', name: 'title', message: 'What is the post\'s title?' },
  { type: 'input', name: 'categories', message: 'What categories?' },
]);

const content = `---
layout: ../../layouts/BlogPostLayout.astro
title: "${answers.title}"
date: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss xx')}
categories: ${answers.categories}
draft: true
---
`;

const fileTitle = answers.title.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[:.!?]/g, '');
const path = `src/pages/blog/${fileTitle}.md`;

await fs.writeFile(path, content);

console.log(chalk.green(`New post created at: ${path}`));
