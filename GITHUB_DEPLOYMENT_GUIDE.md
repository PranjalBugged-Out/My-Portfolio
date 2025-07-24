# GitHub Pages Deployment Guide

## Automatic Deployment (GitHub Actions)

This repository is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow.

### How It Works

1. The workflow is defined in `.github/workflows/deploy.yml`
2. When you push changes to the `main` branch, the workflow automatically:
   - Checks out your code
   - Sets up Node.js
   - Installs dependencies
   - Builds the project
   - Ensures the `.nojekyll` file exists
   - Deploys to GitHub Pages

### Monitoring Deployment

1. Go to the **Actions** tab in your repository: https://github.com/PranjalBugged-Out/My-Portfolio/actions
2. You should see the workflow running (or completed)
3. Once completed successfully, your site will be available at: https://pranjalbugged-out.github.io/My-Portfolio/

## Manual Deployment (If Needed)

If you need to deploy manually, you can follow these steps:

```bash
# Install dependencies if not already installed
npm install

# Build the project
npm run build

# Ensure .nojekyll file exists
touch ./out/.nojekyll

# Deploy using gh-pages package (if installed)
npm run deploy
```

## Configuration

The Next.js configuration in `next.config.mjs` includes settings for GitHub Pages deployment:

```javascript
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // basePath is commented out for Netlify deployment but can be uncommented for GitHub Pages
  // basePath: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
  images: {
    unoptimized: true
  },
};
```

For GitHub Pages deployment, you may need to uncomment the `basePath` line if you encounter path-related issues.

## Troubleshooting

If you encounter issues with the deployment:

1. **404 Errors**: Ensure the `.nojekyll` file exists in both the root directory and the `/public` directory
2. **Missing Assets**: Check that the `basePath` is correctly set in `next.config.mjs`
3. **Failed Builds**: Review the workflow logs in the Actions tab for specific errors
4. **GitHub Pages Settings**: Verify that GitHub Pages is enabled in your repository settings

## Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)