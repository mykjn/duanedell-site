import { useParams } from 'react-router-dom';
import musicData from '../data/musicData';

export default function MusicDetail() {
  const { title } = useParams();

  // Find the track matching the URL param (case-insensitive)
  const track = musicData.find(
    (item) =>
      item.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
  );

  if (!track) {
    return (
      <div className="p-10 text-center text-xl text-gray-600">
        Music track not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-900 font-sans">
      {/* Top section: cover + info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
        <img
          src={track.image}
          alt={track.title}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{track.title}</h1>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Written by:</span> {track.writer || 'Unknown'}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Released:</span> {track.year || 'Unknown'}
          </p>

          {/* Audio preview */}
          {track.preview && (
            <audio controls className="w-full rounded-md shadow-sm">
              <source src={track.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>

      {/* Lyrics */}
      {track.lyrics && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Lyrics</h2>
          <pre className="whitespace-pre-wrap bg-gray-100 p-6 rounded-lg shadow-inner max-h-96 overflow-y-auto text-gray-800 leading-relaxed">
            {track.lyrics}
          </pre>
        </section>
      )}
    </div>
  );
}
