import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AdminAlbumPhotos() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState([]);
  const token = localStorage.getItem("token");

  const fetchPhotos = async () => {
    const res = await fetch(`/api/albums/${id}/photos`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setPhotos(data);
  };

  const uploadPhotos = async () => {
    const formData = new FormData();
    for (const file of files) formData.append("photos", file);

    await fetch(`/api/albums/${id}/photos`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });
    setFiles([]);
    fetchPhotos();
  };

  const setAsCover = async (photoId) => {
    await fetch(`/api/albums/${id}/cover`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ photoId })
    });
    alert("ตั้งภาพหน้าปกสำเร็จ");
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">จัดการภาพในอัลบั้ม</h2>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles([...e.target.files])}
        className="mb-2"
      />
      <button onClick={uploadPhotos} className="bg-green-500 text-white px-4 py-2 rounded mb-4 block">
        📤 อัปโหลดภาพ
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="border rounded overflow-hidden">
            <img src={photo.url} className="w-full h-48 object-cover" />
            <button onClick={() => setAsCover(photo.id)} className="w-full bg-blue-500 text-white py-1">
              🎯 ตั้งเป็นหน้าปก
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAlbumPhotos;
