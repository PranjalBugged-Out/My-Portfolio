# Manual Netlify Deployment Guide

This guide provides step-by-step instructions for manually deploying your Next.js portfolio to Netlify.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://netlify.com) if you don't have one)
- Node.js and npm installed on your machine

## Deployment Steps

### 1. Prepare Your Project

Your project has already been configured for Netlify deployment with:
- `next.config.mjs` - Configured for static export with `basePath` removed
- `netlify.toml` - Contains build settings and redirects

### 2. Build Your Project

Run the build script to generate the static files:

```bash
npm run build
```

This will create an `out` directory with your static site files.

### 3. Deploy Using Netlify CLI

#### Install Netlify CLI (if not already installed)

```bash
npm install -g netlify-cli
```

#### Log in to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

#### Initialize Your Site (First-time Only)

```bash
netlify init
```

Follow the prompts to:
- Choose "Create & configure a new project"
- Select your team
- Configure build settings (should be auto-detected from netlify.toml)

#### Deploy to Production

```bash
netlify deploy --prod
```

### 4. Alternative: Deploy via Netlify UI

If you prefer using the Netlify web interface:

1. Log in to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

## Using the Deployment Script

For convenience, a PowerShell script has been created to help with the deployment process:

```bash
./netlify-manual-deploy.ps1
```

This script will:
1. Check if Netlify CLI is installed and install it if needed
2. Build your project
3. Provide instructions for the manual steps (login, init, deploy)

## Troubleshooting

- If you encounter a "Service Temporarily Unavailable" error when logging in, wait a few minutes and try again
- If the build fails, check the error messages and ensure your Next.js configuration is correct
- For deployment issues, check the Netlify documentation or support forums