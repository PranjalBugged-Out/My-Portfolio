# Setting up GitHub Pages for Your Portfolio

To complete the deployment of your portfolio to GitHub Pages, you need to enable GitHub Pages in your repository settings. Follow these steps:

## 1. Go to your repository on GitHub

Visit: https://github.com/PranjalBugged-Out/My-Portfolio

## 2. Enable GitHub Pages

1. Click on **Settings** in the top navigation bar of your repository
2. In the left sidebar, click on **Pages**
3. Under **Build and deployment** section:
   - For **Source**, select **GitHub Actions**
   - You should see your recently pushed workflow already listed

## 3. Wait for the deployment

1. Go to the **Actions** tab in your repository
2. You should see the workflow running (or completed)
3. Once completed successfully, your site will be available at: https://pranjalbugged-out.github.io/My-Portfolio/

## 4. Recent Fixes Applied

The following fixes have been applied to resolve the 404 error:

1. Added a root-level `index.html` file with a redirect to the `/My-Portfolio/` path
2. Added a `.nojekyll` file in the root directory to prevent GitHub Pages from processing the site with Jekyll
3. Updated the GitHub Actions workflow to ensure proper file copying
4. Added an `index.html` file to the `/public` directory to ensure it's included in the build
5. Modified the `copy-nojekyll.js` script to copy the index.html file to the output directory
6. Added a verification script (`check-github-deployment.ps1`) to help troubleshoot deployment issues

## 5. Troubleshooting

If you still encounter a 404 error after deployment:

1. Run the `check-github-deployment.ps1` script to diagnose common issues:
   ```powershell
   ./check-github-deployment.ps1
   ```

2. Make sure the GitHub Pages feature is enabled in your repository settings
3. Check if the workflow ran successfully in the Actions tab
4. It might take up to 10 minutes for the changes to propagate
5. Try clearing your browser cache
6. Ensure your repository is public (or you have a paid GitHub plan that supports private repository GitHub Pages)
7. Check the build logs in the Actions tab for any errors
8. If the build is failing with ESLint errors, you may need to modify the build command in the workflow file
9. Make sure the `.nojekyll` file exists in both the root directory and the `/public` directory
10. Verify that the `index.html` file exists at the root level of the deployed site
11. Check that the `basePath` in `next.config.mjs` matches your repository name (case-sensitive)
12. Ensure the CNAME file has the correct domain if you're using a custom domain

### Common Issues and Solutions

#### 404 Error - Page Not Found
- **Issue**: The main page shows a 404 error
- **Solution**: Ensure index.html exists in the root of your deployed site and contains a proper redirect to your Next.js app

#### Missing Assets
- **Issue**: Images or other assets are not loading
- **Solution**: Check that asset paths use the correct basePath (e.g., `/My-Portfolio/images/logo.png` instead of `/images/logo.png`)

#### Blank Page
- **Issue**: The site loads but shows a blank page
- **Solution**: Check browser console for errors; ensure all JavaScript files are loading correctly

## Note

The first deployment might take a bit longer as GitHub sets up the Pages environment for your repository.