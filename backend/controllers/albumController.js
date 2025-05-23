// ตั้งค่ารูปหน้าปกอัลบั้ม
exports.setCoverPhoto = async (req, res) => {
  const albumId = req.params.id;
  const { photoId } = req.body;

  try {
    await db.query('UPDATE albums SET cover_photo_id = $1 WHERE id = $2', [photoId, albumId]);
    res.json({ message: 'Cover photo set successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to set cover photo' });
  }
};
