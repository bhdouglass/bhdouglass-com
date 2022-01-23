import inquirer from 'inquirer';
import chalk from 'chalk';
import { format } from 'date-fns';
import fs from 'fs/promises';

// TODO crawl existing files for blog names and categories
const answers = await inquirer.prompt([
  { type: 'list', name: 'blog', message: 'Which Blog?', choices: [ 'tech', 'saga' ] },
  { type: 'input', name: 'title', message: 'What is the post\'s title?' },
]);

const content = `---
layout: ../../../layouts/TechPostLayout.astro
title: "${answers.title}"
date: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss xx')}
categories:
---
`;

const fileTitle = answers.title.toLowerCase()
  .replace(' ', '-')
  .replace(':', '')
  .replace('.', '')
  .replace('!', '');
const path = `src/pages/blog/${answers.blog}/${format(new Date(), 'yyyy-MM-dd')}-${fileTitle}.md`;

await fs.writeFile(path, content);

console.log(chalk.green(`New post created at: ${path}`));
