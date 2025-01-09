import { exec } from 'child_process';

const command = 'npx markdownlint "**/*.md"';
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
