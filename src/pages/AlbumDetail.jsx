import { useParams } from 'react-router-dom';
import musicData from '../data/musicData';
import { Link } from 'react-router-dom';

export default function AlbumDetail() {
  const { title } = useParams();

  const album = musicData.find(
    (item) =>
      item.type === 'album' &&
      item.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
  );

  if (!album) {
    return <div className="p-10 text-center text-xl text-gray-600">Album not found.</div>;
  }

  return (
    <div className="px-6 py-20 max-w-5xl mx-auto text-gray-900 font-sans">
      {/* Album Cover & Info Block */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-16">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-lg scale-110 opacity-30"
          style={{ backgroundImage: `url(${album.image})` }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-10 p-10 bg-white/80 backdrop-blur-md rounded-2xl">
          {/* Album Cover */}
          <img
            src={album.image}
            alt={album.title}
            className="w-56 h-56 object-cover rounded-xl shadow-md"
          />

          {/* Album Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">{album.title}</h1>
            <h4 className="text-gray-700 text-lg mb-1">
              {album.tracks.length} Tracks
            </h4>
            <h4 className="text-gray-700 text-lg">
              Released: <span className="italic">2024</span>
            </h4>
          </div>
        </div>
      </div>

      {/* Tracklist */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Track List</h2>
      <ul className="bg-white p-6 rounded-2xl shadow-md divide-y divide-gray-200">
        {album.tracks.map((track, index) => (
          <li key={index} className="py-4 px-2 flex justify-between items-center hover:bg-gray-50 transition rounded-lg">
            <Link
              to={`/music/${encodeURIComponent(track.title)}`}
              className="text-lg text-blue-700 hover:underline transition"
            >
              {index + 1}. {track.title}
            </Link>
            <span className="text-sm text-gray-500">{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
