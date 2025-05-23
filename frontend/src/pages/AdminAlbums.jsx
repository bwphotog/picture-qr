
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminAlbums() {
  const [albums, setAlbums] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('/api/albums', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setAlbums(data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">อัลบั้มทั้งหมด</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id} className="mb-2">
            <button
              onClick={() => navigate(`/admin/albums/${album.id}`)}
              className="text-blue-600 underline"
            >
              {album.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminAlbums
