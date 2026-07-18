const fs = require('fs');

// Read the data URLs
const imageData = require('./image-data-urls.json');

// Read the current app/page.tsx
const pageFile = fs.readFileSync('./app/page.tsx', 'utf8');

// Create the new executives array with embedded data URLs
const newExecutives = `  const executives = [
    { 
      name: "Lawrence Odigie", 
      title: "President",
      bgGradient: "from-amber-600 to-amber-800",
      imageUrl: "${imageData.lawrence}"
    },
    { 
      name: "Osazee Idehen", 
      title: "Vice President",
      bgGradient: "from-orange-600 to-orange-800",
      imageUrl: "${imageData.osazee}"
    },
    { 
      name: "Fredrick Ohai", 
      title: "General Secretary",
      bgGradient: "from-yellow-600 to-yellow-800",
      imageUrl: "${imageData.fredrick}"
    },
    { 
      name: "Kenneth Osemwegie-Ero", 
      title: "Financial Secretary",
      bgGradient: "from-lime-600 to-lime-800",
      imageUrl: "${imageData.kenneth}"
    },
    { 
      name: "Uwa Igunbor", 
      title: "Welfare/Publicity Secretary",
      bgGradient: "from-emerald-600 to-emerald-800",
      imageUrl: "${imageData.uwa}"
    }
  ];`;

// Replace the old executives array
const oldPattern = /const executives = \[[\s\S]*?\];/;
const updatedPage = pageFile.replace(oldPattern, newExecutives);

// Write back to file
fs.writeFileSync('./app/page.tsx', updatedPage, 'utf8');

console.log('✅ Successfully embedded all 5 profile images as base64 data URLs');
console.log('📝 Updated app/page.tsx with embedded image data');
