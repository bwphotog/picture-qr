ALTER TABLE albums ADD COLUMN IF NOT EXISTS cover_photo_id TEXT;

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  folder_id TEXT,
  cover_photo_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ALTER TABLE albums ADD COLUMN IF NOT EXISTS cover_photo_id TEXT;
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  album_id INTEGER REFERENCES albums(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

