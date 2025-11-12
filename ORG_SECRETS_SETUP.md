# Organization-Level Secrets Setup

Set up Cloudflare credentials **ONCE** at the organization level, and **ALL your repositories** can deploy automatically.

## ✨ The Power of Organization Secrets

**One-Time Setup** → **Infinite Repositories**

```
┌─────────────────────────────────────┐
│   GitHub Organization Secrets       │
│   ✅ CLOUDFLARE_API_TOKEN          │
│   ✅ CLOUDFLARE_ACCOUNT_ID         │
└─────────────────────────────────────┘
              ↓
    ┌─────────┴─────────┐
    ↓         ↓         ↓
  Repo A    Repo B    Repo C  ... (100+ repos)
    ↓         ↓         ↓
Deploy to Deploy to Deploy to
domain-a  domain-b  domain-c
```

**Benefits:**
- ✅ Set up once, use everywhere
- ✅ Update token globally if needed
- ✅ No secrets in individual repos
- ✅ Automatic access for all repos
- ✅ Centralized security management

---

## 🚀 Step-by-Step Setup

### Step 1: Create Global Cloudflare API Token

**Go to**: https://dash.cloudflare.com/profile/api-tokens

1. Click **Create Token**
2. Choose **Create Custom Token**
3. **Token name**: `github-org-deployment` (or any name)

**Permissions (Select exactly these):**

| Resource Type | Resource | Permission |
|--------------|----------|------------|
| **Account** | Cloudflare Pages | **Edit** |
| **Account** | Account Settings | **Read** |
| **Zone** | Zone | **Read** |
| **Zone** | DNS | **Edit** |

**Account Resources:**
- Include → **All accounts**

**Zone Resources:**
- Include → **All zones** (or specific zones like `icebergsites.com`)

**Client IP Address Filtering:**
- Leave as **All IP addresses** (GitHub Actions IPs change)

**TTL:**
- **Expires**: Never (or set expiration per your security policy)

4. Click **Continue to summary**
5. Click **Create Token**
6. **COPY THE TOKEN** - you'll need it in the next step!

---

### Step 2: Add Secrets to GitHub Organization

#### For GitHub Organizations:

**Go to**: `https://github.com/organizations/YOUR-ORG-NAME/settings/secrets/actions`

Or navigate:
1. Go to your organization: `https://github.com/YOUR-ORG-NAME`
2. Click **Settings**
3. Click **Secrets and variables** (left sidebar)
4. Click **Actions**
5. Click **New organization secret**

#### Add Secret #1: CLOUDFLARE_API_TOKEN

1. Click **New organization secret**
2. **Name**: `CLOUDFLARE_API_TOKEN`
3. **Secret**: Paste your Cloudflare API token from Step 1
4. **Repository access**: Select **All repositories** (recommended)
   - Or select **Selected repositories** and choose which repos can access
5. Click **Add secret**

#### Add Secret #2: CLOUDFLARE_ACCOUNT_ID

1. Click **New organization secret**
2. **Name**: `CLOUDFLARE_ACCOUNT_ID`
3. **Secret**: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
4. **Repository access**: **All repositories** (same as above)
5. Click **Add secret**

---

### Step 3: Verify Secrets Are Added

You should now see both secrets in your organization:

```
Organization secrets
├── CLOUDFLARE_API_TOKEN (Available to: All repositories)
└── CLOUDFLARE_ACCOUNT_ID (Available to: All repositories)
```

**✅ DONE!** You're ready to deploy from ANY repository!

---

## 📦 Using Organization Secrets in Repositories

Now, in **ANY repository** in your organization, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'myapp.icebergsites.com'  # CHANGE THIS
    secrets: inherit  # ← Automatically uses organization secrets!
```

**That's it!** The `secrets: inherit` line gives the workflow access to:
- ✅ Organization secrets (CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID)
- ✅ Repository secrets (if any)
- ✅ Environment secrets (if configured)

---

## 🔐 Security Best Practices

### 1. Least Privilege Access

If you have sensitive repos, use **Selected repositories** instead of **All repositories**:

```
Repository access: Selected repositories
  ✓ project-a
  ✓ project-b
  ✓ project-c
```

### 2. Token Rotation

**To rotate your API token:**

1. Create new Cloudflare API token (same permissions)
2. Update `CLOUDFLARE_API_TOKEN` in organization secrets
3. All repositories automatically use new token
4. Delete old token in Cloudflare

**No need to update individual repositories!**

### 3. Audit Access

Regularly review:
- Which repositories have access to secrets
- Token permissions in Cloudflare
- Deployment logs in GitHub Actions

### 4. Use Environments for Production

For production deployments, add protection:

```yaml
jobs:
  deploy:
    environment: production  # Requires approval
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'myapp.icebergsites.com'
    secrets: inherit
```

Configure environment in: `Repo → Settings → Environments → production`
- Add required reviewers
- Add deployment branches rule

---

## 🎯 What About Personal Repositories?

**If you DON'T have a GitHub organization:**

GitHub doesn't support user-level secrets. Your options:

### Option 1: Add Secrets Per Repository

Go to each repo: `Settings → Secrets and variables → Actions`

Add:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

**Cons**: Need to add to each repo individually

### Option 2: Create an Organization (Free!)

1. Create a free GitHub organization
2. Transfer your repos to the organization
3. Use organization secrets

**Benefits**:
- One-time secret setup
- Better for teams
- Professional setup

### Option 3: Use Repository Templates

Create template repo with all configs, clone for new projects.

---

## 🔄 Managing Multiple Cloudflare Accounts

**If you deploy to different Cloudflare accounts:**

### Option 1: Different Organization Secrets

Create separate secrets:
```
CLOUDFLARE_API_TOKEN_CLIENT_A
CLOUDFLARE_ACCOUNT_ID_CLIENT_A
CLOUDFLARE_API_TOKEN_CLIENT_B
CLOUDFLARE_ACCOUNT_ID_CLIENT_B
```

Use in workflow:
```yaml
secrets:
  cloudflare-api-token: ${{ secrets.CLOUDFLARE_API_TOKEN_CLIENT_A }}
  cloudflare-account-id: ${{ secrets.CLOUDFLARE_ACCOUNT_ID_CLIENT_A }}
```

### Option 2: Use Environments

Create environments: `client-a`, `client-b`

Add account-specific secrets to each environment.

---

## 📊 Quick Comparison

| Approach | Setup Time | Per-Repo Effort | Maintenance |
|----------|------------|-----------------|-------------|
| **Org Secrets** (Recommended) | 5 min (once) | 30 sec | Update once, affects all |
| **Per-Repo Secrets** | 2 min (each repo) | 2 min | Update each repo individually |
| **Template Repo** | 10 min (once) | 1 min | Update template |

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Organization secrets created
  - [ ] `CLOUDFLARE_API_TOKEN`
  - [ ] `CLOUDFLARE_ACCOUNT_ID`
- [ ] Repository access set to **All repositories**
- [ ] Test with one repository:
  - [ ] Create `.github/workflows/deploy.yml`
  - [ ] Use `secrets: inherit`
  - [ ] Push to main
  - [ ] Deployment succeeds
- [ ] Roll out to other repositories

---

## 🆘 Troubleshooting

### "Resource not accessible by integration"

**Cause**: Reusable workflow repo (`hansakoch/tarkwa`) is private

**Solution**: Make `hansakoch/tarkwa` public, or give organization access

### "Secret CLOUDFLARE_API_TOKEN not found"

**Cause**: Secrets not inherited properly

**Solution**:
- Ensure you're using `secrets: inherit`
- Check organization secret repository access includes your repo
- Try `secrets: cloudflare-api-token: ${{ secrets.CLOUDFLARE_API_TOKEN }}` explicitly

### "Access denied" from Cloudflare API

**Cause**: Token doesn't have required permissions

**Solution**: Recreate token with all permissions from Step 1

### Deployment works, but custom domain fails

**Cause**: Token missing DNS Edit permissions

**Solution**: Check token has **Zone → DNS → Edit** for your zone

---

## 📚 Next Steps

1. ✅ Set up organization secrets (this guide)
2. 📖 Read [REUSABLE_WORKFLOW_GUIDE.md](REUSABLE_WORKFLOW_GUIDE.md) for workflow usage
3. 📋 Copy example from [examples/workflows/](examples/workflows/)
4. 🚀 Deploy!

---

## 🎉 Summary

**One-Time Setup:**
1. Create Cloudflare API token with full permissions
2. Add to organization secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

**Per Repository (30 seconds):**
1. Create `.github/workflows/deploy.yml`
2. Set `custom-domain`
3. Use `secrets: inherit`
4. Push to main → Deploys! ✨

**Maintenance:**
- Update token once → affects all repos
- Add new repos → automatically have access
- Zero per-repo secret management

---

**Your Organization Secrets URL:**
`https://github.com/organizations/YOUR-ORG-NAME/settings/secrets/actions`

**Your Credentials:**
- Account ID: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
- API Token: Created in Step 1 (with Pages + DNS permissions)
