import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  path.join(__dirname, 'src/assets/App'),
  path.join(__dirname, 'src/assets/Clan'),
  path.join(__dirname, 'src/assets/Art'),
  path.join(__dirname, 'src/assets/Architecture'),
  path.join(__dirname, 'src/assets/Beliefs'),
  path.join(__dirname, 'src/assets/Books'),
  path.join(__dirname, 'src/assets/Dress'),
  path.join(__dirname, 'src/assets/Falklore'),
  path.join(__dirname, 'src/assets/Food'),
  path.join(__dirname, 'src/assets/Health'),
  path.join(__dirname, 'src/assets/Instruments'),
  path.join(__dirname, 'src/assets/Jewellery'),
  path.join(__dirname, 'src/assets/Languages'),
  path.join(__dirname, 'src/assets/Music'),
  path.join(__dirname, 'src/assets/Regalia'),
  path.join(__dirname, 'src/assets/Site'),
  path.join(__dirname, 'src/assets/Souvenirs'),
  path.join(__dirname, 'src/assets/Utensils'),
  path.join(__dirname, 'src/assets'),
];

const imageFileTypes = /\.(jpg|jpeg|png|bmp)$/i;

async function checkAndConvertMissingImagesToWebp(directories) {
  const missingWebpImages = [];

  for (const directory of directories) {
    if (!(await fs.pathExists(directory))) {
      console.log(`Directory ${directory} does not exist, skipping...`);
      continue;
    }

    const files = await fs.readdir(directory);

    for (const file of files) {
      if (file.match(imageFileTypes)) {
        const webpFilename = `${path.parse(file).name}.webp`;
        const webpFilepath = path.join(directory, webpFilename);

        if (!(await fs.pathExists(webpFilepath))) {
          missingWebpImages.push(webpFilepath);
        }
      }
    }
  }

  if (missingWebpImages.length > 0) {
    await convertMissingImagesToWebp(missingWebpImages);
    console.log(`Converted ${missingWebpImages.length} missing WebP images.`);
  } else {
    console.log('No missing WebP images found.');
  }
}

async function convertMissingImagesToWebp(missingWebpImages) {
  await Promise.all(
    missingWebpImages.map(async (missingWebpImage) => {
      const inputFilepath = missingWebpImage.replace(/\.webp$/, '');
      await sharp(inputFilepath)
        .webp({ quality: 75 })
        .toFile(missingWebpImage);
    })
  );
}

async function main() {
  await checkAndConvertMissingImagesToWebp(directories);
}

main().catch((error) => console.error('Error:', error));

