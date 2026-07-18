const imagemin = require('imagemin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminPngquant = require('imagemin-pngquant');

async function compressImages() {
  console.log('Compressing images...');
  
  const files = await imagemin(['public/images/leadership/*.{jpg,png,jpeg}'], {
    destination: 'public/images/leadership',
    plugins: [
      imageminJpegoptim({
        max: 80,
        progressive: true,
      }),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  console.log('Compressed images:');
  files.forEach(file => console.log('  ✓', file));
  console.log('Done!');
}

compressImages().catch(console.error);
