# PowerShell script for setting up Netlify deployment

Write-Host "Setting up Netlify deployment for your Next.js portfolio..." -ForegroundColor Cyan

# Check if Netlify CLI is installed
$netlifyInstalled = $null
try {
    $netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue
} catch {
    # Command not found
}

if ($null -eq $netlifyInstalled) {
    Write-Host "Installing Netlify CLI globally..." -ForegroundColor Yellow
    npm install -g netlify-cli
} else {
    Write-Host "Netlify CLI is already installed." -ForegroundColor Green
}

# Install project dependencies
Write-Host "Installing project dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To deploy to Netlify, follow these steps:" -ForegroundColor Cyan
Write-Host "1. Login to Netlify:" -ForegroundColor White
Write-Host "   netlify login" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Initialize Netlify site (first time only):" -ForegroundColor White
Write-Host "   netlify init" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Deploy to Netlify:" -ForegroundColor White
Write-Host "   netlify deploy --prod" -ForegroundColor Gray
Write-Host ""
Write-Host "For more detailed instructions, see the NETLIFY_DEPLOYMENT.md file." -ForegroundColor Cyan