import chalk from 'chalk';
import { format } from 'date-fns';
import fs from 'fs/promises';
import path from 'path';

const filePath = process.argv[2];
if (!filePath) {
  console.error(chalk.red('No path specified'));
  process.exit(1);
}

const fileName = path.basename(filePath);
const dirPath = path.dirname(filePath);
const data = await fs.readFile(filePath, { encoding: 'utf-8' });

const content = data.split('\n').map((line) => {
  if (line.startsWith('date:')) {
    return `date: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss xx')}`;
  }

  return line;
}).filter((line) => line.trim() !== 'draft: true');

const newName = `${format(new Date(), 'yyyy-MM-dd')}-${fileName.substring(11)}`;
const newPath = path.join(dirPath, newName);

await fs.writeFile(newPath, content.join('\n'));
if (filePath != newPath) {
  await fs.unlink(filePath);
}

console.log(chalk.green(`Publishing draft to ${newPath}`));
