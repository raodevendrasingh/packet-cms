# Database Setup Guide

## Local PostgreSQL Database Setup

Your local PostgreSQL database is configured with:
- **Database**: `packet`
- **User**: `packet`
- **Password**: `packet`
- **Host**: `localhost`
- **Port**: `5432`
- **Connection String**: `postgresql://packet:packet@localhost:5432/packet`

## Quick Setup

1. **Ensure PostgreSQL is running**:
   ```bash
   # Arch Linux
   sudo systemctl start postgresql
   
   # macOS (Homebrew)
   brew services start postgresql
   
   # Ubuntu/Debian
   sudo systemctl start postgresql
   ```

2. **Run the setup script**:
   ```bash
   bun run db:setup
   ```
   
   Or manually:
   ```bash
   bash scripts/setup-db.sh
   ```

3. **Set up your `.env` file**:
   Create a `.env` file in the project root with:
   ```env
   DATABASE_URL=postgresql://packet:packet@localhost:5432/packet
   BETTER_AUTH_SECRET=your-secret-key-here
   BETTER_AUTH_URL=http://localhost:3000
   VITE_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run migrations**:
   ```bash
   bun run db:push
   ```

## Manual Setup (Alternative)

If you prefer to set it up manually:

```bash
# Connect as postgres superuser
psql -U postgres

# Run these commands:
CREATE USER packet WITH PASSWORD 'packet';
CREATE DATABASE packet OWNER packet;
GRANT ALL PRIVILEGES ON DATABASE packet TO packet;
\q

# Grant schema privileges
psql -U postgres -d packet -c "GRANT ALL ON SCHEMA public TO packet;"
```

## Verify Connection

Test the connection:
```bash
psql postgresql://packet:packet@localhost:5432/packet -c "SELECT version();"
```

## Troubleshooting

### Collation Version Mismatch
If you see collation version warnings, refresh the template:
```bash
psql -U postgres -c "ALTER DATABASE template1 REFRESH COLLATION VERSION;"
```

### Connection Issues
- Ensure PostgreSQL is running: `pg_isready`
- Check if the port is correct: `psql -U postgres -c "SHOW port;"`
- Verify user exists: `psql -U postgres -c "\du"`

