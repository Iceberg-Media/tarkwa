#!/bin/bash

# Quick Setup Script for WSL Ubuntu
# Run this first to prepare your system

echo "========================================="
echo "DigitalOcean Backup - Quick Setup"
echo "========================================="
echo ""

# Update package list
echo "Updating package list..."
sudo apt-get update -qq

# Install required packages
echo "Installing required packages..."
sudo apt-get install -y rsync openssh-client mysql-client gzip

# Make scripts executable
echo "Making scripts executable..."
chmod +x *.sh

# Check if config is set up
if grep -q "YOUR_DROPLET1_IP_HERE" config.sh; then
    echo ""
    echo "========================================="
    echo "IMPORTANT: Configure your droplets"
    echo "========================================="
    echo ""
    echo "Please edit config.sh and add your droplet details:"
    echo ""
    echo "  nano config.sh"
    echo ""
    echo "You need to provide:"
    echo "  1. IP address of each droplet"
    echo "  2. SSH username (usually 'root')"
    echo "  3. SSH key path (or leave empty for password)"
    echo ""
    read -p "Press Enter to open config.sh now, or Ctrl+C to do it later..."
    nano config.sh
fi

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. If you haven't already, edit config.sh:"
echo "   nano config.sh"
echo ""
echo "2. Run the backup:"
echo "   ./run-full-backup.sh"
echo ""
echo "3. Let it run overnight (it will take hours for large sites)"
echo ""
