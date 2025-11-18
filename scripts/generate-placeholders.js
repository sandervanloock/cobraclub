#!/usr/bin/env node

/**
 * Generate tiny placeholder images for progressive loading
 * Creates 20px wide blurred versions for instant display
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../src/assets/images/2025');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/2025/placeholders');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, {recursive: true});
}

async function generatePlaceholder(inputFile) {
  const fileName = path.basename(inputFile);
  const baseName = path.parse(fileName).name;
  const outputFile = path.join(OUTPUT_DIR, `${baseName}.jpg`);

  try {
    await sharp(inputFile)
      .resize(20, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .blur(0.5)
      .jpeg({
        quality: 30,
        progressive: true,
        optimizeScans: true
      })
      .toFile(outputFile);

    const stats = fs.statSync(outputFile);
    console.log(`✓ Generated ${fileName} placeholder (${Math.round(stats.size / 1024)}KB → ${stats.size} bytes)`);
  } catch (error) {
    console.error(`✗ Error generating placeholder for ${fileName}:`, error.message);
  }
}

async function generateCoverPlaceholder() {
  const inputFile = path.join(__dirname, '../src/assets/images/cover.jpg');
  const outputFile = path.join(__dirname, '../src/assets/images/cover-placeholder.jpg');

  try {
    await sharp(inputFile)
      .resize(40, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .blur(1)
      .jpeg({
        quality: 20,
        progressive: true
      })
      .toFile(outputFile);

    const stats = fs.statSync(outputFile);
    console.log(`✓ Generated cover placeholder (${stats.size} bytes)`);
  } catch (error) {
    console.error(`✗ Error generating cover placeholder:`, error.message);
  }
}

async function main() {
  console.log('Generating tiny placeholder images...\n');

  // Generate cover placeholder
  await generateCoverPlaceholder();

  // Generate calendar image placeholders
  const files = fs.readdirSync(INPUT_DIR)
    .filter(file => file.match(/^\d+\.jpg$/))
    .sort((a, b) => {
      const numA = parseInt(path.parse(a).name);
      const numB = parseInt(path.parse(b).name);
      return numA - numB;
    });

  for (const file of files) {
    await generatePlaceholder(path.join(INPUT_DIR, file));
  }

  console.log('\n✅ All placeholders generated!');
  console.log(`\nPlaceholders saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);
