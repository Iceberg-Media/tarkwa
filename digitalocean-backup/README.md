# DigitalOcean Droplet Backup Instructions

## URGENT: Run This Tonight Before Your Hosting Expires

This will backup ALL files and databases from your two DigitalOcean droplets.

## Quick Start for WSL Ubuntu on Windows 11

### 1. Open WSL Ubuntu
- Press `Win + R`
- Type: `wsl` or `ubuntu`
- Press Enter

### 2. Navigate to this directory
```bash
cd /home/user/tarkwa/digitalocean-backup
```

### 3. Set up your DigitalOcean credentials

Edit the `config.sh` file with your droplet details:
```bash
nano config.sh
```

You need to add:
- Droplet IP addresses
- SSH username (usually 'root' or your username)
- SSH key path or password

### 4. Make scripts executable
```bash
chmod +x *.sh
```

### 5. Run the backup (will run overnight)
```bash
./run-full-backup.sh
```

This will:
- Connect to both droplets
- Backup all WordPress files
- Export all MySQL databases
- Save everything to `./backups/` directory
- Log everything to `backup.log`

### 6. Let it run overnight
- The terminal will show progress
- You can close the laptop lid (configure Ubuntu to not sleep)
- Check `backup.log` for progress

## What Gets Backed Up

### Files:
- `/var/www/` - All WordPress installations
- `/etc/nginx/` or `/etc/apache2/` - Web server configs
- `/etc/php/` - PHP configurations
- `/etc/mysql/` - MySQL configurations
- `/home/` - User files
- SSL certificates

### Databases:
- All MySQL/MariaDB databases
- Individual SQL dumps for each database
- Complete database server dump

## Backup Location
All backups will be in: `/home/user/tarkwa/digitalocean-backup/backups/`

Structure:
```
backups/
├── droplet1-[IP]/
│   ├── files/
│   │   ├── var-www/
│   │   ├── etc-nginx/
│   │   └── ...
│   └── databases/
│       ├── all-databases.sql
│       ├── wordpress_db1.sql
│       └── ...
└── droplet2-[IP]/
    ├── files/
    └── databases/
```

## Troubleshooting

### If SSH asks for password:
You can use password authentication, or set up SSH keys.

### If permission denied:
Make sure you're using the correct username (root or your user).

### If connection refused:
Check the IP address and that the droplet is still running.

## After Backup Completes

1. Verify backups exist in `./backups/` directory
2. Check file sizes are reasonable
3. Keep this backup safe
4. You can restore to new servers later

## Estimated Time
- Small sites (< 1GB): 10-30 minutes
- Medium sites (1-10GB): 1-3 hours
- Large sites (10-50GB): 3-8 hours
- Multi-site with dozens of sites: 4-12 hours

The script will show progress as it goes.
