# Claude Code - One-Time Setup Guide

Do this ONCE per repository to enable full automation.

## 1. Enable Auto-Merge for Claude Branches

Go to your GitHub repository settings:

**Settings → General → Pull Requests**
- ✅ Enable "Allow auto-merge"
- ✅ Enable "Automatically delete head branches"

**Settings → Actions → General → Workflow permissions**
- ✅ Select "Read and write permissions"
- ✅ Enable "Allow GitHub Actions to create and approve pull requests"

This allows Claude to create PRs that auto-merge to main.

## 2. Add Cloudflare Credentials to GitHub Secrets

**Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:
```
CLOUDFLARE_ACCOUNT_ID = 0870b0bdbc14bcd31f43fe5e82c3ee8e
CLOUDFLARE_API_TOKEN = JTWnVG4rsjT0v3qBf-Ldu6EMMtFIMWEBItedbJny
```

## 3. Update Deploy Workflow

The workflow at `.github/workflows/deploy.yml` should deploy to the correct project.

Check `projectName` matches what's in `.claude/dns-config.json`.

## 4. Optional: Allow Direct Push to Main

If you want Claude to push directly to main without PRs:

**Settings → Branches → Add rule for `main`**
- ✅ Require pull request reviews: OFF
- ✅ Allow force pushes: ON (for bot only)
- ✅ Add "claude" as exception under "Restrict pushes"

OR better yet, keep main protected and use the auto-merge workflow above.

## 5. Verify Setup

Run this to test:
```bash
cd /path/to/repo
.claude/session-start.sh
```

You should see:
- ✅ Cloudflare credentials loaded
- ✅ DNS configuration detected
- ✅ No _redirects conflicts

## Files Created

- `.claude/session-start.sh` - Auto-loads credentials on session start
- `.claude/deploy.sh` - One-command deployment script
- `.claude/dns-config.json` - Project configuration
- `.github/workflows/auto-merge-claude.yml` - Auto-merge workflow

## Usage

Next time Claude needs to deploy:

1. Claude creates changes on `claude/*` branch
2. Claude pushes to that branch
3. Auto-merge workflow merges to main
4. Deployment happens automatically

**No more asking you to merge PRs manually!**

## For New Projects

Copy these files to new projects:
```bash
cp -r .claude/ /path/to/new-project/
cp .github/workflows/auto-merge-claude.yml /path/to/new-project/.github/workflows/
```

Update `.claude/dns-config.json` with new project details.

Done! 🚀
