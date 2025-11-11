# Using This Repository as a Template

This repository is configured for **reusable Cloudflare Pages deployment**. You can use it as a template for future projects.

## 🎯 Quick Start: Deploy a New Project

### Method 1: Use This as a GitHub Template

1. **On GitHub**, click **"Use this template"** button
2. Create your new repository
3. Update **3 simple settings** (see below)
4. Push to main → Auto-deploys! ✨

### Method 2: Clone and Modify

```bash
# Clone this repo
git clone https://github.com/hansakoch/tarkwa.git my-new-project
cd my-new-project

# Update the configuration (see below)
# Push to your new repo
git remote set-url origin https://github.com/hansakoch/my-new-project.git
git push -u origin main
```

---

## ⚙️ Configuration for New Projects

### Step 1: Update Project Configuration

Edit `.cloudflare/pages.json`:

```json
{
  "projectName": "my-new-project",
  "customDomain": "my-new-project.icebergsites.com",
  "build": {
    "command": "npm run build",
    "destination": "dist"
  },
  "routes": [
    {
      "pattern": "/*",
      "status_code": 200
    }
  ],
  "environment": {
    "NODE_VERSION": "18"
  }
}
```

**Change:**
- `projectName`: Your Cloudflare Pages project name
- `customDomain`: Your custom domain (or remove if not needed)

### Step 2: Add GitHub Repository Variables

Go to: `Settings → Secrets and variables → Actions → Variables`

Add these **variables** (optional, has defaults):

| Variable | Value | Default |
|----------|-------|---------|
| `CF_PROJECT_NAME` | `my-new-project` | Uses repo name |
| `CF_CUSTOM_DOMAIN` | `my-new-project.icebergsites.com` | None |
| `BUILD_OUTPUT_DIR` | `dist` | `dist` |

### Step 3: Add GitHub Secrets (One-Time Setup)

**If using organization secrets**: Skip this! ✅

**If not**: Go to `Settings → Secrets and variables → Actions → Secrets`

Add:
- `CLOUDFLARE_API_TOKEN`: Your global Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: `0870b0bdbc14bcd31f43fe5e82c3ee8e`

---

## 🚀 Deployment Methods

### Auto-Deployment (GitHub Actions)

Push to `main` or `master` branch:
```bash
git push origin main
```

View deployment: `https://github.com/YOUR-USERNAME/YOUR-REPO/actions`

### Manual Deployment (Cloudflare Dashboard)

1. Go to: https://dash.cloudflare.com/
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your repository
4. Build settings auto-detect from `.cloudflare/pages.json`
5. Deploy!

---

## 📁 What's Included

This template includes:

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
  - Auto-deploys on push to main
  - Configurable via repository variables
  - Automatic custom domain setup

✅ **Cloudflare Configuration** (`.cloudflare/pages.json`)
  - Build settings
  - Project name
  - Custom domain

✅ **Client-Side Routing** (`public/_redirects`)
  - Supports React Router, Vue Router, etc.

✅ **Documentation**
  - Global deployment setup
  - Per-project configuration
  - Troubleshooting guides

---

## 🔄 Customization Options

### Different Build Tool?

Update `package.json` and `.cloudflare/pages.json`:

**For Next.js:**
```json
{
  "build": {
    "command": "npm run build",
    "destination": ".next"
  }
}
```

**For Create React App:**
```json
{
  "build": {
    "command": "npm run build",
    "destination": "build"
  }
}
```

### Different Node Version?

Update `.cloudflare/pages.json`:
```json
{
  "environment": {
    "NODE_VERSION": "20"
  }
}
```

### Environment Variables?

Add to GitHub workflow or as repository secrets:
```yaml
env:
  VITE_API_URL: ${{ secrets.API_URL }}
  VITE_APP_NAME: ${{ vars.APP_NAME }}
```

---

## 🎯 Deployment Checklist

When deploying a new project:

- [ ] Update `.cloudflare/pages.json` with project name and domain
- [ ] Add `CF_PROJECT_NAME` repository variable (or rely on repo name)
- [ ] Add `CF_CUSTOM_DOMAIN` repository variable (if using custom domain)
- [ ] Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets (if not using org secrets)
- [ ] Push to `main` branch
- [ ] Check deployment status in GitHub Actions
- [ ] Verify site at your custom domain

---

## 📊 Project Structure

```
your-project/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── .cloudflare/
│   └── pages.json              # Cloudflare Pages configuration
├── public/
│   └── _redirects              # Client-side routing support
├── src/                        # Your application code
├── package.json
├── vite.config.ts             # Or your build tool config
└── README.md
```

---

## 🆘 Troubleshooting

### Build Fails?
- Check build logs in GitHub Actions
- Verify build command in `.cloudflare/pages.json`
- Check Node version compatibility

### Custom Domain Not Working?
- Verify domain is in your Cloudflare account
- Check DNS records in Cloudflare dashboard
- Wait 1-5 minutes for DNS propagation

### Deployment Not Triggered?
- Ensure you pushed to `main` or `master` branch
- Check GitHub Actions is enabled for your repo
- Verify secrets are correctly added

---

## 📚 More Information

See these guides for detailed instructions:

- **GLOBAL_DEPLOYMENT_SETUP.md** - One-time global setup
- **QUICK_DEPLOY_STEPS.md** - Manual deployment from dashboard
- **GITHUB_ACTIONS_SETUP.md** - GitHub Actions configuration
- **CLOUDFLARE_DEPLOYMENT.md** - Comprehensive deployment guide

---

## 🎉 That's It!

With this template, deploying new projects to Cloudflare Pages is as simple as:

1. Use template
2. Update project name
3. Push to main
4. Done! ✨

**Your site will be live at:**
- `https://your-project.pages.dev`
- `https://your-custom-domain.com` (if configured)
