# Netlify Manual Deployment Script

Write-Host "Starting Netlify manual deployment process..." -ForegroundColor Green

# Check if Netlify CLI is installed
$netlifyInstalled = $null
try {
    $netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue
} catch {}

if (-not $netlifyInstalled) {
    Write-Host "Installing Netlify CLI..." -ForegroundColor Yellow
    npm install -g netlify-cli
}

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "Build complete! To deploy to Netlify, follow these steps:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Login to Netlify (you'll need to authenticate in a browser):" -ForegroundColor Cyan
Write-Host "   netlify login" -ForegroundColor White
Write-Host ""
Write-Host "2. Initialize Netlify site (first time only):" -ForegroundColor Cyan
Write-Host "   netlify init" -ForegroundColor White
Write-Host "   - Choose 'Create & configure a new project'" -ForegroundColor White
Write-Host "   - Follow the prompts to set up your new site" -ForegroundColor White
Write-Host ""
Write-Host "3. Deploy to Netlify:" -ForegroundColor Cyan
Write-Host "   netlify deploy --prod" -ForegroundColor White
Write-Host ""
Write-Host "For more detailed instructions, see the NETLIFY_DEPLOYMENT.md file." -ForegroundColor Yellow