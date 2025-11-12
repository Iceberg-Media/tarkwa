#!/bin/bash
# Claude Code Session Start Hook
# Auto-loads credentials and performs pre-flight checks

echo "🚀 Claude Code Session Starting..."

# Load Cloudflare credentials
export CLOUDFLARE_ACCOUNT_ID="0870b0bdbc14bcd31f43fe5e82c3ee8e"
export CLOUDFLARE_API_TOKEN="JTWnVG4rsjT0v3qBf-Ldu6EMMtFIMWEBItedbJny"
export CLOUDFLARE_D1_UUID="149c8b25-33ef-41c4-94ba-f7f1c231bfd4"

echo "✅ Cloudflare credentials loaded"

# Check Cloudflare Pages projects
echo "📋 Checking Cloudflare Pages projects..."
wrangler pages project list 2>/dev/null | grep -E "tarkwa|Project Name" || echo "⚠️  Wrangler not installed, skipping project check"

# Check DNS configuration
echo "🌐 Checking DNS configuration..."
if [ -f ".claude/dns-config.json" ]; then
  cat .claude/dns-config.json
else
  echo "⚠️  No DNS config found, creating template..."
  echo '{
  "domain": "tarkwa.icebergsites.com",
  "cloudflare_project": "tarkwa-auto-transport",
  "production_branch": "main"
}' > .claude/dns-config.json
fi

# Scan project structure
echo "📁 Scanning project structure..."
[ -f "public/_redirects" ] && echo "⚠️  _redirects file found - may block static assets" || echo "✅ No _redirects conflicts"
[ -f "package.json" ] && echo "✅ Node.js project detected" || echo "⚠️  No package.json found"
[ -d ".github/workflows" ] && echo "✅ GitHub Actions configured" || echo "⚠️  No GitHub Actions found"

# Check git branch
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check for uncommitted changes
if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  echo "⚠️  Uncommitted changes detected"
else
  echo "✅ Working tree clean"
fi

echo ""
echo "🎯 Ready to deploy!"
echo "   Project: tarkwa-auto-transport"
echo "   Domain: tarkwa.icebergsites.com"
echo ""
