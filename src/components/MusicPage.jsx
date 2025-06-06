import { Link } from 'react-router-dom';
import single1 from '../assets/banwag.jpg';
import single2 from '../assets/ngalan.jpg';
import single3 from '../assets/gitagbo.jpg';
import single4 from '../assets/taliwala.jpg';
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
    type: 'single',
    title: 'Gitagbo',
    image: single3,
  },
  {
    type: 'single',
    title: 'Taliwala',
    image: single4,
  },
  {
    type: 'album',
    title: 'Pagkagamhanan EP',
    image: album1,
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Our Music</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
        Explore our released singles and albums. Click on any cover art to learn more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {musicData.map((item, index) => {
          const path =
            item.type === 'album'
              ? `/album/${encodeURIComponent(item.title)}`
              : `/music/${encodeURIComponent(item.title)}`;

          return (
            <Link
              key={index}
              to={path}
              className="group block hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black">
                {item.title}
              </h3>
              <span className="text-sm uppercase text-gray-500">{item.type}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
