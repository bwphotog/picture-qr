// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminPage from './pages/AdminPage'
// ... import หน้าอื่นๆ

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* route หน้าอื่น ๆ */}
      </Routes>
    </Router>
  )
}

export default App
