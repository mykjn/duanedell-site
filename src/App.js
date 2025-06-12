import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MusicSection from './components/MusicSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import MusicPage from './components/MusicPage';
import Contact from './components/Contact';
import MusicDetail from './pages/MusicDetail';
import AlbumDetail from './pages/AlbumDetail';
import About from './pages/About';

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
