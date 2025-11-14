#!/bin/bash

# Master Backup Script - Backs up all DigitalOcean droplets
# This script will run overnight and backup everything

set -e

echo "========================================="
echo "DIGITALOCEAN FULL BACKUP"
echo "========================================="
echo "Started: $(date)"
echo ""

# Load configuration
if [ ! -f ./config.sh ]; then
    echo "ERROR: config.sh not found!"
    echo "Please create config.sh with your droplet details"
    exit 1
fi

source ./config.sh

# Check if configuration is filled out
if [ "$DROPLET1_IP" = "YOUR_DROPLET1_IP_HERE" ]; then
    echo "ERROR: Please edit config.sh and add your droplet IP addresses"
    echo ""
    echo "To edit: nano config.sh"
    echo ""
    echo "You need to fill in:"
    echo "  - DROPLET1_IP"
    echo "  - DROPLET2_IP"
    echo "  - Usernames (usually 'root')"
    exit 1
fi

# Create backup root directory
mkdir -p "$BACKUP_ROOT"

# Create master log file
MASTER_LOG="$BACKUP_ROOT/full-backup_${DATE_STAMP}.log"
echo "Full backup started: $(date)" > "$MASTER_LOG"

# Make backup script executable
chmod +x ./backup-droplet.sh

# Function to backup a droplet
backup_droplet() {
    local IP=$1
    local USER=$2
    local NAME=$3
    local KEY=$4

    echo "" | tee -a "$MASTER_LOG"
    echo "=========================================" | tee -a "$MASTER_LOG"
    echo "Starting backup: $NAME" | tee -a "$MASTER_LOG"
    echo "=========================================" | tee -a "$MASTER_LOG"

    if [ -n "$KEY" ]; then
        ./backup-droplet.sh "$IP" "$USER" "$NAME" "$KEY" 2>&1 | tee -a "$MASTER_LOG"
    else
        ./backup-droplet.sh "$IP" "$USER" "$NAME" 2>&1 | tee -a "$MASTER_LOG"
    fi

    if [ $? -eq 0 ]; then
        echo "✓ $NAME backup completed successfully" | tee -a "$MASTER_LOG"
    else
        echo "✗ $NAME backup failed!" | tee -a "$MASTER_LOG"
        return 1
    fi
}

# Backup Droplet 1
if [ -n "$DROPLET1_IP" ] && [ "$DROPLET1_IP" != "YOUR_DROPLET1_IP_HERE" ]; then
    backup_droplet "$DROPLET1_IP" "$DROPLET1_USER" "$DROPLET1_NAME" "$DROPLET1_SSH_KEY"
else
    echo "Skipping Droplet 1 (not configured)" | tee -a "$MASTER_LOG"
fi

# Backup Droplet 2
if [ -n "$DROPLET2_IP" ] && [ "$DROPLET2_IP" != "YOUR_DROPLET2_IP_HERE" ]; then
    backup_droplet "$DROPLET2_IP" "$DROPLET2_USER" "$DROPLET2_NAME" "$DROPLET2_SSH_KEY"
else
    echo "Skipping Droplet 2 (not configured)" | tee -a "$MASTER_LOG"
fi

# Final summary
echo "" | tee -a "$MASTER_LOG"
echo "=========================================" | tee -a "$MASTER_LOG"
echo "FULL BACKUP COMPLETED" | tee -a "$MASTER_LOG"
echo "=========================================" | tee -a "$MASTER_LOG"
echo "Finished: $(date)" | tee -a "$MASTER_LOG"
echo "" | tee -a "$MASTER_LOG"
echo "Total backup size:" | tee -a "$MASTER_LOG"
du -sh "$BACKUP_ROOT" | tee -a "$MASTER_LOG"
echo "" | tee -a "$MASTER_LOG"
echo "Backups saved to: $BACKUP_ROOT" | tee -a "$MASTER_LOG"
echo "Log file: $MASTER_LOG" | tee -a "$MASTER_LOG"
echo "" | tee -a "$MASTER_LOG"

# List all backups
echo "Backup contents:" | tee -a "$MASTER_LOG"
ls -lh "$BACKUP_ROOT" | tee -a "$MASTER_LOG"

echo ""
echo "========================================="
echo "ALL BACKUPS COMPLETED SUCCESSFULLY!"
echo "========================================="
echo ""
echo "Your backups are safe in: $BACKUP_ROOT"
echo ""
echo "Next steps:"
echo "1. Verify the backups exist and have reasonable sizes"
echo "2. Optionally compress the entire backup folder"
echo "3. Consider copying to external drive or cloud storage"
echo ""
