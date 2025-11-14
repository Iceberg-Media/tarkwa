#!/bin/bash

# Single Droplet Backup Script
# Usage: ./backup-droplet.sh <droplet_ip> <droplet_user> <droplet_name> [ssh_key]

set -e

# Load configuration
source ./config.sh

DROPLET_IP=$1
DROPLET_USER=$2
DROPLET_NAME=$3
SSH_KEY=$4

if [ -z "$DROPLET_IP" ] || [ -z "$DROPLET_USER" ] || [ -z "$DROPLET_NAME" ]; then
    echo "Error: Missing required parameters"
    echo "Usage: $0 <ip> <user> <name> [ssh_key]"
    exit 1
fi

# Set up SSH command
if [ -n "$SSH_KEY" ] && [ -f "$SSH_KEY" ]; then
    SSH_CMD="ssh -i $SSH_KEY $SSH_OPTS"
    SCP_CMD="scp -i $SSH_KEY $SSH_OPTS"
    RSYNC_CMD="rsync -avz -e \"ssh -i $SSH_KEY $SSH_OPTS\""
else
    SSH_CMD="ssh $SSH_OPTS"
    SCP_CMD="scp $SSH_OPTS"
    RSYNC_CMD="rsync -avz -e \"ssh $SSH_OPTS\""
fi

# Create backup directory
BACKUP_DIR="$BACKUP_ROOT/${DROPLET_NAME}_${DATE_STAMP}"
mkdir -p "$BACKUP_DIR/files"
mkdir -p "$BACKUP_DIR/databases"
mkdir -p "$BACKUP_DIR/logs"

echo "========================================"
echo "Backing up: $DROPLET_NAME ($DROPLET_IP)"
echo "Backup location: $BACKUP_DIR"
echo "Started: $(date)"
echo "========================================"

# Log file
LOG_FILE="$BACKUP_DIR/logs/backup.log"

# Test connection
echo "Testing connection to $DROPLET_IP..."
if ! $SSH_CMD ${DROPLET_USER}@${DROPLET_IP} "echo 'Connection successful'" 2>&1 | tee -a "$LOG_FILE"; then
    echo "ERROR: Cannot connect to $DROPLET_IP" | tee -a "$LOG_FILE"
    exit 1
fi

# Get system information
echo "Gathering system information..." | tee -a "$LOG_FILE"
$SSH_CMD ${DROPLET_USER}@${DROPLET_IP} "uname -a; df -h; free -h" > "$BACKUP_DIR/system-info.txt" 2>&1

# Backup databases
echo "" | tee -a "$LOG_FILE"
echo "========================================"
echo "BACKING UP DATABASES"
echo "========================================"

# Create database backup script on remote server
cat > /tmp/db_backup.sh << 'DBSCRIPT'
#!/bin/bash
BACKUP_DIR="/tmp/db_backup_$$"
mkdir -p $BACKUP_DIR

# Try to find MySQL/MariaDB
if command -v mysql >/dev/null 2>&1; then
    echo "MySQL/MariaDB found"

    # Get list of databases
    DATABASES=$(mysql -u root -e "SHOW DATABASES;" 2>/dev/null | grep -Ev "(Database|information_schema|performance_schema|mysql|sys)")

    if [ $? -eq 0 ]; then
        echo "Databases found: $DATABASES"

        # Backup each database
        for DB in $DATABASES; do
            echo "Backing up database: $DB"
            mysqldump -u root --single-transaction --quick --lock-tables=false "$DB" > "$BACKUP_DIR/${DB}.sql" 2>/dev/null
            if [ $? -eq 0 ]; then
                gzip "$BACKUP_DIR/${DB}.sql"
                echo "✓ $DB backed up successfully"
            else
                echo "✗ Failed to backup $DB"
            fi
        done

        # Full backup
        echo "Creating full database backup..."
        mysqldump -u root --all-databases --single-transaction --quick --lock-tables=false > "$BACKUP_DIR/all-databases.sql" 2>/dev/null
        if [ $? -eq 0 ]; then
            gzip "$BACKUP_DIR/all-databases.sql"
            echo "✓ Full backup completed"
        fi
    else
        echo "Could not access MySQL. Trying with credentials..."
        # Try to find WordPress config for credentials
        if [ -f /var/www/html/wp-config.php ]; then
            DB_NAME=$(grep DB_NAME /var/www/html/wp-config.php | cut -d \' -f 4)
            DB_USER=$(grep DB_USER /var/www/html/wp-config.php | cut -d \' -f 4)
            DB_PASS=$(grep DB_PASSWORD /var/www/html/wp-config.php | cut -d \' -f 4)

            echo "Found WordPress config, backing up database: $DB_NAME"
            mysqldump -u "$DB_USER" -p"$DB_PASS" --single-transaction --quick "$DB_NAME" > "$BACKUP_DIR/${DB_NAME}.sql" 2>/dev/null
            gzip "$BACKUP_DIR/${DB_NAME}.sql"
        fi
    fi
else
    echo "MySQL/MariaDB not found on this server"
fi

# List backup files
echo "Database backup files:"
ls -lh $BACKUP_DIR/
echo $BACKUP_DIR
DBSCRIPT

# Copy and execute database backup script
$SCP_CMD /tmp/db_backup.sh ${DROPLET_USER}@${DROPLET_IP}:/tmp/ 2>&1 | tee -a "$LOG_FILE"
DB_BACKUP_DIR=$($SSH_CMD ${DROPLET_USER}@${DROPLET_IP} "bash /tmp/db_backup.sh" 2>&1 | tee -a "$LOG_FILE" | tail -1)

# Download database backups
echo "Downloading database backups..." | tee -a "$LOG_FILE"
if [ -n "$DB_BACKUP_DIR" ]; then
    eval $RSYNC_CMD ${DROPLET_USER}@${DROPLET_IP}:${DB_BACKUP_DIR}/ "$BACKUP_DIR/databases/" 2>&1 | tee -a "$LOG_FILE" || true
    $SSH_CMD ${DROPLET_USER}@${DROPLET_IP} "rm -rf $DB_BACKUP_DIR" 2>&1 | tee -a "$LOG_FILE"
fi

# Backup files
echo "" | tee -a "$LOG_FILE"
echo "========================================"
echo "BACKING UP FILES"
echo "========================================"

for PATH_TO_BACKUP in "${BACKUP_PATHS[@]}"; do
    # Check if path exists on remote server
    if $SSH_CMD ${DROPLET_USER}@${DROPLET_IP} "test -e $PATH_TO_BACKUP" 2>/dev/null; then
        echo "Backing up: $PATH_TO_BACKUP" | tee -a "$LOG_FILE"

        # Create safe directory name
        SAFE_NAME=$(echo "$PATH_TO_BACKUP" | sed 's/\//-/g' | sed 's/^-//')
        DEST_DIR="$BACKUP_DIR/files/$SAFE_NAME"
        mkdir -p "$DEST_DIR"

        # Use rsync for efficient transfer
        eval $RSYNC_CMD ${DROPLET_USER}@${DROPLET_IP}:${PATH_TO_BACKUP}/ "$DEST_DIR/" 2>&1 | tee -a "$LOG_FILE" || {
            echo "Warning: Some files in $PATH_TO_BACKUP could not be backed up" | tee -a "$LOG_FILE"
        }

        echo "✓ Completed: $PATH_TO_BACKUP" | tee -a "$LOG_FILE"
    else
        echo "⊘ Path not found: $PATH_TO_BACKUP" | tee -a "$LOG_FILE"
    fi
done

# Backup WordPress-specific locations
echo "" | tee -a "$LOG_FILE"
echo "Searching for WordPress installations..." | tee -a "$LOG_FILE"

WP_PATHS=$($SSH_CMD ${DROPLET_USER}@${DROPLET_IP} "find /var/www /home -name 'wp-config.php' 2>/dev/null" 2>&1 || echo "")

if [ -n "$WP_PATHS" ]; then
    echo "Found WordPress installations:" | tee -a "$LOG_FILE"
    echo "$WP_PATHS" | tee -a "$LOG_FILE"

    # Save WordPress paths
    echo "$WP_PATHS" > "$BACKUP_DIR/wordpress-installations.txt"
fi

# Create backup summary
echo "" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"
echo "BACKUP SUMMARY" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"
echo "Droplet: $DROPLET_NAME ($DROPLET_IP)" | tee -a "$LOG_FILE"
echo "Completed: $(date)" | tee -a "$LOG_FILE"
echo "Backup location: $BACKUP_DIR" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "Disk usage:" | tee -a "$LOG_FILE"
du -sh "$BACKUP_DIR"/* | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "Total backup size:" | tee -a "$LOG_FILE"
du -sh "$BACKUP_DIR" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"

# Cleanup
rm -f /tmp/db_backup.sh

echo ""
echo "✓ Backup completed successfully!"
echo "Location: $BACKUP_DIR"
