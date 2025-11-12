# GitHub Actions Setup - Add Secrets for Auto-Deployment

Your GitHub Actions workflow is already created and pushed to the repository! However, you need to add the Cloudflare credentials as **secrets** in your GitHub repository for the workflow to work.

## 📱 Quick Setup (2 minutes from mobile)

### Step 1: Go to Repository Settings
**Direct link**: https://github.com/hansakoch/tarkwa/settings/secrets/actions

Or navigate manually:
1. Go to: https://github.com/hansakoch/tarkwa
2. Click **Settings** tab (top of page)
3. Click **Secrets and variables** (left sidebar)
4. Click **Actions**

### Step 2: Add Two Secrets

Click **New repository secret** and add these two secrets:

#### Secret 1: CLOUDFLARE_API_TOKEN
- **Name**: `CLOUDFLARE_API_TOKEN`
- **Value**: `JTWnVG4rsjT0v3qBf-Ldu6EMMtFIMWEBItedbJny`
- Click **Add secret**

#### Secret 2: CLOUDFLARE_ACCOUNT_ID
- **Name**: `CLOUDFLARE_ACCOUNT_ID`
- **Value**: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
- Click **Add secret**

### Step 3: Verify Secrets Added
You should now see both secrets listed:
- ✅ CLOUDFLARE_API_TOKEN
- ✅ CLOUDFLARE_ACCOUNT_ID

## 🚀 How Auto-Deployment Works

Once secrets are added, the workflow will automatically:

1. **Trigger on push to `main` branch**
   - Every time you merge to main or push directly

2. **Build your application**
   - Runs `npm install` and `npm run build`

3. **Deploy to Cloudflare Pages**
   - Uses the secrets you added
   - Deploys the `dist` folder to your `tarkwa` Pages project

## 🎯 Test the Workflow

### Option A: Merge Your Current Branch
Once secrets are added:
1. Create a Pull Request from your branch to `main`
2. Merge the PR
3. GitHub Actions will automatically deploy!

### Option B: Trigger Manually
Or push directly to main and watch it deploy.

## 📊 Monitor Deployments

View deployment status:
- **GitHub Actions**: https://github.com/hansakoch/tarkwa/actions
- **Cloudflare Pages**: https://dash.cloudflare.com/ → Workers & Pages → tarkwa

## ⚠️ Important Notes

1. **The workflow only runs on the `main` branch** by default
2. **Current branch**: `claude/deploy-tarkwa-cloudflare-011CV2bZMZYDhATeuXqqrK8X`
   - You need to merge this to `main` for auto-deployment to work

3. **First deployment**: You may need to create the Pages project first via dashboard
   - Or the workflow will create it automatically if permissions allow

## 🔐 Your Credentials (for reference)

- **Account ID**: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
- **API Token**: `JTWnVG4rsjT0v3qBf-Ldu6EMMtFIMWEBItedbJny`
- **Project Name**: `tarkwa`

## ✅ Next Steps

1. ✅ Add secrets (above)
2. ✅ Either:
   - Deploy manually via dashboard (QUICK_DEPLOY_STEPS.md), OR
   - Merge to main and let GitHub Actions deploy automatically
3. ✅ Add custom domain `tarkwa.icebergsites.com` in Cloudflare Pages

---

**Quick Link to Add Secrets**: https://github.com/hansakoch/tarkwa/settings/secrets/actions
