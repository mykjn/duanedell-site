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
    <main className="container mx-auto px-4 pb-10 pt-20 md:px-20 lg:pt-32 max-w-screen">
      <section className="z-10 mx-auto flex justify-center">
        <div className="flex w-full max-w-4xl flex-col">
          <section className="mb-12 grid items-center justify-center gap-6 px-8 text-center lg:mb-10 lg:grid-cols-6 lg:gap-6 lg:px-16">
            <div className="mx-auto lg:col-span-2 lg:col-start-2 lg:w-56">
              <div style={{ overflow: 'hidden', position: 'relative', width: '100%', maxWidth: '3000px'}}>
                <img
                  src={album.image}
                  aria-hidden="true"
                  style={{ display: 'block', width: '100%' }}
                  alt={album.title}
                />
                <img
                  role="presentation"
                  alt={album.title}
                  aria-hidden="true" 
                  src={album.image}
                  style= {{ backgroundColor: 'rgb(58, 95, 165', opacity: '0', transition: 'opacity 500ms', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <div className="text-center font-primary font-bold text-2xl">{album.title}</div>
              <p className="flex items-center justify-center gap-1.5 opacity-50 font-primary font-bold text-lg">
                <span>
                  {album.tracks.length} Tracks
                </span>
              </p>
              <a 
                href={album.link}
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 text-center mt-4"
              >
                <button className="rounded-none border px-4 py-2 font-normal undefined border-black text-black hover:bg-black hover:text-white">LISTEN NOW</button>              
              </a>
            </div>
          </section>
          <section className="relative grid gap-8 lg:grid-cols-12">
            <div className="self-start pb-8 lg:pb-0 lg:sticky lg:top-12 lg:col-span-12">
              <div className="mb-0 flex items-center justify-between w-full py-border-b-[1px] undefined border-black">
                <div className="!text-xl uppercase text-black font-primary font-bold text-2xl">Tracklist</div>
              </div>
              <ul>
                {album.tracks.map((track, index) => (
                  <li key={index} className="flex w-full items-center justify-between gap-6 border-b border-black py-4">
                    <Link
                      to={`/music/${encodeURIComponent(track.title)}`}
                      className="font-primary flex w-full justify-between font-bold"
                    >
                      {index + 1}. {track.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
