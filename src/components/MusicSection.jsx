import { Link } from 'react-router-dom';
import single1 from '../assets/banwag.jpg';
import single2 from '../assets/ngalan.jpg';
import album1 from '../assets/pagkagamhanan.jpg';

const musicData = [
  {
    type: 'single',
    title: 'BANWAG',
    image: single1,
  },
  {
    type: 'single',
    title: 'NGALAN',
    image: single2,
  },
  {
    type: 'album',
    title: 'Pagkagamhanan EP',
    image: album1,
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
            to={
              item.type === 'album'
                ? `/album/${encodeURIComponent(item.title)}`
                : `/music/${encodeURIComponent(item.title)}`
            }
            className="group block hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg shadow-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black text-center">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/music"
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
        >
          More Music →
        </Link>
      </div>
    </section>
  );
}
