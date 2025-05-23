
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AdminAlbumPhotos() {
  const { id } = useParams()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch(`/api/albums/${id}/photos`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [id])

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">ภาพในอัลบั้ม</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailLink} alt="" className="w-full" />
        ))}
      </div>
    </div>
  )
}

export default AdminAlbumPhotos
