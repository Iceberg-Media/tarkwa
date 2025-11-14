#!/bin/bash

# DigitalOcean Droplet Configuration
# IMPORTANT: Fill in your droplet details below

# Droplet 1 Configuration
DROPLET1_IP="YOUR_DROPLET1_IP_HERE"          # e.g., "134.122.45.67"
DROPLET1_USER="root"                          # Usually 'root' or your username
DROPLET1_SSH_KEY=""                           # Leave empty to use password, or path to SSH key
DROPLET1_NAME="droplet1"                      # Friendly name for backup folder

# Droplet 2 Configuration
DROPLET2_IP="YOUR_DROPLET2_IP_HERE"          # e.g., "134.122.45.68"
DROPLET2_USER="root"                          # Usually 'root' or your username
DROPLET2_SSH_KEY=""                           # Leave empty to use password, or path to SSH key
DROPLET2_NAME="droplet2"                      # Friendly name for backup folder

# Backup Configuration
BACKUP_ROOT="/home/user/tarkwa/digitalocean-backup/backups"
DATE_STAMP=$(date +%Y%m%d_%H%M%S)

# What to backup (paths on the droplets)
BACKUP_PATHS=(
    "/var/www"
    "/etc/nginx"
    "/etc/apache2"
    "/etc/php"
    "/etc/mysql"
    "/etc/letsencrypt"
    "/home"
)

# MySQL/MariaDB credentials (on the droplets)
# The script will try to use root with no password first,
# then prompt if needed
MYSQL_USER="root"
MYSQL_PASSWORD=""  # Leave empty to be prompted

# SSH Options
SSH_OPTS="-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=10"

# Compression
USE_COMPRESSION=true  # Set to false if you want faster backup without compression
