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
    <section id="music" className="flex w-full justify-center bg-white px-4 py-10">
      <div className="max-w-4xl">
        <div className="flex items-center justify-between w-full py-3 mb-4">
          <div className="!text-xl uppercase text-black font-primary font-bold text-2xl">Listen to Our Music</div>
          <div className="min-w-max">
            <Link
              to="/music"
              className="text-base gap-1.5 group items-center hidden sm:flex"
            >
              <div className="-mr-5 !text-base font-bold transition-all duration-200 group-hover:mr-0 text-black">
                More Music
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                icon="arrow-right"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-inline--fa fa-arrow-right h-[intrinsic] w-4 translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                role="img"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path>
              </svg>
            </Link>
          </div>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {musicData.map((item, index) => (
              <Link
                key={index}
                to={
                  item.type === 'album'
                    ? `/album/${encodeURIComponent(item.title)}`
                    : `/music/${encodeURIComponent(item.title)}`
                }
                className="w-full"
              >
                <div className="w-full">
                  <div class="h-full w-full" style={{ overflow: 'hidden', position: 'relative', width: '100%', maxWidth: '3000px' }}>
                    <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover object-center" style={{ display: 'block', width: '100%' }}
                    aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-px mt-2">
                  <small className="text-left !font-normal uppercase tracking-wider font-primary font-bold text-xs">
                    {item.type}
                  </small>
                  <p className="font-primary leading-snug font-bold text-lg">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
}
