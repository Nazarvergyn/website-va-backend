const path = require('path');
const fs = require('fs');

function checkSeedFiles() {
  const seedsDir = __dirname;
  const files = ['news.js', 'menu.js', 'index.js'];
  
  console.log('Checking seed files in directory:', seedsDir);
  
  files.forEach(file => {
    const filePath = path.join(seedsDir, file);
    const exists = fs.existsSync(filePath);
    console.log(`${file}: ${exists ? 'Found' : 'Not found'} at ${filePath}`);
  });
}

module.exports = checkSeedFiles; 