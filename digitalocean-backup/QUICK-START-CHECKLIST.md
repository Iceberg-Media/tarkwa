# Quick Start Checklist - Backup Your Droplets TONIGHT

## ⚡ URGENT - Do This Before Your Hosting Expires!

Follow these steps in order:

## ☐ Step 1: Open WSL Ubuntu (2 minutes)

- [ ] Press `Win + R`
- [ ] Type: `wsl` or `ubuntu`
- [ ] Press Enter
- [ ] You should see a command prompt

**Need help?** See: `WSL-SETUP-GUIDE.md`

## ☐ Step 2: Navigate to Backup Folder (30 seconds)

```bash
cd /home/user/tarkwa/digitalocean-backup
```

## ☐ Step 3: Run Setup Script (5 minutes)

```bash
chmod +x quick-setup.sh
./quick-setup.sh
```

This will:
- Install required tools
- Make scripts executable
- Open config editor

## ☐ Step 4: Get Your Droplet Info (10 minutes)

You need:
1. **Droplet 1 IP address**
2. **Droplet 2 IP address**
3. **Username** (usually `root`)
4. **Password** (from DigitalOcean email)

### How to get this info:

**Option 1: DigitalOcean Dashboard**
- Go to: https://cloud.digitalocean.com/
- Click "Droplets"
- Copy the IP addresses

**Option 2: Check Email**
- Search email for "DigitalOcean"
- Look for "Your new Droplet is ready"
- IP and password are in the email

**Need help?** See: `GET-DROPLET-INFO.md`

## ☐ Step 5: Configure Droplets (5 minutes)

```bash
nano config.sh
```

Edit these lines:
```bash
DROPLET1_IP="PUT_YOUR_FIRST_IP_HERE"      # Like "134.122.45.67"
DROPLET1_USER="root"                       # Usually "root"
DROPLET1_NAME="main-wordpress"             # Any friendly name

DROPLET2_IP="PUT_YOUR_SECOND_IP_HERE"     # Like "134.122.45.68"
DROPLET2_USER="root"                       # Usually "root"
DROPLET2_NAME="multisite-wordpress"        # Any friendly name
```

**To save:**
- Press `Ctrl + X`
- Press `Y`
- Press `Enter`

## ☐ Step 6: Test Connection (2 minutes)

```bash
# Replace with YOUR actual IP:
ssh root@YOUR_DROPLET1_IP

# Type: yes (if asked)
# Enter password
# If successful: type "exit"
```

If this works, you're ready!

## ☐ Step 7: Prevent Sleep (2 minutes)

**Choose one:**

- [ ] **Option A**: Plug in laptop, keep lid open
- [ ] **Option B**: Windows Settings > Power > Set sleep to "Never"
- [ ] **Option C**: Install PowerToys Awake

**Why?** Backup takes hours. Computer can't sleep!

## ☐ Step 8: START THE BACKUP! (1 minute)

```bash
./run-full-backup.sh
```

**NOW:**
- ✓ Watch for a moment to ensure it connects
- ✓ See progress messages appearing
- ✓ Let it run overnight
- ✓ Don't close the terminal window
- ✓ You can minimize it

## ☐ Step 9: Go to Sleep! (8 hours)

Your backup will run all night!

Expected time:
- Small sites (< 5GB): 1-2 hours
- Medium sites (5-20GB): 2-4 hours
- Large sites (20-50GB): 4-8 hours
- Huge sites (50GB+): 8-12 hours

## ☐ Step 10: Morning - Verify Backups (5 minutes)

```bash
# Check if backups exist:
ls -lh /home/user/tarkwa/digitalocean-backup/backups/

# Check total size:
du -sh /home/user/tarkwa/digitalocean-backup/backups/

# Read the log:
cat /home/user/tarkwa/digitalocean-backup/backups/full-backup_*.log
```

Look for:
- ✓ "BACKUP COMPLETED SUCCESSFULLY"
- ✓ Backup folders exist for both droplets
- ✓ File sizes seem reasonable

## ☐ Step 11: Copy Backups to Safe Place (30 minutes)

```bash
# Copy to Windows Documents:
cp -r /home/user/tarkwa/digitalocean-backup/backups /mnt/c/Users/YOURNAME/Documents/DigitalOcean-Backups

# Or copy to external drive (if E: drive):
cp -r /home/user/tarkwa/digitalocean-backup/backups /mnt/e/DigitalOcean-Backups
```

**IMPORTANT**: Keep multiple copies!

## ☐ Step 12: Compress Backups (optional, 1 hour)

```bash
cd /home/user/tarkwa/digitalocean-backup
tar -czf do-backups-$(date +%Y%m%d).tar.gz backups/
```

This creates a single compressed file easier to move/store.

---

## 🆘 Emergency Help

### Nothing is working:
1. Read: `WSL-SETUP-GUIDE.md`
2. Read: `GET-DROPLET-INFO.md`
3. Check: `README.md`

### Can't find droplet IPs:
- Check DigitalOcean email
- Login: https://cloud.digitalocean.com/
- Click "Droplets" - IPs are listed there

### Permission errors:
```bash
chmod +x *.sh
```

### Connection refused:
- Double-check IP address
- Try from web browser: `ssh root@YOUR_IP`
- Check if droplet is still running in DO dashboard

---

## ✅ Success Checklist

After backup completes, verify:

- [ ] Both droplets backed up
- [ ] Database files exist (*.sql.gz files)
- [ ] WordPress files exist (var-www folder)
- [ ] Total backup size makes sense
- [ ] Backups copied to Windows/external drive
- [ ] Multiple copies in different locations

---

## What Gets Backed Up?

### Files:
- ✓ All WordPress installations (`/var/www`)
- ✓ Web server configs (nginx/apache)
- ✓ PHP configurations
- ✓ SSL certificates
- ✓ All databases (MySQL/MariaDB)

### Databases:
- ✓ Individual database dumps for each WP site
- ✓ Complete server database dump
- ✓ All compressed (.sql.gz)

---

## Timeline

| Time | Task |
|------|------|
| **Tonight 8:00 PM** | Start: Get droplet IPs |
| **Tonight 8:30 PM** | Configure and test connection |
| **Tonight 9:00 PM** | START BACKUP |
| **Tonight 9:00 PM - Morning** | Sleep while backup runs |
| **Morning 8:00 AM** | Verify backups completed |
| **Morning 8:30 AM** | Copy to safe locations |
| **Done!** | Sites are safe! |

---

## After Backup is Complete

You'll have:
1. ✓ All WordPress files
2. ✓ All databases
3. ✓ All configurations
4. ✓ SSL certificates
5. ✓ Everything needed to rebuild

You can then:
- Restore to new DigitalOcean droplets
- Move to different hosting
- Keep as archive
- Rebuild sites from scratch with your data

**Your websites are SAFE!** 🎉
