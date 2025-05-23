#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# ตรวจสอบว่ามี DATABASE_URL หรือยัง
if [ -z "$DATABASE_URL" ]; then
  echo "❌ DATABASE_URL not set. Please export DATABASE_URL first."
  echo "For local: export DATABASE_URL=postgres://user:password@localhost:5432/dbname"
  exit 1
fi

# แปลง URL ให้เป็นพารามิเตอร์สำหรับ psql
echo "📡 Connecting to database..."
echo "👉 Using: $DATABASE_URL"

# สร้างตารางด้วย psql
psql "$DATABASE_URL" <<EOF
CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS albums (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  folder_id TEXT,
  cover_photo_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  album_id INTEGER REFERENCES albums(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
EOF

echo "✅ Database initialized successfully!"
