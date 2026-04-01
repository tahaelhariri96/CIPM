const sharp = require('sharp');
const fs = require('fs');

async function run() {
  const buf = await sharp('src/assets/Group in7.svg')
    .webp({ quality: 85 })
    .toBuffer();
  fs.writeFileSync('src/assets/Group in7.webp', buf);
  const orig = fs.statSync('src/assets/Group in7.svg').size;
  console.log('Original:', Math.round(orig/1024) + 'KB');
  console.log('WebP:', Math.round(buf.length/1024) + 'KB');
  console.log('Saved:', Math.round((1 - buf.length/orig)*100) + '%');
}
run().catch(console.error);
