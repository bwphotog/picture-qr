// frontend/src/pages/AdminPage.jsx
// เพิ่มเช็ค token และ redirect ถ้าไม่ได้ login

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/admin/login')
    }
  }, [navigate])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">จัดการอัลบั้ม</h2>
      {/* ... */}
    </div>
  )
}

export default AdminPage
