import chalk from 'chalk';
import { format } from 'date-fns';
import fs from 'fs/promises';
import path from 'path';

const filePath = process.argv[2];
if (!filePath) {
  console.error(chalk.red('No path specified'));
  process.exit(1);
}

const data = await fs.readFile(filePath, { encoding: 'utf-8' });

const content = data.split('\n').map((line) => {
  if (line.startsWith('date:')) {
    return `date: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss xx')}`;
  }

  return line;
}).filter((line) => line.trim() !== 'draft: true');

await fs.writeFile(filePath, content.join('\n'));
console.log(chalk.green(`Publishing draft to ${filePath}`));
