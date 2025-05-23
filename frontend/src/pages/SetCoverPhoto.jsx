
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SetCoverPhoto() {
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

  const setCover = async (photoId) => {
    const token = localStorage.getItem('token')
    const res = await fetch(`/api/albums/${id}/cover`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ photoId })
    })

    if (res.ok) {
      alert('ตั้งค่าหน้าปกสำเร็จ')
    } else {
      alert('ตั้งค่าหน้าปกไม่สำเร็จ')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">เลือกภาพหน้าปก</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.thumbnailLink}
            alt=""
            className="w-full cursor-pointer"
            onClick={() => setCover(photo.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default SetCoverPhoto
