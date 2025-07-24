# Script to check GitHub Pages deployment

# Get the GitHub username from the CNAME file or package.json
$cnamePath = "./out/CNAME"
$username = ""

if (Test-Path $cnamePath) {
    $cname = Get-Content $cnamePath -Raw
    if ($cname -match "([\w-]+)\.github\.io") {
        $username = $matches[1]
    }
}

if (-not $username) {
    Write-Host "Trying to find GitHub username from package.json..."
    $packageJson = Get-Content "./package.json" -Raw | ConvertFrom-Json
    if ($packageJson.repository -and $packageJson.repository.url -match "github\.com[/:]([\w-]+)/") {
        $username = $matches[1]
    }
}

if (-not $username) {
    $username = Read-Host "Could not determine GitHub username. Please enter your GitHub username"
}

# Check if the repository exists
$repoName = "My-Portfolio"
$githubPagesUrl = "https://$username.github.io/$repoName/"
$rootUrl = "https://$username.github.io/"

Write-Host "\nChecking GitHub Pages deployment...\n"
Write-Host "GitHub Pages URL: $githubPagesUrl"
Write-Host "Root URL: $rootUrl\n"

# Function to check URL
function Test-Url {
    param (
        [string]$Url
    )
    
    try {
        $response = Invoke-WebRequest -Uri $Url -Method Head -UseBasicParsing -ErrorAction SilentlyContinue
        return $response.StatusCode -eq 200
    } catch {
        return $false
    }
}

# Check if the GitHub Pages site is accessible
$rootAccessible = Test-Url -Url $rootUrl
$repoAccessible = Test-Url -Url $githubPagesUrl

if ($rootAccessible) {
    Write-Host "✅ Root GitHub Pages site is accessible at: $rootUrl"
} else {
    Write-Host "❌ Root GitHub Pages site is NOT accessible at: $rootUrl"
    Write-Host "   This might be normal if you're using a custom domain or if GitHub Pages is not enabled."
}

if ($repoAccessible) {
    Write-Host "✅ Portfolio is accessible at: $githubPagesUrl"
} else {
    Write-Host "❌ Portfolio is NOT accessible at: $githubPagesUrl"
    Write-Host "   Possible reasons:"
    Write-Host "   - GitHub Pages is not enabled for this repository"
    Write-Host "   - The repository name doesn't match 'My-Portfolio'"
    Write-Host "   - The deployment is still in progress"
    Write-Host "   - There might be an issue with the deployment workflow"
}

Write-Host "\nDeployment Troubleshooting Tips:"
Write-Host "1. Make sure GitHub Pages is enabled in your repository settings"
Write-Host "2. Check that the repository name matches the basePath in next.config.mjs"
Write-Host "3. Verify that the GitHub Actions workflow ran successfully"
Write-Host "4. Check that index.html exists in both the root and /out directories"
Write-Host "5. Wait a few minutes for GitHub Pages to update"

Write-Host "\nWould you like to open the GitHub Pages URL in your browser? (y/n)"
$openBrowser = Read-Host

if ($openBrowser -eq "y") {
    Start-Process $githubPagesUrl
}