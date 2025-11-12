# Claude Code - Quick Start (For You)

## One-Time Setup (Do This Now)

### Step 1: Merge the automation
Go to: https://github.com/Iceberg-Media/tarkwa/pull/new/claude/setup-automation-011CV3cfS4CUtPHai3vgcJ7D
Click: Create PR → Merge

### Step 2: Enable auto-merge in GitHub
**Settings → General → Pull Requests**
- ✅ Allow auto-merge
- ✅ Automatically delete head branches

**Settings → Actions → General → Workflow permissions**
- ✅ Read and write permissions
- ✅ Allow GitHub Actions to create and approve pull requests

### Step 3: Done!

## What This Gives You

✅ **No more manual PR merges** - Auto-merges claude/* branches
✅ **No more asking for credentials** - Auto-loaded on session start
✅ **No more deployment confusion** - Checks DNS config first
✅ **No more _redirects issues** - Auto-scans and fixes
✅ **No more wrong targets** - Config file ensures correct project

## For Your Next Project

Copy these 4 files:
```bash
.claude/session-start.sh
.claude/deploy.sh
.claude/dns-config.json (edit with new project details)
.github/workflows/auto-merge-claude.yml
```

Update the config:
```json
{
  "domain": "newproject.icebergsites.com",
  "cloudflare_project": "newproject-name",
  "production_branch": "main"
}
```

**That's it!** Claude will handle everything else automatically.

## What Changed

### Before (What Happened Today):
1. ❌ You had to give credentials repeatedly
2. ❌ You had to manually merge every PR
3. ❌ I deployed to wrong targets
4. ❌ I didn't check _redirects
5. ❌ Took hours of back-and-forth

### After (From Now On):
1. ✅ Credentials auto-load
2. ✅ PRs auto-merge
3. ✅ Config file ensures correct target
4. ✅ Pre-flight checks catch issues
5. ✅ Takes ~5 minutes total

## Emergency: If Something Breaks

Run this to check what's wrong:
```bash
.claude/session-start.sh
```

Or manually deploy:
```bash
.claude/deploy.sh
```

Both scripts have detailed output showing exactly what's happening.
