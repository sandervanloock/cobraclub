#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Convert images to WebP format with optimization
 * This script converts all JPEG images to WebP format for better performance
 */

const assetsDir = path.join(__dirname, '../src/assets/images');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

/**
 * Recursively get all image files in a directory
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Convert a single image to WebP
 */
async function convertToWebP(imagePath) {
  const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Skip if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${path.basename(imagePath)} (WebP already exists)`);
    return;
  }

  try {
    await sharp(imagePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const originalSize = fs.statSync(imagePath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Converted ${path.basename(imagePath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB → WebP: ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(imagePath)}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image conversion to WebP...\n');

  if (!fs.existsSync(assetsDir)) {
    console.error(`❌ Assets directory not found: ${assetsDir}`);
    process.exit(1);
  }

  const imageFiles = getImageFiles(assetsDir);
  console.log(`Found ${imageFiles.length} images to convert\n`);

  for (const imagePath of imageFiles) {
    await convertToWebP(imagePath);
  }

  console.log('\n✨ Image conversion complete!');
}

// Run the script
main().catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
