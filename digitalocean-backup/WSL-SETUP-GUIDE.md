# WSL Ubuntu Setup Guide for Windows 11

## Step 1: Check if WSL is Already Installed

1. Press `Win + X`
2. Click "Terminal" or "Windows PowerShell"
3. Type: `wsl --version`

If you see version info, WSL is installed - **skip to Step 4**.

If you see an error, continue to Step 2.

## Step 2: Install WSL (if needed)

### Quick Install (Windows 11):

1. Open PowerShell as Administrator:
   - Press `Win + X`
   - Click "Windows Terminal (Admin)" or "PowerShell (Admin)"

2. Run this command:
   ```powershell
   wsl --install -d Ubuntu
   ```

3. **Restart your computer** when prompted

4. After restart, Ubuntu will automatically open and finish installing

### Manual Install (if quick install doesn't work):

1. Open PowerShell as Administrator
2. Run these commands:
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
3. Restart your computer
4. Download and install: https://aka.ms/wslubuntu
5. Open "Ubuntu" from Start menu

## Step 3: Set Up Ubuntu

When Ubuntu opens for the first time:

1. Wait for installation to complete (few minutes)
2. Create a username (lowercase, no spaces)
   - Example: `myname`
3. Create a password
   - **Important**: You won't see characters as you type - this is normal!
   - Type password, press Enter
   - Type same password again, press Enter
4. You'll see a command prompt like: `myname@DESKTOP:~$`

## Step 4: Access Your Files in WSL

Your Windows drives are accessible in WSL:

- `C:\` drive is at: `/mnt/c/`
- `D:\` drive is at: `/mnt/d/`

To navigate to this backup folder:
```bash
cd /home/user/tarkwa/digitalocean-backup
```

Or if you want to save backups to your Windows Documents:
```bash
cd /mnt/c/Users/YourWindowsUsername/Documents
```

## Step 5: Prevent Sleep During Backup

**CRITICAL**: Your backup might take hours. Prevent sleep:

### Option 1: Keep laptop plugged in and lid open
- Easiest method
- Just leave it running overnight

### Option 2: Change Windows power settings
1. Press `Win + I` (Settings)
2. Go to "System" > "Power"
3. Set "When plugged in, put my device to sleep after" to **Never**
4. Set screen to turn off after 30 minutes (saves energy)

### Option 3: Use PowerToys Awake (recommended)
1. Install PowerToys: https://aka.ms/installpowertoys
2. Open PowerToys
3. Click "Awake"
4. Select "Keep awake indefinitely" or "Keep awake for specific time"
5. Your PC won't sleep even with lid closed

## Step 6: Run the Backup

1. Open Ubuntu from Start menu (or type `wsl` in any terminal)

2. Navigate to backup folder:
   ```bash
   cd /home/user/tarkwa/digitalocean-backup
   ```

3. Run quick setup (first time only):
   ```bash
   chmod +x quick-setup.sh
   ./quick-setup.sh
   ```

4. Edit configuration with your droplet details:
   ```bash
   nano config.sh
   ```
   - Use arrow keys to move
   - Type your droplet IPs
   - Press `Ctrl + X` to exit
   - Press `Y` to save
   - Press `Enter` to confirm

5. Start the backup:
   ```bash
   ./run-full-backup.sh
   ```

6. **Let it run overnight**
   - Don't close the terminal window
   - You can minimize it
   - Check progress occasionally

## Step 7: Monitor Progress

### See current progress:
Just look at the terminal - it shows what it's doing

### Check log file while running:
Open a new terminal and run:
```bash
cd /home/user/tarkwa/digitalocean-backup/backups
ls -lh
tail -f full-backup_*.log
```

Press `Ctrl + C` to stop viewing logs

### Check backup size:
```bash
cd /home/user/tarkwa/digitalocean-backup/backups
du -sh *
```

## Step 8: After Backup Completes

1. Verify backups exist:
   ```bash
   ls -lh /home/user/tarkwa/digitalocean-backup/backups/
   ```

2. Check total size:
   ```bash
   du -sh /home/user/tarkwa/digitalocean-backup/backups/
   ```

3. **Copy to safe location** (IMPORTANT!):

   ### Option A: Copy to Windows Documents
   ```bash
   cp -r /home/user/tarkwa/digitalocean-backup/backups /mnt/c/Users/YourWindowsUsername/Documents/DO-Backups
   ```

   ### Option B: Copy to external drive
   ```bash
   # If external drive is E:
   cp -r /home/user/tarkwa/digitalocean-backup/backups /mnt/e/DO-Backups
   ```

4. **Compress for storage** (optional):
   ```bash
   cd /home/user/tarkwa/digitalocean-backup
   tar -czf do-backups-$(date +%Y%m%d).tar.gz backups/
   ```

## Troubleshooting

### "Permission denied" error:
```bash
chmod +x *.sh
```

### "Connection refused" error:
- Check droplet IP address
- Check if droplet is still running in DigitalOcean
- Verify port 22 is open

### "No such file or directory":
```bash
# Check where you are:
pwd

# List files:
ls -la

# Navigate to correct folder:
cd /home/user/tarkwa/digitalocean-backup
```

### Terminal closes unexpectedly:
- Keep terminal window open
- Don't close laptop lid (unless PowerToys Awake is running)

### Out of disk space:
```bash
# Check disk space:
df -h

# Free up space in Windows
# Then check again
```

## Quick Reference Commands

```bash
# Navigate to backup folder
cd /home/user/tarkwa/digitalocean-backup

# Run backup
./run-full-backup.sh

# Check progress
tail -f backups/full-backup_*.log

# Check size
du -sh backups/

# List backups
ls -lh backups/

# Copy to Windows
cp -r backups /mnt/c/Users/YourName/Documents/
```

## Need More Help?

### WSL Issues:
- https://learn.microsoft.com/en-us/windows/wsl/troubleshooting

### Check WSL status:
```powershell
# In PowerShell (not WSL):
wsl --status
wsl --list --verbose
```

### Restart WSL:
```powershell
# In PowerShell:
wsl --shutdown
# Then open Ubuntu again
```
