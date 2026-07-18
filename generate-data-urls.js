const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images', 'leadership');
const images = ['lawrence.png', 'osazee.jpeg', 'fredrick.jpeg', 'kenneth.jpeg', 'uwa.jpeg'];

const dataUrls = {};

images.forEach(image => {
  const filePath = path.join(imagesDir, image);
  const buffer = fs.readFileSync(filePath);
  const base64 = buffer.toString('base64');
  const mimeType = image.endsWith('.png') ? 'image/png' : 'image/jpeg';
  dataUrls[image.replace(/\.[^.]+$/, '')] = `data:${mimeType};base64,${base64}`;
});

console.log('Paste this in app/page.tsx:\n');
console.log('const imageDataUrls = {');
Object.entries(dataUrls).forEach(([name, url]) => {
  const displayName = name === 'lawrence' ? 'lawrence' : name;
  console.log(`  ${displayName}: "${url.substring(0, 50)}...",`);
});
console.log('};');

// Save to file
const outputPath = path.join(__dirname, 'image-data-urls.json');
fs.writeFileSync(outputPath, JSON.stringify(dataUrls, null, 2));
console.log(`\nFull data URLs saved to image-data-urls.json`);
