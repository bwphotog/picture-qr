// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminAlbums from './pages/AdminAlbums'
import AdminAlbumPhotos from './pages/AdminAlbumPhotos'
// ... import หน้าอื่นๆ

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminAlbums />} />
        <Route path="/admin/albums/:id" element={<AdminAlbumPhotos />} />
        {/* route หน้าอื่น ๆ */}
      </Routes>
    </Router>
  )
}

export default App
