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
3. Updated the GitHub Actions workflow to use the official GitHub Pages deployment action

## 5. Troubleshooting

If you still encounter a 404 error after deployment:

1. Make sure the GitHub Pages feature is enabled in your repository settings
2. Check if the workflow ran successfully in the Actions tab
3. It might take up to 10 minutes for the changes to propagate
4. Try clearing your browser cache
5. Ensure your repository is public (or you have a paid GitHub plan that supports private repository GitHub Pages)

## Note

The first deployment might take a bit longer as GitHub sets up the Pages environment for your repository.