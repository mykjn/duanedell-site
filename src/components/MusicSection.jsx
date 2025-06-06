import { Link } from 'react-router-dom';
import single1 from '../assets/banwag.jpg';
import single2 from '../assets/ngalan.jpg';
import album1 from '../assets/pagkagamhanan.jpg';

const musicData = [
  {
    type: 'single',
    title: 'BANWAG',
    image: single1,
    link: 'https://open.spotify.com/track/YOUR_SINGLE_1_ID',
  },
  {
    type: 'single',
    title: 'NGALAN',
    image: single2,
    link: 'https://open.spotify.com/track/YOUR_SINGLE_2_ID',
  },
  {
    type: 'album',
    title: 'Pagkagamhanan EP',
    image: album1,
    link: 'https://open.spotify.com/album/YOUR_ALBUM_ID',
  },
];

export default function MusicSection() {
  return (
    <section id="music" className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Listen to Our Music</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
        Stream our latest singles and albums on your favorite platform.
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {musicData.map((item, index) => (
            <Link
                key={index}
                to={`/music/${encodeURIComponent(item.title)}`}
                className="group block hover:scale-105 transform transition"
            >
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black text-center">
                {item.title}
                </h3>
            </Link>
            ))}
        </div>{/* End of grid */}

        <div className="text-center mt-10">
            <a
                href="/music"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            >
                More Music →
            </a>
        </div>


    </section>
  );
}
