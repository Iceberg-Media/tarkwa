# How to Get Your DigitalOcean Droplet Information

## Quick Method - Check DigitalOcean Email

1. Check your email for messages from DigitalOcean
2. Look for emails with subject like "Your new Droplet is ready"
3. They contain the IP address and root password

## Method 1: DigitalOcean Web Dashboard

1. Go to: https://cloud.digitalocean.com/
2. Log in with your account
3. Click "Droplets" in the left sidebar
4. You'll see a list of your droplets with:
   - Droplet name
   - IP address (this is what you need)
   - Region
   - Status

5. Click on each droplet to see more details:
   - IP address (copy this)
   - Username (usually `root`)
   - SSH key information

## Method 2: Using DigitalOcean API

If you have an API token:

```bash
# Install doctl (DigitalOcean CLI)
sudo snap install doctl

# Authenticate
doctl auth init

# List droplets
doctl compute droplet list
```

## What You Need for the Backup

For **each droplet**, you need:

1. **IP Address**: Like `134.122.45.67`
   - Found in: DigitalOcean dashboard next to droplet name
   - Format: Four numbers separated by dots

2. **Username**: Usually `root` or your custom username
   - Default is: `root`
   - If you created a non-root user, use that username

3. **SSH Access**: One of these:
   - **Option A: Password** (easier for quick backup)
     - You'll be prompted when connecting
     - Check DigitalOcean email for initial root password
     - Or reset password in DigitalOcean dashboard

   - **Option B: SSH Key** (more secure)
     - Path to your private key file
     - Usually in: `~/.ssh/id_rsa` or `~/.ssh/id_ed25519`

## Example Configuration

If your droplets are:
- Droplet 1: IP `134.122.45.67`, username `root`
- Droplet 2: IP `134.122.45.68`, username `root`

Edit `config.sh` to look like:

```bash
DROPLET1_IP="134.122.45.67"
DROPLET1_USER="root"
DROPLET1_SSH_KEY=""  # Leave empty for password
DROPLET1_NAME="main-server"

DROPLET2_IP="134.122.45.68"
DROPLET2_USER="root"
DROPLET2_SSH_KEY=""  # Leave empty for password
DROPLET2_NAME="multisite-server"
```

## Testing Connection Before Backup

To test if you can connect:

```bash
# Replace with your actual IP and username
ssh root@134.122.45.67

# If it asks "Are you sure you want to continue connecting (yes/no)?"
# Type: yes

# Enter password when prompted

# If successful, you'll see a command prompt
# Type: exit
```

## If You Can't Access Your Droplets

### Check if they're still running:
1. Log into DigitalOcean dashboard
2. Check droplet status - should say "Active"
3. If "Off", click the droplet and click "Power On"

### Reset root password:
1. Go to droplet in DigitalOcean dashboard
2. Click "Access" tab
3. Click "Reset Root Password"
4. New password will be emailed to you

### Check firewall:
1. In droplet page, check "Networking" tab
2. Ensure port 22 (SSH) is allowed

## Common IP Address Locations

Your droplet IPs might also be in:
- WordPress site backups (if you have any)
- DNS records (if you set up domain names)
- Server monitoring tools
- Old SSH connection logs on your computer

## Need Help Finding Your Droplets?

If you can't access the DigitalOcean dashboard:
1. Check your email for DigitalOcean messages
2. Try password reset: https://cloud.digitalocean.com/login
3. Contact DigitalOcean support (they're very helpful)

## How Many Droplets Do You Have?

You mentioned **two droplets**:
1. One with "a few WP installs"
2. One with "multi WP install with dozens of sites"

Both need to be backed up!
