import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAlbums() {
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/admin/login");
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const res = await fetch("/api/albums", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setAlbums(data);
  };

  const createAlbum = async () => {
    const res = await fetch("/api/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name: newAlbumName })
    });
    const data = await res.json();
    setAlbums([...albums, data]);
    setNewAlbumName("");
  };

  const deleteAlbum = async (id) => {
    await fetch(`/api/albums/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    setAlbums(albums.filter(a => a.id !== id));
  };

  const updateAlbumName = async (id, name) => {
    await fetch(`/api/albums/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name })
    });
    setAlbums(albums.map(a => a.id === id ? { ...a, name } : a));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">จัดการอัลบั้ม</h2>
      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="ชื่ออัลบั้มใหม่"
          value={newAlbumName}
          onChange={(e) => setNewAlbumName(e.target.value)}
        />
        <button onClick={createAlbum} className="bg-blue-500 text-white px-4 py-2 rounded">
          + สร้างอัลบั้ม
        </button>
      </div>
      <div className="grid gap-4">
        {albums.map((album) => (
          <div key={album.id} className="border p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <input
                className="font-semibold text-lg border-b flex-1 mr-4"
                value={album.name}
                onChange={(e) => updateAlbumName(album.id, e.target.value)}
              />
              <button onClick={() => deleteAlbum(album.id)} className="text-red-500">🗑️ ลบ</button>
            </div>
            <img src={album.coverUrl || "https://via.placeholder.com/300x200?text=ไม่มีหน้าปก"} className="w-full rounded mb-2" />
            <button
              onClick={() => navigate(`/admin/albums/${album.id}`)}
              className="bg-gray-200 px-4 py-1 rounded"
            >
              📁 จัดการภาพ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAlbums;
