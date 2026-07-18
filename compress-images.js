const fs = require('fs');
const path = require('path');

// Dynamic require for sharp
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Installing sharp...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
    sharp = require('sharp');
  } catch (err) {
    console.error('Failed to install sharp:', err.message);
    process.exit(1);
  }
}

const imagesDir = path.join(__dirname, 'public', 'images', 'leadership');
const images = ['lawrence.png', 'osazee.jpeg', 'fredrick.jpeg', 'kenneth.jpeg', 'uwa.jpeg'];

async function compressImages() {
  for (const image of images) {
    const inputPath = path.join(imagesDir, image);
    const outputPath = inputPath;
    
    try {
      const stats = fs.statSync(inputPath);
      const sizeBefore = stats.size / 1024;
      
      console.log(`Compressing ${image} (${sizeBefore.toFixed(0)}KB)...`);
      
      await sharp(inputPath)
        .resize(300, 300, { fit: 'cover', position: 'center' })
        .quality(80)
        .toFile(outputPath + '.tmp');
      
      const statsAfter = fs.statSync(outputPath + '.tmp');
      const sizeAfter = statsAfter.size / 1024;
      
      fs.renameSync(outputPath + '.tmp', outputPath);
      
      console.log(`  ✓ Compressed to ${sizeAfter.toFixed(0)}KB (${((1 - sizeAfter/sizeBefore) * 100).toFixed(0)}% reduction)`);
    } catch (error) {
      console.error(`  ✗ Failed to compress ${image}:`, error.message);
    }
  }
  
  console.log('\nImage compression complete!');
}

compressImages().catch(console.error);
