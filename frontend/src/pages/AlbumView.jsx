import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AlbumView = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://picture-qr.onrender.com/api/photos/${albumId}`)
      .then((res) => setPhotos(res.data.files || []));
  }, [albumId]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">ภาพทั้งหมดในอัลบั้ม: {albumId}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {photos.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`img-${i}`}
            className="w-full h-auto rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumView;