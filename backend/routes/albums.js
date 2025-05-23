const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

let albums = []; // ใช้ in-memory สำหรับตัวอย่าง

router.get('/', verifyToken, (req, res) => res.json(albums));

router.post('/', verifyToken, (req, res) => {
  const { name } = req.body;
  const newAlbum = { id: Date.now().toString(), name, photos: [], cover: null };
  albums.push(newAlbum);
  res.json(newAlbum);
});

router.put('/:id', verifyToken, (req, res) => {
  const album = albums.find(a => a.id === req.params.id);
  if (!album) return res.status(404).send();
  album.name = req.body.name || album.name;
  res.json(album);
});

router.delete('/:id', verifyToken, (req, res) => {
  albums = albums.filter(a => a.id !== req.params.id);
  res.status(204).send();
});

module.exports = router;