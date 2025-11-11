# Example Workflows

This directory contains **copy-paste ready** workflow examples for different project types.

## 📋 How to Use

1. Choose the example that matches your project type
2. Copy the file to `.github/workflows/deploy.yml` in your repository
3. Update the values marked with `CHANGE THIS`
4. Push to main → Auto-deploys! ✨

## 📁 Available Examples

### [`minimal-deploy.yml`](workflows/minimal-deploy.yml)
**Best for**: Simple Vite/React/Vue projects

Minimal configuration using all defaults. Just set your custom domain.

**Setup time**: 30 seconds

---

### [`vite-react-deploy.yml`](workflows/vite-react-deploy.yml)
**Best for**: Vite + React/Vue/Svelte projects

Explicit configuration showing all Vite defaults.

**Features**:
- Manual workflow trigger
- Standard Vite build

---

### [`nextjs-deploy.yml`](workflows/nextjs-deploy.yml)
**Best for**: Next.js static exports

Configured for Next.js with static export.

**Features**:
- Uses `out` directory
- Node 20
- Custom project name

---

### [`staging-production-deploy.yml`](workflows/staging-production-deploy.yml)
**Best for**: Projects with staging environment

Deploys to different domains based on branch.

**Features**:
- `staging` branch → staging.domain.com
- `main` branch → domain.com
- Separate Cloudflare projects

---

### [`with-env-vars-deploy.yml`](workflows/with-env-vars-deploy.yml)
**Best for**: Projects with environment variables

Shows how to pass build-time environment variables.

**Features**:
- Supabase config
- API URLs
- Secrets management

---

### [`monorepo-deploy.yml`](workflows/monorepo-deploy.yml)
**Best for**: Monorepo setups

Deploy from a subfolder in a monorepo.

**Features**:
- Path-based triggers
- Working directory support
- pnpm support

---

## 🚀 Quick Start

```bash
# 1. Choose an example
cp examples/workflows/minimal-deploy.yml .github/workflows/deploy.yml

# 2. Update the domain
sed -i 's/myapp.icebergsites.com/YOUR-DOMAIN.icebergsites.com/' .github/workflows/deploy.yml

# 3. Commit and push
git add .github/workflows/deploy.yml
git commit -m "Add Cloudflare Pages deployment"
git push

# 4. Done! Check deployment at:
# https://github.com/YOUR-USERNAME/YOUR-REPO/actions
```

---

## 🔧 Customization

All examples use the reusable workflow from `hansakoch/tarkwa`.

### Common Customizations:

**Change Node version:**
```yaml
with:
  node-version: '20'
```

**Change build output:**
```yaml
with:
  output-directory: 'build'  # for Create React App
  output-directory: 'public'  # for Gatsby
  output-directory: '_site'   # for 11ty
```

**Use different package manager:**
```yaml
with:
  install-command: 'yarn install'
  # or
  install-command: 'pnpm install'
```

**Add environment variables:**
```yaml
secrets:
  build-env-vars: |
    {
      "VITE_YOUR_VAR": "${{ secrets.YOUR_VAR }}"
    }
```

---

## 📚 More Information

See [REUSABLE_WORKFLOW_GUIDE.md](../REUSABLE_WORKFLOW_GUIDE.md) for complete documentation.

---

## 🆘 Need Help?

Common issues:

**Q: "Resource not accessible by integration"**
A: Make sure `hansakoch/tarkwa` is public or accessible to your organization.

**Q: Custom domain not working**
A: Check your Cloudflare API token has DNS Edit permissions.

**Q: Build fails**
A: Verify `build-command` and `output-directory` match your framework.

**Q: Secrets not found**
A: Use `secrets: inherit` and ensure organization secrets are configured.

---

**Ready to deploy?** Pick an example and get started! 🚀
