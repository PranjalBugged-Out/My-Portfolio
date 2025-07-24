#!/bin/bash

# Netlify deployment script for Next.js portfolio

# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Netlify
echo "To deploy to Netlify, follow these steps:"
echo "1. Install Netlify CLI if not already installed: npm install -g netlify-cli"
echo "2. Login to Netlify: netlify login"
echo "3. Initialize Netlify site: netlify init"
echo "4. Deploy to Netlify: netlify deploy --prod"