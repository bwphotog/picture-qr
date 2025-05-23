import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminUpload = () => {
  const [albumId, setAlbumId] = useState('');
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleUpload = async () => {
    if (!albumId || files.length === 0) {
      setMessage('กรุณาใส่ชื่ออัลบั้มและเลือกรูปภาพ');
      return;
    }

    const formData = new FormData();
    formData.append('albumId', albumId);
    for (let file of files) {
      formData.append('photos', file);
    }

    try {
      await axios.post(
        'https://picture-qr.onrender.com/api/photos/upload',
        formData
      );
      setMessage('✅ อัปโหลดสำเร็จ');
    } catch (err) {
      setMessage('❌ เกิดข้อผิดพลาดในการอัปโหลด');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold">อัปโหลดภาพ (Admin)</h1>

      <input
        type="text"
        placeholder="ชื่ออัลบั้ม (albumId)"
        className="w-full p-2 border rounded"
        value={albumId}
        onChange={(e) => setAlbumId(e.target.value)}
      />

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        📤 อัปโหลด
      </button>

      {message && <div className="text-sm text-gray-700">{message}</div>}
    </div>
  );
};

export default AdminUpload;