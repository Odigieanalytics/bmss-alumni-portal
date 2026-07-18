const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};

envContent.split('\n').forEach(line => {
  if (line && !line.startsWith('#')) {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      env[key.trim()] = valueParts.join('=').trim();
    }
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Using API key:', supabaseKey.substring(0, 20) + '...');

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(supabaseUrl, supabaseKey);

const imagesDir = path.join(__dirname, 'public', 'images', 'leadership');
const images = [
  'lawrence.png',
  'osazee.jpeg',
  'fredrick.jpeg',
  'kenneth.jpeg',
  'uwa.jpeg'
];

async function uploadImages() {
  console.log('Uploading leadership photos to Supabase Storage...\n');
  
  for (const image of images) {
    const filePath = path.join(imagesDir, image);
    
    try {
      const fileData = fs.readFileSync(filePath);
      const fileName = `leadership/${image}`;
      
      console.log(`Uploading ${image}...`);
      
      const { data, error } = await supabase.storage
        .from('assets')
        .upload(fileName, fileData, {
          upsert: true,
          contentType: image.endsWith('.png') ? 'image/png' : 'image/jpeg'
        });
      
      if (error) {
        throw error;
      }
      
      // Get the public URL
      const { data: publicUrl } = supabase.storage
        .from('assets')
        .getPublicUrl(fileName);
      
      console.log(`  ✓ Uploaded: ${publicUrl.publicUrl}\n`);
    } catch (error) {
      console.error(`  ✗ Failed to upload ${image}:`, error.message);
    }
  }
  
  console.log('Upload complete!');
}

uploadImages().catch(console.error);
