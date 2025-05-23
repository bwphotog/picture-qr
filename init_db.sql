-- ========================
-- Create table: admins
-- ========================
CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========================
-- Create table: albums
-- ========================
CREATE TABLE IF NOT EXISTS albums (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  folder_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========================
-- Add column cover_photo_id if missing
-- ========================
ALTER TABLE albums ADD COLUMN IF NOT EXISTS cover_photo_id TEXT;

-- ========================
-- Create table: photos
-- ========================
CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  album_id INTEGER REFERENCES albums(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
