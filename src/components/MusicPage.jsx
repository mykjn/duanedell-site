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
    <main className="mx-auto w-full max-w-5xl px-4 pb-10 pt-20 lg:px-0 lg:pt-24 max-w-screen">
      <section className="z-10 mx-auto flex justify-center">
        <div className="flex w-full flex-col justify-center">
          <div className="relative mt-6 flex w-full flex-wrap justify-start gap-4">
            {musicData.map((item, index) => {
              const path =
                item.type === 'album'
                  ? `/album/${encodeURIComponent(item.title)}`
                  : `/music/${encodeURIComponent(item.title)}`;

              return (
                <Link
                  key={`${item.title}-${item.type}`}
                  to={path}
                  className="w-full sm:w-[48%] lg:w-[23.7%] gap-x-4 flex flex-row md:flex-col pb-4 border-b-2 border-black md:border-0 md:pb-0"
                >
                  <div className="w-24 md:w-auto md:flex-1">
                    <div className="h-full w-full overflow-hidden relative max-w-[3000px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover object-center block w-full"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-px lg:mt-2">
                    <small className="text-left !font-normal uppercase tracking-wider font-primary font-bold text-xs">
                      {item.type}
                    </small>
                    <p className="font-primary leading-snug font-bold text-lg">
                      {item.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
