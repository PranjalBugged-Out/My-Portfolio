# Netlify Deployment Guide

This guide provides step-by-step instructions for deploying your Next.js portfolio to Netlify.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://netlify.com) if you don't have one)
- Git repository with your portfolio code
- Node.js and npm installed on your machine

## Deployment Options

### Option 1: Deploy via Netlify UI (Recommended for beginners)

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Log in to Netlify** and click the "New site from Git" button

3. **Connect to your Git provider** and select your portfolio repository

4. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`

5. **Deploy the site** by clicking the "Deploy site" button

6. **Wait for the build to complete** and your site will be live at a Netlify subdomain (e.g., `your-site-name.netlify.app`)

### Option 2: Deploy via Netlify CLI

1. **Install the Netlify CLI** globally:
   ```bash
   npm install -g netlify-cli
   ```

2. **Log in to your Netlify account**:
   ```bash
   netlify login
   ```

3. **Initialize your site** (first-time only):
   ```bash
   netlify init
   ```
   Follow the prompts to either create a new site or connect to an existing one.

4. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```

## Configuration Files

This repository includes the necessary configuration files for Netlify deployment:

1. **netlify.toml**: Contains build settings and redirects
   ```toml
   [build]
     command = "npm run build"
     publish = "out"

   [[plugins]]
     package = "@netlify/plugin-nextjs"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **next.config.mjs**: Configured for static export
   ```js
   const nextConfig = {
     output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
     // No basePath needed for Netlify
     images: {
       unoptimized: true
     },
   };
   ```

## Custom Domain (Optional)

To use a custom domain with your Netlify site:

1. Go to your site's dashboard in Netlify
2. Navigate to "Site settings" > "Domain management"
3. Click "Add custom domain"
4. Follow the instructions to configure your DNS settings

## Continuous Deployment

Netlify automatically sets up continuous deployment from your Git repository. Any changes pushed to your main branch will trigger a new build and deployment.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Netlify dashboard
2. Ensure your Next.js version is compatible with the Netlify Next.js plugin
3. Verify that all dependencies are correctly installed
4. Make sure the `out` directory is generated correctly during the build process

## Additional Resources

- [Netlify Docs for Next.js](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)