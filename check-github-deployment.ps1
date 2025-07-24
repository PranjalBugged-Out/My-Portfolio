# PowerShell script to check GitHub Actions workflow status

Write-Host "Checking GitHub Actions workflow status for deployment..." -ForegroundColor Cyan
Write-Host ""

$repoUrl = "https://github.com/PranjalBugged-Out/My-Portfolio/actions"
Write-Host "Your GitHub Actions workflows are running at:" -ForegroundColor Yellow
Write-Host "$repoUrl" -ForegroundColor White
Write-Host ""

Write-Host "Once the workflow completes successfully, your site will be available at:" -ForegroundColor Green
Write-Host "https://pranjalbugged-out.github.io/My-Portfolio/" -ForegroundColor White
Write-Host ""

Write-Host "Deployment Tips:" -ForegroundColor Magenta
Write-Host "1. The deployment may take a few minutes to complete" -ForegroundColor White
Write-Host "2. You can monitor the progress on the Actions tab of your repository" -ForegroundColor White
Write-Host "3. If you encounter any issues, check the workflow logs for details" -ForegroundColor White
Write-Host "4. Make sure GitHub Pages is enabled in your repository settings" -ForegroundColor White
Write-Host ""

Write-Host "For detailed setup instructions, refer to:" -ForegroundColor Cyan
Write-Host "GITHUB_PAGES_SETUP.md" -ForegroundColor White