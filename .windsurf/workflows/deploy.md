---
description: Deploy the Triarii Command Center web application to Netlify
---

# Deploy Triarii Command Center to Netlify

This workflow deploys the Vite + React application to Netlify.

## Prerequisites

- Node.js and npm/bun installed
- Project dependencies installed (`npm install` or `bun install`)

## Deployment Steps

1. **Ensure all files are committed** (optional but recommended)
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   ```

2. **Verify build works locally**
   // turbo
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**
   - Use the Windsurf deploy tool
   - Framework: Vite
   - Project path: `c:\Users\Eshgin\Desktop\triarii-command-center-main`

4. **Verify deployment**
   - Check the deployment URL provided
   - Test all major pages and functionality

## Post-Deployment

- The `netlify.toml` file handles SPA routing (all routes redirect to index.html)
- Build output is in the `dist` folder
- Site will auto-redeploy on git pushes if connected to a repository
