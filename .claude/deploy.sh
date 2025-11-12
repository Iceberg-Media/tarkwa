#!/bin/bash
# Claude Code Auto-Deploy Script
# Handles deployment to Cloudflare Pages with all checks

set -e

echo "🚀 Starting deployment process..."

# Load credentials
source .claude/session-start.sh 2>/dev/null || {
  echo "❌ Failed to load session config"
  exit 1
}

# Load project config
if [ -f ".claude/dns-config.json" ]; then
  CF_PROJECT=$(cat .claude/dns-config.json | grep cloudflare_project | cut -d'"' -f4)
  DOMAIN=$(cat .claude/dns-config.json | grep domain | cut -d'"' -f4)
  PROD_BRANCH=$(cat .claude/dns-config.json | grep production_branch | cut -d'"' -f4)
else
  echo "❌ No DNS config found"
  exit 1
fi

echo "📦 Building project..."
npm ci --silent
npm run build

echo "🔍 Pre-deployment checks..."

# Check for _redirects that might break things
if [ -f "dist/_redirects" ]; then
  echo "⚠️  Checking _redirects file..."
  if grep -q "^/\* " dist/_redirects; then
    echo "❌ Found catch-all redirect that may block static assets!"
    echo "   Removing _redirects to prevent issues..."
    rm dist/_redirects
  fi
fi

# Verify static assets exist
echo "✅ Verifying static assets..."
[ -f "dist/logo.png" ] && echo "  ✓ logo.png" || echo "  ✗ logo.png missing"
[ -d "dist/assets" ] && echo "  ✓ assets/ directory" || echo "  ✗ assets/ missing"

echo "☁️  Deploying to Cloudflare Pages..."
echo "   Project: $CF_PROJECT"
echo "   Domain: $DOMAIN"
echo "   Branch: $PROD_BRANCH"

wrangler pages deploy dist \
  --project-name="$CF_PROJECT" \
  --branch="$PROD_BRANCH" \
  --commit-dirty=true

echo ""
echo "✅ Deployment complete!"
echo "🌐 Live at: https://$DOMAIN"
echo ""
