import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MusicSection from './components/MusicSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import MusicPage from './components/MusicPage';
import MusicDetail from './pages/MusicDetail';
import AlbumDetail from './pages/AlbumDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <MusicSection />
              <VideoSection />
            </>
          }
        />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/music/:title" element={<MusicDetail />} />
        <Route path="/album/:title" element={<AlbumDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
