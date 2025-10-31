#!/bin/bash

# Setup script for local PostgreSQL database
# Creates database and user for packet-cms

set -e

DB_NAME="packet"
DB_USER="packet"
DB_PASSWORD="packet"
DB_HOST="localhost"
DB_PORT="5432"

echo "🚀 Setting up local PostgreSQL database..."

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL first."
    echo "   On Arch Linux: sudo pacman -S postgresql"
    echo "   On Ubuntu/Debian: sudo apt-get install postgresql"
    echo "   On macOS: brew install postgresql"
    exit 1
fi

# Check if PostgreSQL is running
if ! pg_isready -h $DB_HOST -p $DB_PORT &> /dev/null; then
    echo "⚠️  PostgreSQL is not running. Starting PostgreSQL..."
    echo "   On Arch Linux: sudo systemctl start postgresql"
    echo "   On macOS with Homebrew: brew services start postgresql"
    echo "   Or start manually and run this script again."
    exit 1
fi

echo "✅ PostgreSQL is running"

# Create user if it doesn't exist
echo "📝 Creating user '$DB_USER'..."
psql -h $DB_HOST -p $DB_PORT -U postgres -tc "SELECT 1 FROM pg_user WHERE usename = '$DB_USER'" | grep -q 1 || \
    psql -h $DB_HOST -p $DB_PORT -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"

# Refresh template collation version (fixes version mismatch warnings)
echo "📝 Refreshing template collation version..."
psql -h $DB_HOST -p $DB_PORT -U postgres -c "ALTER DATABASE template1 REFRESH COLLATION VERSION;" 2>/dev/null || true

# Create database if it doesn't exist (using template0 to avoid collation issues)
echo "📝 Creating database '$DB_NAME'..."
psql -h $DB_HOST -p $DB_PORT -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1 || \
    psql -h $DB_HOST -p $DB_PORT -U postgres -c "CREATE DATABASE $DB_NAME OWNER $DB_USER TEMPLATE template0;"

# Grant privileges
echo "📝 Granting privileges..."
psql -h $DB_HOST -p $DB_PORT -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

echo ""
echo "✅ Database setup complete!"
echo ""
echo "Connection string:"
echo "postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
echo ""
echo "Next steps:"
echo "1. Make sure DATABASE_URL is set in your .env file:"
echo "   DATABASE_URL=postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
echo "2. Run migrations: bun run db:push"
echo ""

