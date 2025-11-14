#!/bin/bash

# Progress Checker - Run this in a separate terminal to monitor backup progress

source ./config.sh 2>/dev/null || true

echo "========================================="
echo "BACKUP PROGRESS CHECKER"
echo "========================================="
echo "Current time: $(date)"
echo ""

# Check if backup is running
if pgrep -f "run-full-backup.sh" > /dev/null; then
    echo "✓ Backup is currently RUNNING"
    echo ""
else
    echo "⊘ Backup is not running"
    echo ""
    echo "To start backup: ./run-full-backup.sh"
    echo ""
fi

# Check if backup directory exists
if [ ! -d "$BACKUP_ROOT" ]; then
    echo "No backups found yet."
    exit 0
fi

# Show backup directory size
echo "========================================="
echo "BACKUP SIZE"
echo "========================================="
du -sh "$BACKUP_ROOT" 2>/dev/null || echo "No backups yet"
echo ""

# Show individual backup sizes
echo "========================================="
echo "INDIVIDUAL BACKUPS"
echo "========================================="
if [ -d "$BACKUP_ROOT" ]; then
    ls -lht "$BACKUP_ROOT" | head -20
    echo ""
fi

# Show latest log file
echo "========================================="
echo "LATEST LOG (last 30 lines)"
echo "========================================="
LATEST_LOG=$(find "$BACKUP_ROOT" -name "*.log" -type f -printf '%T@ %p\n' 2>/dev/null | sort -n | tail -1 | cut -f2- -d" ")

if [ -n "$LATEST_LOG" ] && [ -f "$LATEST_LOG" ]; then
    echo "Log file: $LATEST_LOG"
    echo ""
    tail -30 "$LATEST_LOG"
else
    echo "No log files found yet"
fi

echo ""
echo "========================================="
echo "DISK SPACE"
echo "========================================="
df -h /home/user 2>/dev/null | grep -v "Filesystem"

echo ""
echo "========================================="
echo ""
echo "To see live updates, run:"
echo "  watch -n 5 ./check-progress.sh"
echo ""
echo "To see live log tail:"
echo "  tail -f $LATEST_LOG"
echo ""
