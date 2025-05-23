import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin1234') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin');
    } else {
      alert('รหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold">เข้าสู่ระบบผู้ดูแล</h1>
      <input
        type="password"
        placeholder="กรอกรหัสผ่าน"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        เข้าสู่ระบบ
      </button>
    </div>
  );
};

export default AdminLogin;