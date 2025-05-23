
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
    const data = await res.json()
    if (res.ok && data.token) {
      localStorage.setItem('token', data.token)
      navigate('/admin')
    } else {
      alert('รหัสผ่านไม่ถูกต้อง')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Admin Login</h1>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter admin password"
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  )
}

export default AdminLogin
