import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminAlbums from './pages/AdminAlbums'
import AdminAlbumPhotos from './pages/AdminAlbumPhotos'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminAlbums />} />
        <Route path="/admin/albums/:id" element={<AdminAlbumPhotos />} />
      </Routes>
    </Router>
  )
}

export default App
