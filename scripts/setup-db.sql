-- SQL script to set up local PostgreSQL database for packet-cms
-- Run this with: psql -U postgres -f scripts/setup-db.sql

-- Create user if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_user WHERE usename = 'packet') THEN
        CREATE USER packet WITH PASSWORD 'packet';
    END IF;
END
$$;

-- Create database if it doesn't exist
SELECT 'CREATE DATABASE packet OWNER packet'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'packet')\gexec

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE packet TO packet;

-- Connect to the packet database and grant schema privileges
\c packet
GRANT ALL ON SCHEMA public TO packet;

