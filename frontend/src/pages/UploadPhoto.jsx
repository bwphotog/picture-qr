
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function UploadPhoto() {
  const { id } = useParams()
  const [file, setFile] = useState(null)

  const handleUpload = async () => {
    const token = localStorage.getItem('token')
    const formData = new FormData()
    formData.append('photo', file)

    const res = await fetch(`/api/albums/${id}/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    })

    if (res.ok) {
      alert('อัปโหลดสำเร็จ')
    } else {
      alert('อัปโหลดไม่สำเร็จ')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">อัปโหลดรูปภาพ</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-2" />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2">Upload</button>
    </div>
  )
}

export default UploadPhoto
