# Quick Organization Secrets Setup (5 Minutes)

Follow these steps to enable deployment across ALL your repositories.

## 📋 Checklist

- [ ] Step 1: Create Cloudflare API Token (2 min)
- [ ] Step 2: Add Secrets to GitHub Organization (2 min)
- [ ] Step 3: Test with Tarkwa Repository (1 min)
- [ ] Step 4: Roll Out to Other Repos (30 sec each)

---

## Step 1: Create Cloudflare API Token (2 minutes)

### 1.1 Go to Cloudflare API Tokens Page

**Direct Link**: https://dash.cloudflare.com/profile/api-tokens

Or navigate:
- Login to Cloudflare
- Click your profile icon (top right)
- Select **My Profile**
- Click **API Tokens** tab

### 1.2 Create Custom Token

1. Click **Create Token** button
2. Click **Create Custom Token**

### 1.3 Configure Token

**Token Name**: `github-organization-deployment`

**Permissions** (Add exactly these 4 permissions):

```
┌─────────────────────────────────────────────────┐
│ Permission 1:                                   │
│ Account → Cloudflare Pages → Edit              │
├─────────────────────────────────────────────────┤
│ Permission 2:                                   │
│ Account → Account Settings → Read              │
├─────────────────────────────────────────────────┤
│ Permission 3:                                   │
│ Zone → Zone → Read                             │
├─────────────────────────────────────────────────┤
│ Permission 4:                                   │
│ Zone → DNS → Edit                              │
└─────────────────────────────────────────────────┘
```

**How to add each permission:**

For Account permissions:
- Click **+ Add** under Account Permissions
- Select **Cloudflare Pages** → **Edit**
- Click **+ Add** again
- Select **Account Settings** → **Read**

For Zone permissions:
- Click **+ Add** under Zone Permissions
- Select **Zone** → **Read**
- Click **+ Add** again
- Select **DNS** → **Edit**

**Account Resources**:
- Include → **All accounts**

**Zone Resources**:
- Include → **All zones**
  (This allows deployment to ANY domain in your account)

**Client IP Address Filtering**:
- Leave as: **All IP addresses**

**TTL** (Time to Live):
- Select: **Expires: Never**
  (Or set expiration per your security policy)

### 1.4 Create and Copy Token

1. Click **Continue to summary**
2. Review permissions (should show 4 permissions)
3. Click **Create Token**
4. **COPY THE TOKEN** - it looks like: `abcd1234efgh5678...`
5. Keep this page open or save the token somewhere safe!

---

## Step 2: Add Secrets to GitHub Organization (2 minutes)

### 2.1 Check if You Have a GitHub Organization

**Do you have a GitHub organization?**

- ✅ **YES** - Great! Continue to Step 2.2
- ❌ **NO** - Options:
  - **Option A**: Create free organization (takes 1 minute - see below)
  - **Option B**: Add secrets to each repo individually (not recommended)

**To create a free organization:**
1. Go to: https://github.com/organizations/new
2. Choose **Create a free organization**
3. Enter organization name
4. Done!

### 2.2 Go to Organization Secrets Page

**If your organization is `hansakoch`:**

**Direct Link**: https://github.com/organizations/hansakoch/settings/secrets/actions

Or navigate:
1. Go to: https://github.com/hansakoch
2. Click **Settings** tab
3. Click **Secrets and variables** (left sidebar)
4. Click **Actions**

### 2.3 Add First Secret: CLOUDFLARE_API_TOKEN

1. Click **New organization secret** (green button)
2. Fill in:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Secret**: Paste the token you copied from Step 1.4
   - **Repository access**: Select **All repositories**
3. Click **Add secret**

### 2.4 Add Second Secret: CLOUDFLARE_ACCOUNT_ID

1. Click **New organization secret** again
2. Fill in:
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Secret**: `0870b0bdbc14bcd31f43fe5e82c3ee8e`
   - **Repository access**: Select **All repositories**
3. Click **Add secret**

### 2.5 Verify Secrets Added

You should now see both secrets:

```
Organization secrets
├── CLOUDFLARE_API_TOKEN
│   └── Available to: All repositories
└── CLOUDFLARE_ACCOUNT_ID
    └── Available to: All repositories
```

✅ **Perfect!** Organization secrets are set up!

---

## Step 3: Test with Tarkwa Repository (1 minute)

Now let's test that everything works by deploying the tarkwa repository.

### 3.1 Merge Current Branch to Main

**Option A: Via GitHub (Easier from mobile)**

1. Go to: https://github.com/hansakoch/tarkwa
2. You should see a banner about your recent push
3. Click **Compare & pull request**
4. Title: "Add global Cloudflare deployment system"
5. Click **Create pull request**
6. Click **Merge pull request**
7. Click **Confirm merge**

**Option B: Via Command Line**

```bash
# Switch to main branch
git checkout main

# Merge the deployment branch
git merge claude/deploy-tarkwa-cloudflare-011CV2bZMZYDhATeuXqqrK8X

# Push to GitHub
git push origin main
```

### 3.2 Watch the Deployment

1. Go to: https://github.com/hansakoch/tarkwa/actions
2. You should see a workflow run starting
3. Click on it to watch progress
4. Wait ~2-3 minutes for deployment

### 3.3 Verify Deployment

Once the workflow succeeds:

1. Check Cloudflare Pages:
   - Go to: https://dash.cloudflare.com/
   - Navigate to **Workers & Pages**
   - You should see **tarkwa** project

2. Check your site:
   - Visit: https://tarkwa.pages.dev
   - Visit: https://tarkwa.icebergsites.com

✅ If both URLs work, deployment successful!

---

## Step 4: Roll Out to Other Repositories (30 sec each)

Now you can deploy ANY repository with minimal setup!

### For Each New Repository:

#### 4.1 Create Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    uses: hansakoch/tarkwa/.github/workflows/deploy-cloudflare-reusable.yml@main
    with:
      custom-domain: 'PROJECT-NAME.icebergsites.com'  # CHANGE THIS
    secrets: inherit
```

#### 4.2 Customize

Change only ONE line:
```yaml
custom-domain: 'your-project.icebergsites.com'
```

#### 4.3 Commit and Push

```bash
git add .github/workflows/deploy.yml
git commit -m "Add Cloudflare Pages deployment"
git push origin main
```

#### 4.4 Done!

- GitHub Actions runs automatically
- Deploys to Cloudflare Pages
- Configures DNS automatically
- Live at your custom domain in ~3 minutes

---

## 🎉 Success! What You Accomplished

✅ Created global Cloudflare API token
✅ Added organization-level secrets
✅ All repositories can now deploy automatically
✅ Zero per-repo secret configuration needed
✅ Update workflow once, affects all repos

## 📊 What This Enables

| Before | After |
|--------|-------|
| Add secrets to each repo (2 min) | `secrets: inherit` (0 min) |
| Copy 50-line workflow (5 min) | Copy 5-line workflow (30 sec) |
| Configure Cloudflare manually (5 min) | Auto-configured (0 min) |
| **Total: ~15 min per project** | **Total: ~30 sec per project** |

## 🚀 Examples Ready to Use

Copy from `examples/workflows/`:

- **minimal-deploy.yml** - Simplest possible (5 lines)
- **vite-react-deploy.yml** - For Vite projects
- **nextjs-deploy.yml** - For Next.js
- **staging-production-deploy.yml** - Multi-environment
- **with-env-vars-deploy.yml** - With secrets
- **monorepo-deploy.yml** - Monorepo support

## 🆘 Troubleshooting

### Can't find organization settings?

**Check**: Do you have admin access to the organization?

**Solution**: Ask organization owner to add you as admin, or ask them to add the secrets.

### Secrets not showing up in workflow?

**Check**: Are secrets set to "All repositories"?

**Solution**: Edit secret → Change repository access → All repositories

### Deployment fails with "Resource not accessible"?

**Check**: Is `hansakoch/tarkwa` repository public?

**Solution**: Make repository public, or give organization access.

### Custom domain not added?

**Check**: Does API token have DNS Edit permission?

**Solution**: Recreate token with all 4 permissions from Step 1.3

---

## 📚 Next Steps

After testing tarkwa deployment:

1. ✅ Verify site works at tarkwa.icebergsites.com
2. 🎯 Choose another repository to deploy
3. 📋 Copy minimal workflow example
4. ✏️ Change domain name
5. 🚀 Push and watch it deploy!

**Repeat for all your projects!**

---

## 💡 Pro Tips

1. **Use subdomain pattern**: `project-name.icebergsites.com`
2. **Pin workflow version**: Use `@v1.0.0` instead of `@main` for stability
3. **Test manually**: Add `workflow_dispatch:` trigger for manual runs
4. **Use environments**: Add production environment with required approvals

---

**Questions?** Check the detailed guides:
- `ORG_SECRETS_SETUP.md` - Full organization setup guide
- `REUSABLE_WORKFLOW_GUIDE.md` - Complete workflow documentation
- `examples/workflows/` - Copy-paste examples
