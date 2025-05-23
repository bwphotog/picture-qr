import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SelectCover = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [cover, setCover] = useState('');

  useEffect(() => {
    axios
      .get(`https://picture-qr.onrender.com/api/photos/${albumId}`)
      .then((res) => setPhotos(res.data.files || []));
  }, [albumId]);

  const setAsCover = async (photoUrl) => {
    try {
      await axios.post(
        `https://picture-qr.onrender.com/api/photos/cover`,
        { albumId, photoUrl }
      );
      setCover(photoUrl);
    } catch (err) {
      alert('ตั้งภาพหน้าปกไม่สำเร็จ');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">เลือกภาพหน้าปกสำหรับอัลบั้ม: {albumId}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {photos.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`cover-${i}`}
            className={`w-full h-auto rounded shadow cursor-pointer ${
              url === cover ? 'ring-4 ring-blue-500' : ''
            }`}
            onClick={() => setAsCover(url)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectCover;