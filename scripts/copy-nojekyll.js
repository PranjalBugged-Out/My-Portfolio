// Script to ensure .nojekyll file and other necessary files are copied to the output directory
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

  // Also create 404.html in the out directory
  const notFoundPath = path.join(OUT_DIR, '404.html');
  try {
    const notFoundContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Pranjal's Portfolio</title>
    <meta http-equiv="refresh" content="0;url=/My-Portfolio/" />
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #0f1117;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 20px;
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #a259f7;
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
        }
        a {
            color: #a259f7;
            text-decoration: none;
            border: 2px solid #a259f7;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        a:hover {
            background-color: #a259f7;
            color: #0f1117;
        }
    </style>
    <script>
        // Redirect to the correct path
        window.onload = function() {
            // Get the base path from the current URL
            const basePath = window.location.pathname.split('/').slice(0, 2).join('/');
            // Redirect to the base path
            window.location.href = basePath || '/My-Portfolio/';
        }
    </script>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <a href="/My-Portfolio/">Return to Homepage</a>
</body>
</html>`;
    fs.writeFileSync(notFoundPath, notFoundContent);
    console.log('✅ 404.html file created successfully in the out directory');
  } catch (error) {
    console.error('❌ Error creating 404.html file:', error);
  }
}

// Create CNAME file in the out directory
function createCNAMEFile() {
  const cnamePath = path.join(OUT_DIR, 'CNAME');
  try {
    fs.writeFileSync(cnamePath, 'pranjalbugged-out.github.io/My-Portfolio');
    console.log('✅ CNAME file created successfully in the out directory');
  } catch (error) {
    console.error('❌ Error creating CNAME file:', error);
  }
}

createNoJekyllFile();
createCNAMEFile();