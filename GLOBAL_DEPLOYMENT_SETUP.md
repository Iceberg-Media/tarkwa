# Global Cloudflare Pages Deployment Setup

This guide shows you how to set up **ONE TIME** configuration that works for **ALL your repositories** deploying to **ANY Cloudflare domain**.

## 🌐 One-Time Global Setup

### Step 1: Create a Global Cloudflare API Token

Create a single API token with permissions for ALL zones and Pages projects:

**Go to**: https://dash.cloudflare.com/profile/api-tokens

1. Click **Create Token**
2. Choose **Create Custom Token**
3. Name: `global-pages-deployment` (or any name)

**Permissions:**

| Resource | Permission | Scope |
|----------|-----------|-------|
| Account - Cloudflare Pages | Edit | All accounts |
| Account - Account Settings | Read | All accounts |
| Zone - Zone | Read | All zones |
| Zone - DNS | Edit | All zones |

4. **Zone Resources**: Select **All zones**
5. **Account Resources**: Include all your accounts
6. **IP Filtering**: None (or restrict to your IPs)
7. **TTL**: No expiration (or set your preference)
8. Click **Continue to summary** → **Create Token**
9. **COPY THE TOKEN** - save it securely!

This token can now deploy to ANY Cloudflare Pages project and manage DNS for ANY domain in your account.

---

## 🔧 GitHub Setup (Choose Your Method)

### Method A: Organization-Level Secrets (Best for Multiple Repos)

If you have a GitHub **Organization** (recommended):

1. Go to: `https://github.com/organizations/YOUR-ORG-NAME/settings/secrets/actions`
2. Add **organization secrets**:
   - `CLOUDFLARE_API_TOKEN`: Your global token
   - `CLOUDFLARE_ACCOUNT_ID`: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
3. **Repository access**: Select **All repositories** or **Selected repositories**

✅ **Result**: ALL repos in your organization can use these secrets automatically!

### Method B: User-Level Environment Secrets (For Personal Repos)

GitHub doesn't support user-level secrets, but you can use **environments**:

1. Create a reusable environment called `cloudflare-production`
2. Add secrets to that environment
3. Reference the environment in your workflows

### Method C: Template Repository (Easy to Clone)

Create a template repository with all the config, then clone it for new projects.

---

## 📦 Reusable Workflow Template

Create this file once, reuse for every project:

### File: `.github/workflows/deploy-cloudflare.yml`

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
      - master
  pull_request:
    branches:
      - main
      - master
  workflow_dispatch: # Allows manual trigger

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    name: Deploy to Cloudflare Pages

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          # Add any environment variables from repo secrets
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - name: Publish to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ${{ vars.CF_PROJECT_NAME || github.event.repository.name }}
          directory: ${{ vars.BUILD_OUTPUT_DIR || 'dist' }}
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.ref_name }}
```

**Key Features:**
- Uses `github.event.repository.name` as default project name
- Configurable via repository variables
- Works with any build output directory
- Supports manual triggers

---

## 🎯 Per-Repository Configuration (Simple)

For each new repository, you only need to configure **project-specific settings**:

### 1. Add Repository Variables (Not Secrets)

Go to: `https://github.com/YOUR-USERNAME/YOUR-REPO/settings/variables/actions`

Add these **variables** (NOT secrets):

| Variable | Value | Example |
|----------|-------|---------|
| `CF_PROJECT_NAME` | Cloudflare Pages project name | `tarkwa` |
| `BUILD_OUTPUT_DIR` | Build output directory | `dist` |
| `CF_CUSTOM_DOMAIN` | Custom domain (optional) | `tarkwa.icebergsites.com` |

### 2. Add Project-Specific Config File

Create `.cloudflare/config.json` in each repo:

```json
{
  "projectName": "tarkwa",
  "buildCommand": "npm run build",
  "buildOutputDirectory": "dist",
  "customDomain": "tarkwa.icebergsites.com",
  "environmentVariables": {
    "NODE_VERSION": "18"
  }
}
```

---

## 🚀 Quick Setup for New Projects (30 seconds)

When starting a new project:

### Option 1: Using Organization Secrets (If Set Up)
1. Copy `.github/workflows/deploy-cloudflare.yml` to your new repo
2. Set repository variables: `CF_PROJECT_NAME` and `BUILD_OUTPUT_DIR`
3. Push to `main` → Automatically deploys! ✨

### Option 2: Using Template Repository
1. Create a template repo with all the workflow files
2. Click "Use this template" for new projects
3. Update only the project-specific variables
4. Push → Deploys automatically! ✨

### Option 3: Manual Per-Repo (Current Method)
1. Copy workflow file
2. Add secrets to each repo individually
3. Configure and deploy

---

## 📋 DNS Configuration Strategy

### Approach A: Auto-Configure DNS (Recommended)

When the custom domain is in the same Cloudflare account:

1. Deploy via GitHub Actions or dashboard
2. In Cloudflare Pages project, add custom domain
3. DNS records are created automatically! ✅

### Approach B: Pre-Configure DNS

Set up a wildcard or pattern:

1. For subdomains of `icebergsites.com`:
   - Add projects as subdomains: `project1.icebergsites.com`, `project2.icebergsites.com`
2. In Cloudflare Pages, add the custom domain
3. DNS auto-configures for each subdomain

---

## 🔄 Automated Custom Domain Setup

Enhance the workflow to automatically configure custom domains:

```yaml
- name: Configure Custom Domain
  if: vars.CF_CUSTOM_DOMAIN != ''
  run: |
    npx wrangler pages project domains add \
      ${{ vars.CF_CUSTOM_DOMAIN }} \
      --project-name=${{ vars.CF_PROJECT_NAME || github.event.repository.name }}
  env:
    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

Add this step to your workflow and it will automatically configure DNS!

---

## 📁 Create a Template Repository

**Best practice**: Create a template repository with everything pre-configured:

### Repository: `cloudflare-pages-template`

```
cloudflare-pages-template/
├── .github/
│   └── workflows/
│       └── deploy-cloudflare.yml
├── .cloudflare/
│   ├── config.json
│   └── pages.json
├── public/
│   └── _redirects
├── src/
│   └── (your app code)
├── package.json
├── vite.config.ts
├── README.md
└── DEPLOYMENT.md
```

**Usage:**
1. Go to your template repo
2. Click **Use this template** → **Create a new repository**
3. Update `CF_PROJECT_NAME` variable
4. Push to main → Deploys automatically! 🎉

---

## 🎯 Summary: One-Time vs Per-Project

### ✅ One-Time Setup (Do Once):

1. Create global Cloudflare API token with all permissions
2. Add token to GitHub:
   - **Organization secrets** (best), OR
   - Create template repository with reusable workflow

### ⚡ Per-Project Setup (30 seconds):

1. Set repository variables:
   - `CF_PROJECT_NAME`
   - `CF_CUSTOM_DOMAIN`
2. Push to `main`
3. Done! ✨

---

## 🔐 Security Best Practices

1. **Use environment protection rules**:
   - Require approval for production deployments
   - Restrict to specific branches

2. **Rotate API tokens periodically**:
   - Update once globally
   - All repos automatically use new token

3. **Use repository variables for non-sensitive data**:
   - Project names, domains, build dirs
   - Keep secrets for tokens only

---

## 📚 Quick Reference

| Task | Command/Link |
|------|--------------|
| Create global API token | https://dash.cloudflare.com/profile/api-tokens |
| Add org secrets | `https://github.com/organizations/ORG/settings/secrets/actions` |
| Add repo variables | `https://github.com/USER/REPO/settings/variables/actions` |
| View deployments | `https://github.com/USER/REPO/actions` |
| Cloudflare Pages | https://dash.cloudflare.com/ → Workers & Pages |

---

## 🎬 Quick Start Example

```bash
# 1. Clone your template
git clone git@github.com:YOUR-ORG/cloudflare-pages-template.git my-new-project
cd my-new-project

# 2. Update project config
echo '{"projectName": "my-new-project", "customDomain": "my-new-project.icebergsites.com"}' > .cloudflare/config.json

# 3. Push to GitHub
git add .
git commit -m "Initial commit"
git remote set-url origin git@github.com:YOUR-ORG/my-new-project.git
git push -u origin main

# 4. Done! Check deployment at:
# https://github.com/YOUR-ORG/my-new-project/actions
```

---

## 🆘 Need Help?

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler/

**Your Global Credentials:**
- Account ID: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
- Use same token for all projects
