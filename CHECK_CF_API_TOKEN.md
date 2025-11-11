# Check Your Cloudflare API Token Permissions

Since we can't access the Cloudflare API from this environment due to proxy restrictions, you'll need to check and potentially update your API token permissions directly in the Cloudflare dashboard.

## 📱 How to Check Your Current API Token (from Mobile)

### Step 1: Access API Tokens Page
Go to: **https://dash.cloudflare.com/profile/api-tokens**

Or navigate manually:
1. Login to https://dash.cloudflare.com/
2. Click your profile icon (top right)
3. Select **My Profile**
4. Click **API Tokens** tab

### Step 2: Find Your Token
Look for the token that matches: `JTWnVG4rsjT0v3qBf-Ldu6EMMtFIMWEBItedbJny`

- If you see the full token listed, click on it
- If you only see a partial token, look for one created recently or with a recognizable name

### Step 3: Check Permissions
Click **View** or **Edit** next to your token to see its permissions. You need:

#### ✅ Required Permissions for Deployment:

**Account Permissions:**
- ☑️ **Cloudflare Pages** → **Edit**
- ☑️ **Account Settings** → **Read** (optional but helpful)

**Zone Permissions:**
- ☑️ **Zone** → **Read** (to list zones)
- ☑️ **DNS** → **Edit** (to configure tarkwa.icebergsites.com)
- Apply to: **All zones** OR specifically to `icebergsites.com`

## 🔧 If Your Token is Missing Permissions

### Option A: Edit Existing Token (if allowed)
1. Click **Edit** next to your token
2. Add the missing permissions listed above
3. Make sure `icebergsites.com` zone is included
4. Click **Continue to summary**
5. Click **Update token**

### Option B: Create New Token (Recommended)

1. Click **Create Token** button
2. Choose **Custom token** (or use template below)
3. Give it a name: `tarkwa-deployment`

**Configure Permissions:**

| Resource | Permission | Scope |
|----------|-----------|-------|
| Account - Cloudflare Pages | Edit | Your account |
| Zone - Zone | Read | Include → Specific zone → icebergsites.com |
| Zone - DNS | Edit | Include → Specific zone → icebergsites.com |

**Or Use This Template:**
- Start with template: **"Edit Cloudflare Workers"**
- Then add:
  - Zone → DNS → Edit (for icebergsites.com)

4. **IP Address Filtering**: None (leave as "All IP addresses")
5. **TTL**: Set expiration or leave as no expiry
6. Click **Continue to summary**
7. Click **Create Token**
8. **IMPORTANT**: Copy the new token immediately!

## 📋 What to Do with New Token

If you create a new token, you'll need to update it in your environment. For now, just **save it securely** and we can use it later.

## ✅ Quick Check: Do You Have Access to icebergsites.com Zone?

To verify you can manage the `icebergsites.com` zone:

1. Go to: https://dash.cloudflare.com/
2. Look for **icebergsites.com** in your list of websites
3. Click on it
4. Go to **DNS** → **Records**
5. Can you see and edit DNS records?
   - ✅ **YES** → You have zone access, just need the right API permissions
   - ❌ **NO** → You might not have access to this zone (check account/permissions)

## 🚀 Once Token is Fixed

After you confirm or update your API token permissions:

### Option 1: Still Use Manual Deployment (Easiest)
Even with a working API token, manual deployment via dashboard is simplest:
- See `QUICK_DEPLOY_STEPS.md`
- Takes 5 minutes from your phone
- No proxy issues

### Option 2: Update Token Here
If you create a new token and want to try CLI deployment again:
1. Update the token in your environment
2. We can retry the deployment from CLI

## 🎯 Summary

**What You Need:**
1. API token with **Cloudflare Pages Edit** permission
2. API token with **DNS Edit** permission for `icebergsites.com` zone
3. Access to the `icebergsites.com` zone in your Cloudflare account

**Current Token**: `JTWnVG4rsjT0v3qBf-Ldu6EMMtFIMWEBItedbJny`

Check this token at: https://dash.cloudflare.com/profile/api-tokens
