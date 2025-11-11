# Global Reusable Workflow for All Repositories

This repository contains a **reusable GitHub Actions workflow** that can deploy **ANY project** to **ANY Cloudflare domain** from **ANY repository**.

## 🎯 The Magic: One Workflow, Infinite Deployments

Instead of copying workflow code to every repository, you call the **centralized workflow** from this repo.

### How It Works:

```
Your Repo A → Calls → hansakoch/tarkwa reusable workflow → Deploys to domain-a.com
Your Repo B → Calls → hansakoch/tarkwa reusable workflow → Deploys to domain-b.com
Your Repo C → Calls → hansakoch/tarkwa reusable workflow → Deploys to domain-c.com
```

**Benefits:**
- ✅ Update workflow ONCE, affects ALL projects
- ✅ No code duplication
- ✅ Consistent deployments across all projects
- ✅ 5-line workflow file per project

---

## 🚀 Setup: One-Time Global Configuration

### Step 1: Set Up Organization Secrets (Do ONCE)

Go to: `https://github.com/organizations/YOUR-ORG/settings/secrets/actions`

Add these **TWO secrets**:
- **Name**: `CLOUDFLARE_API_TOKEN`
  - **Value**: Your Cloudflare API token (with Pages + DNS permissions)
- **Name**: `CLOUDFLARE_ACCOUNT_ID`
  - **Value**: `0870b0bdbc14bcd31f43fe5e82c3ee8e`

**Repository access**: Select **All repositories**

✅ **Done!** Now EVERY repository can deploy to Cloudflare.

---

## 📦 Using the Reusable Workflow in ANY Repository

### Minimal Example (2 lines of config):

Create `.github/workflows/deploy.yml` in your project:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'myapp.icebergsites.com'
    secrets: inherit  # Uses organization secrets
```

**That's it!** Push to main → Auto-deploys to Cloudflare Pages with DNS configured.

---

## 📋 Configuration Options

All inputs are **optional** with smart defaults:

| Input | Default | Description |
|-------|---------|-------------|
| `project-name` | Repository name | Cloudflare Pages project name |
| `custom-domain` | None | Custom domain (e.g., `app.icebergsites.com`) |
| `build-command` | `npm run build` | Build command |
| `output-directory` | `dist` | Build output directory |
| `node-version` | `18` | Node.js version |
| `install-command` | `npm ci` | Package install command |
| `working-directory` | `.` | Working directory |

---

## 🎨 Real-World Examples

### Example 1: Simple Vite App

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'myapp.icebergsites.com'
    secrets: inherit
```

**Defaults used:**
- Project name: Your repo name
- Build: `npm run build`
- Output: `dist`
- Node: `18`

### Example 2: Next.js App

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'nextapp.icebergsites.com'
      output-directory: 'out'
      build-command: 'npm run build && npm run export'
    secrets: inherit
```

### Example 3: Custom Node Version & Monorepo

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'monorepo-app.icebergsites.com'
      working-directory: 'packages/web'
      node-version: '20'
      install-command: 'pnpm install'
      build-command: 'pnpm build'
    secrets: inherit
```

### Example 4: With Environment Variables

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'api-app.icebergsites.com'
    secrets:
      cloudflare-api-token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
      cloudflare-account-id: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
      build-env-vars: |
        {
          "VITE_API_URL": "${{ secrets.API_URL }}",
          "VITE_APP_KEY": "${{ secrets.APP_KEY }}"
        }
```

### Example 5: Multiple Domains (Staging + Production)

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [main, staging]

jobs:
  deploy-staging:
    if: github.ref == 'refs/heads/staging'
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      project-name: 'myapp-staging'
      custom-domain: 'staging.myapp.icebergsites.com'
    secrets: inherit

  deploy-production:
    if: github.ref == 'refs/heads/main'
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      project-name: 'myapp-production'
      custom-domain: 'myapp.icebergsites.com'
    secrets: inherit
```

---

## 🌐 Supported Project Types

The reusable workflow works with **any static site generator**:

| Framework | Build Command | Output Directory |
|-----------|---------------|------------------|
| **Vite** | `npm run build` | `dist` |
| **Create React App** | `npm run build` | `build` |
| **Next.js (static)** | `npm run build && npm run export` | `out` |
| **Vue CLI** | `npm run build` | `dist` |
| **Angular** | `npm run build` | `dist/your-app-name` |
| **Svelte** | `npm run build` | `public` |
| **Nuxt (static)** | `npm run generate` | `dist` |
| **Astro** | `npm run build` | `dist` |
| **Gatsby** | `npm run build` | `public` |
| **11ty** | `npm run build` | `_site` |

Just pass the appropriate `build-command` and `output-directory`!

---

## 🔄 Updating the Workflow

**The Power of Centralization:**

When you need to update deployment logic (e.g., add caching, update actions):

1. Update **one file**: `hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml`
2. Push to main
3. **ALL repositories automatically use the updated workflow!** ✨

No need to update 10, 20, or 100 repositories individually.

---

## 🎯 Quick Start Checklist

For **each new project**:

- [ ] Create `.github/workflows/deploy.yml` (5 lines)
- [ ] Set `custom-domain` input
- [ ] Set `build-command` and `output-directory` (if non-default)
- [ ] Push to main
- [ ] ✨ Deployed!

**Time per project**: ~1 minute

---

## 🔐 Security: Organization Secrets

### Using `secrets: inherit`

When you use `secrets: inherit`, the workflow automatically gets:
- `CLOUDFLARE_API_TOKEN` (from organization)
- `CLOUDFLARE_ACCOUNT_ID` (from organization)
- Any repository-specific secrets

### Passing Specific Secrets

If not using organization secrets:

```yaml
secrets:
  cloudflare-api-token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
  cloudflare-account-id: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

---

## 📚 Complete Workflow Reference

### All Inputs:

```yaml
jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      project-name: 'my-project'              # Optional: defaults to repo name
      custom-domain: 'app.example.com'        # Optional: custom domain
      build-command: 'npm run build'          # Optional: default shown
      output-directory: 'dist'                # Optional: default shown
      node-version: '18'                      # Optional: default shown
      install-command: 'npm ci'               # Optional: default shown
      working-directory: '.'                  # Optional: default shown
    secrets:
      cloudflare-api-token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
      cloudflare-account-id: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
      build-env-vars: '{}'                    # Optional: JSON object
```

---

## 🎨 Copy-Paste Templates

### Template 1: Basic Deployment

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'CHANGE-ME.icebergsites.com'
    secrets: inherit
```

### Template 2: Custom Build

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'CHANGE-ME.icebergsites.com'
      build-command: 'CHANGE-ME'
      output-directory: 'CHANGE-ME'
    secrets: inherit
```

### Template 3: Full Control

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      project-name: 'CHANGE-ME'
      custom-domain: 'CHANGE-ME.icebergsites.com'
      build-command: 'npm run build'
      output-directory: 'dist'
      node-version: '18'
    secrets: inherit
```

---

## 💡 Pro Tips

1. **Pin to a version** (recommended for production):
   ```yaml
   uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@v1.0.0
   ```

2. **Use @main for auto-updates** (gets latest changes):
   ```yaml
   uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
   ```

3. **Test with workflow_dispatch** for manual triggers:
   ```yaml
   on:
     workflow_dispatch:
     push:
       branches: [main]
   ```

4. **Use subdomain pattern** for icebergsites.com:
   ```yaml
   custom-domain: 'project-name.icebergsites.com'
   ```

---

## 🆘 Troubleshooting

### "Resource not accessible by integration"

**Solution**: Make sure `hansakoch/tarkwa` repository is **public** or add access to your organization.

### Secrets not working

**Solution**: Use `secrets: inherit` or pass explicitly. Organization secrets must have "All repositories" access.

### Custom domain not added

**Solution**: Ensure Cloudflare API token has **DNS Edit** permissions for the zone.

### Build fails

**Solution**: Check `build-command` and `output-directory` are correct for your framework.

---

## 🎉 Summary

**One-Time Setup:**
1. Create Cloudflare API token (Pages + DNS permissions)
2. Add to GitHub organization secrets

**Per Project (1 minute):**
1. Create 5-line `.github/workflows/deploy.yml`
2. Set `custom-domain`
3. Push to main
4. ✨ Deployed!

**Maintenance:**
- Update workflow once → affects all projects
- No per-repo workflow updates needed

---

## 📖 Related Documentation

- **GLOBAL_DEPLOYMENT_SETUP.md** - Complete global setup guide
- **TEMPLATE_USAGE.md** - Using this repo as a template
- **QUICK_DEPLOY_STEPS.md** - Manual deployment from dashboard

---

**Repository**: https://github.com/hansakoch/tarkwa
**Reusable Workflow**: `.github/workflows/deploy-cloudflare-reusable.yml`
**Your Account ID**: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
