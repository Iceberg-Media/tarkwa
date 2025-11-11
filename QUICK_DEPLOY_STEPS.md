# Quick Cloudflare Pages Deployment Steps

The project has been built and is ready to deploy! Follow these simple steps from your mobile device:

## ✅ What's Ready:
- ✅ Project built successfully (dist/ folder)
- ✅ Build configuration created
- ✅ Client-side routing configured
- ✅ All deployment files committed to GitHub

## 📱 Deploy from Mobile (5 minutes):

### Step 1: Go to Cloudflare Dashboard
1. Open: https://dash.cloudflare.com/
2. Click **Workers & Pages** in the sidebar
3. Click **Create application** button
4. Click **Pages** tab
5. Click **Connect to Git**

### Step 2: Connect GitHub Repository
1. Click **GitHub** button
2. Authorize Cloudflare (if needed)
3. Select repository: **hansakoch/tarkwa**
4. Click **Begin setup**

### Step 3: Configure Build Settings
Fill in these exact values:

- **Project name**: `tarkwa`
- **Production branch**: `main` (or your default branch)
- **Framework preset**: Select **"Vite"** from dropdown
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (leave empty)

### Step 4: Add Environment Variables (if needed for Supabase)
Only if you're using Supabase, click **Add variable**:
- Variable name: `VITE_SUPABASE_URL` → Your Supabase project URL
- Variable name: `VITE_SUPABASE_ANON_KEY` → Your Supabase anon key

### Step 5: Deploy
1. Click **Save and Deploy**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `tarkwa.pages.dev`

### Step 6: Add Custom Domain (tarkwa.icebergsites.com)
1. In your project, click **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter: `tarkwa.icebergsites.com`
4. Click **Continue**
5. If `icebergsites.com` is in your Cloudflare account, DNS will be automatic!
6. Click **Activate domain**

## 🎉 Done!

Your site will be live at:
- https://tarkwa.pages.dev
- https://tarkwa.icebergsites.com (after DNS propagates, usually 1-5 minutes)

---

## Alternative: Manual DNS Setup

If you need to manually configure DNS:

1. Go to **Websites** → Select `icebergsites.com`
2. Go to **DNS** → **Records**
3. Click **Add record**
4. Configure:
   - **Type**: CNAME
   - **Name**: `tarkwa`
   - **Target**: `tarkwa.pages.dev`
   - **Proxy status**: ✅ Proxied (orange cloud)
   - **TTL**: Auto
5. Click **Save**

---

## Need API Token for Automation?

If you want to automate deployments via CLI/GitHub Actions, create a new API token:

1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Use template: **Edit Cloudflare Workers**
4. Or create custom token with permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
   - **Zone** → **DNS** → **Edit** (for icebergsites.com)
5. Copy the token and add to:
   - GitHub Secrets: `CLOUDFLARE_API_TOKEN`
   - Along with: `CLOUDFLARE_ACCOUNT_ID` = `0870b0bdbc14bcd31f43fe5e82c3ee8e`

Then GitHub Actions will auto-deploy on every push to main!
