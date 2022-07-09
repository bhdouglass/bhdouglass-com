import inquirer from 'inquirer';
import chalk from 'chalk';
import { format } from 'date-fns';
import fs from 'fs/promises';

const blogs = (await fs.readdir('src/pages/blog/')).filter((name) => !name.endsWith('.astro'));

const answers = await inquirer.prompt([
  { type: 'list', name: 'blog', message: 'Which Blog?', choices: blogs },
  { type: 'input', name: 'title', message: 'What is the post\'s title?' },
  { type: 'input', name: 'categories', message: 'What categories?' },
]);

const content = `---
layout: ../../../layouts/${answers.blog[0].toUpperCase()}${answers.blog.substring(1)}PostLayout.astro
title: "${answers.title}"
date: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss xx')}
categories: ${answers.categories}
draft: true
---
`;

const fileTitle = answers.title.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[:.!?]/g, '');
const path = `src/pages/blog/${answers.blog}/${format(new Date(), 'yyyy-MM-dd')}-${fileTitle}.md`;

await fs.writeFile(path, content);

console.log(chalk.green(`New post created at: ${path}`));
