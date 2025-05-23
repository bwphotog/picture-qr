import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminUpload from './pages/AdminUpload';
import SelectCover from './pages/SelectCover';
import AlbumView from './pages/AlbumView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminUpload />} />
        <Route path="/admin/:albumId/cover" element={<SelectCover />} />
        <Route path="/album/:albumId" element={<AlbumView />} />
      </Routes>
    </Router>
  );
}

export default App;