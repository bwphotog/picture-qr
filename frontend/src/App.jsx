import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminAlbums from './pages/AdminAlbums'
import AdminAlbumPhotos from './pages/AdminAlbumPhotos'
import UploadPhoto from './pages/UploadPhoto'
import SetCoverPhoto from './pages/SetCoverPhoto'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminAlbums />} />
        <Route path="/admin/albums/:id" element={<AdminAlbumPhotos />} />
        <Route path="/admin/albums/:id/upload" element={<UploadPhoto />} />
        <Route path="/admin/albums/:id/set-cover" element={<SetCoverPhoto />} />
      </Routes>
    </Router>
  )
}

export default App
