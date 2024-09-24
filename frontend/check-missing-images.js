import { exec } from 'child_process';

exec('node ../convert-images.js', (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(stdout);
});

