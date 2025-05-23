#!/bin/bash

# ========== CONFIG ==========
# Connection string สำหรับ PostgreSQL (จาก Render หรือ local)
# ตัวอย่าง: postgres://user:password@host:port/dbname

DATABASE_URL=${DATABASE_URL:-"postgres://your_user:your_pass@localhost:5432/your_db"}

# Path ไปยังไฟล์ SQL
SQL_FILE="init_db.sql"

# ========== EXECUTION ==========
echo "🌐 Connecting to database and applying schema from $SQL_FILE"

# ใช้ psql รันไฟล์ SQL ผ่าน URL
psql "$DATABASE_URL" -f "$SQL_FILE"

if [ $? -eq 0 ]; then
  echo "✅ Database schema applied successfully."
else
  echo "❌ Failed to apply database schema."
  exit 1
fi
