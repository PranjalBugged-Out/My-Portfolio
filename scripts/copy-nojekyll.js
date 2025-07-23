// Script to ensure .nojekyll file is copied to the output directory
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), 'out');

// Create .nojekyll file in the out directory
function createNoJekyllFile() {
  const noJekyllPath = path.join(OUT_DIR, '.nojekyll');
  
  // Ensure the out directory exists
  if (!fs.existsSync(OUT_DIR)) {
    console.log('Creating out directory...');
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // Create empty .nojekyll file
  try {
    fs.writeFileSync(noJekyllPath, '');
    console.log('✅ .nojekyll file created successfully in the out directory');
  } catch (error) {
    console.error('❌ Error creating .nojekyll file:', error);
  }

  // Also create index.html in the out directory if it doesn't exist
  const indexPath = path.join(OUT_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    try {
      const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0;url=/My-Portfolio/" />
    <title>Redirecting to My Portfolio</title>
</head>
<body>
    <p>Redirecting to the portfolio... If you are not redirected automatically, <a href="/My-Portfolio/">click here</a>.</p>
</body>
</html>`;
      fs.writeFileSync(indexPath, indexContent);
      console.log('✅ index.html file created successfully in the out directory');
    } catch (error) {
      console.error('❌ Error creating index.html file:', error);
    }
  }
}

createNoJekyllFile();