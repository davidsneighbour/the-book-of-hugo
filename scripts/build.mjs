import fs from 'fs';
import path from 'path';

const chaptersDir = './chapters';
const outputFile = './hugo-book.md';

fs.readdir(chaptersDir, (err, files) => {
  if (err) {
    console.error('Failed to read chapters directory:', err);
    process.exit(1);
  }

  const sortedFiles = files.sort();
  const content = sortedFiles
    .map((file) => fs.readFileSync(path.join(chaptersDir, file), 'utf8'))
    .join('\n\n');

  fs.writeFileSync(outputFile, content, 'utf8');
  console.log(`Book compiled successfully to ${outputFile}`);
});
