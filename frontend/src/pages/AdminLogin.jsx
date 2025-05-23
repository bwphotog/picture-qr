import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } else {
      alert('รหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="p-4">
      <h2>เข้าสู่ระบบ</h2>
      <input
        type="password"
        placeholder="รหัสผ่านผู้ดูแล"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleLogin} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        เข้าสู่ระบบ
      </button>
    </div>
  );
}

export default AdminLogin;