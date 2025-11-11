# Cloudflare Pages Deployment Guide for Tarkwa

This guide will walk you through deploying the Tarkwa application to Cloudflare Pages and configuring DNS for `tarkwa.icebergsites.com`.

## Prerequisites

- A Cloudflare account
- Access to the `icebergsites.com` domain in Cloudflare
- GitHub repository: `hansakoch/tarkwa`

## Step 1: Deploy to Cloudflare Pages

### Option A: Using Cloudflare Dashboard (Recommended)

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** from the left sidebar

2. **Create a New Pages Project**
   - Click **Create application** → **Pages** → **Connect to Git**
   - Select **GitHub** and authorize Cloudflare to access your repositories
   - Select the `hansakoch/tarkwa` repository
   - Click **Begin setup**

3. **Configure Build Settings**
   - **Project name**: `tarkwa` (or your preferred name)
   - **Production branch**: `main` (or your default branch)
   - **Framework preset**: Select **Vite**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables** (if needed for Supabase)
   - Click **Add variable** to add any required environment variables:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - These should be prefixed with `VITE_` to be accessible in the Vite app

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the initial build to complete (usually 1-3 minutes)
   - You'll get a default URL like `tarkwa.pages.dev`

### Option B: Using Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy from the repository root**
   ```bash
   wrangler pages deploy dist --project-name=tarkwa
   ```

   Note: You'll need to build the project first:
   ```bash
   npm install
   npm run build
   wrangler pages deploy dist --project-name=tarkwa
   ```

## Step 2: Configure Custom Domain (tarkwa.icebergsites.com)

### In Cloudflare Pages Dashboard

1. **Navigate to your Pages Project**
   - Go to **Workers & Pages** → Select your `tarkwa` project
   - Click on the **Custom domains** tab

2. **Add Custom Domain**
   - Click **Set up a custom domain**
   - Enter: `tarkwa.icebergsites.com`
   - Click **Continue**

3. **DNS Configuration** (Automatic)
   - If `icebergsites.com` is already in your Cloudflare account, DNS records will be created automatically
   - Cloudflare will create a CNAME record: `tarkwa.icebergsites.com` → `tarkwa.pages.dev`
   - Click **Activate domain**

### Manual DNS Configuration (if needed)

If you need to configure DNS manually:

1. **Navigate to DNS Settings**
   - In Cloudflare Dashboard, go to **Websites**
   - Select `icebergsites.com`
   - Go to **DNS** → **Records**

2. **Add CNAME Record**
   - **Type**: `CNAME`
   - **Name**: `tarkwa`
   - **Target**: `tarkwa.pages.dev` (or your Pages project URL)
   - **Proxy status**: ✅ Proxied (orange cloud icon)
   - **TTL**: Auto
   - Click **Save**

3. **Wait for DNS Propagation**
   - DNS changes typically propagate within 1-5 minutes with Cloudflare
   - You can check status at: https://dnschecker.org/

## Step 3: Verify Deployment

1. **Test the Default URL**
   - Visit your `*.pages.dev` URL
   - Verify the application loads correctly

2. **Test the Custom Domain**
   - Visit `https://tarkwa.icebergsites.com`
   - Verify the application loads correctly
   - Check that SSL/TLS certificate is active (should be automatic with Cloudflare)

3. **Check SSL Certificate**
   - SSL certificates are automatically provisioned by Cloudflare
   - Your site should be accessible via HTTPS within a few minutes

## Step 4: Configure Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: When you push to the production branch (e.g., `main`)
- **Preview**: For all other branches and pull requests

You can view deployment history and logs in the **Deployments** tab of your Pages project.

## Troubleshooting

### Build Failures
- Check build logs in the Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (using Node 18)

### Environment Variables Not Working
- Ensure environment variables are prefixed with `VITE_` for Vite
- Redeploy after adding new environment variables

### 404 Errors on Client-Side Routes
- The `public/_redirects` file should handle this automatically
- Verify the file exists and contains: `/* /index.html 200`

### DNS Not Resolving
- Check DNS records in Cloudflare Dashboard
- Use `dig tarkwa.icebergsites.com` or `nslookup tarkwa.icebergsites.com` to verify
- Wait up to 24 hours for full DNS propagation (though usually much faster)

## Additional Configuration

### Custom Headers
Create a `public/_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### Redirects
Edit `public/_redirects` for custom redirects:
```
/old-path  /new-path  301
/api/*     https://api.example.com/:splat  200
```

## Support

- Cloudflare Pages Documentation: https://developers.cloudflare.com/pages/
- Vite Documentation: https://vitejs.dev/
- Cloudflare Community: https://community.cloudflare.com/

## Summary

Your Tarkwa application should now be:
- ✅ Deployed to Cloudflare Pages
- ✅ Accessible at `https://tarkwa.icebergsites.com`
- ✅ Automatically deploying on git push
- ✅ Secured with SSL/TLS
- ✅ Handling client-side routing correctly
