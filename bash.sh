git init
git remote add origin https://github.com/bwphotog/picture-qr.git
git add .
git commit -m "Initial commit"
git push -u origin master

git add .
git commit -m "เพิ่มระบบ JWT auth และ admin album management"
git push origin main

psql -U postgres -d pictureqr -f pgsql.sql

chmod +x init_db.sh
