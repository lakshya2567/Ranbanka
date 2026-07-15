// backend/copyAssets.js
const fs = require("fs");
const path = require("path");

// Source: aapke frontend ka assets folder (backend ke relative)
const sourceDir = path.join(__dirname, "../frontend/src/assets");
// Destination: backend ka uploads folder
const destDir = path.join(__dirname, "uploads");

// Files jo copy karne hain (frontend se active images)
const files = [
  "9.jpeg",
  "11.jpeg",
  "13.jpg",
  "15.jpeg",
  "17.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
  "24.jpeg",
  "25.jpeg",
  "26.jpeg",
];

console.log("📁 Copying images from frontend assets to backend uploads...\n");

// Ensure destination folder exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let copiedCount = 0;
let missingCount = 0;

files.forEach((file) => {
  const src = path.join(sourceDir, file);
  const dest = path.join(destDir, file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied: ${file}`);
    copiedCount++;
  } else {
    console.log(`❌ Not found: ${file}`);
    missingCount++;
  }
});

console.log("\n📊 Summary:");
console.log(`✅ Copied: ${copiedCount} files`);
console.log(`❌ Missing: ${missingCount} files`);