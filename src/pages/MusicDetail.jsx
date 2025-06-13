import { useParams } from 'react-router-dom';
import musicData from '../data/musicData';
import { useEffect, useState } from 'react';

export default function MusicDetail() {
  const { title } = useParams();
  const [track, setTrack] = useState(null);
  const [lyrics, setLyrics] = useState('');
  const [albumImage, setAlbumImage] = useState(null);

  useEffect(() => {
    let foundTrack = null;
    let foundAlbumImage = null;

    musicData.forEach(item => {
      if (item.type === 'album') {
        item.tracks.forEach(trackItem => {
          if (trackItem.title === decodeURIComponent(title)) {
            foundTrack = trackItem;
            foundAlbumImage = item.image;
          }
        });
      } else {
        if (item.title === decodeURIComponent(title)) {
          foundTrack = item;
          foundAlbumImage = item.image;
        }
      }
    });

    setTrack(foundTrack);
    setAlbumImage(foundAlbumImage);

    // if (foundTrack?.lyricsUrl) {
    //   fetch(foundTrack.lyricsUrl)
    //     .then(res => res.text())
    //     .then(setLyrics)
    //     .catch(err => console.error('Lyrics not found', err));
    // }
    if (foundTrack?.lyricsUrl) {
      fetch(foundTrack.lyricsUrl)
        .then(res => {
          console.log('Fetched lyrics file:', res); // Logs the response object
          return res.text();
        })
        .then(text => {
          console.log('Fetched lyrics text:', text); // Logs the actual lyrics text
          setLyrics(text);
        })
        .catch(err => console.error('Lyrics not found', err));
    }

  }, [title]);

  if (!track) return <p className="p-8 text-center">Track not found.</p>;

  return (
      <section className="z-10 mx-auto flex justify-center">
        <section className="w-full">
          <div className="relative min-h-[83vh] w-full overflow-hidden bg-gray-800 m:min-h-[50vh]">
            <div className="absolute left-1/2 top-1/2 z-50 flex flex-1 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-10 md:flex-row">
              <div className="w-56">
                <div style={{ overflow: 'hidden', position: 'relative', width: '100%', maxWidth: '3000px' }}>
                  <img
                    src={albumImage}
                    alt="Album Cover"
                    className="object-cover object-center"
                    aria-hidden="true"
                    style={{ display: 'block', width: '100%'}}
                  />
                  <img
                    role="presentation"
                    src={albumImage}
                    alt="Album Cover"
                    className="object-cover object-center"
                    aria-hidden="true"
                    style={{ backgroundColor: 'rgb(58, 95, 165)', opacity: '0', transition: 'opacity 500ms', position: 'absolute', left: '0px', top: '0px', width: '100%'}}
                  />
                  <picture>
                    <source 
                      srcSet={`${albumImage}?w=3000 3000w,
                        ${albumImage}?w=1500 1500w,
                        ${albumImage}?w=1000 1000w,
                        ${albumImage}?w=500 500w
                        `}
                      sizes="(max-width: 3000px) 100vw, 3000px"
                      type="image/webp"
                    />
                    <img 
                      src={albumImage}
                      alt="Album Cover"
                      className="object-cover object-center"
                      style={{ opacity: '1', transition: 'opacity 500ms', position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%' }}
                    />
                  </picture>
                </div> 
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-center text-white font-primary font-bold text-2xl">
                  {track.title}
                </div>
                <p className="text-white flex items-center justify-center gap-1.5 opacity-60 font-primary font-bold text-lg">
                  <span>{track.year}</span>
                  <span className="font-secondary -mb-1">•</span>
                  <span>{track.duration}</span>
                </p>
                <div className="mt-4">
                  <a
                    href={track.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-50 text-white text-center undefined"
                  >
                    <button tabIndex="0" className="rounded-none border px-4 py-2 font-normal undefined border-white hover:bg-white hover:text-black">
                      LISTEN NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section className="relative pb-10">
            <section className="mx-auto flex w-full max-w-5xl flex-col gap-x-8 px-4 pt-6 md:flex-row md:px-4">
              <div className="w-full md:w-2/5">
                <section className="mb-8">
                  <div className="mb-0 anchor-scroll flex items-center justify-between w-full py-3 border-b-[1px] undefined border-black">
                    <div className="!text-xl uppercase text-black font-primary font-bold text-2xl">Videos</div>
                  </div>
                  <div className="pb-4 pt-6 last-of-type:mb-6">
                    {track.videoUrl && (
                      <div className="relative flex justify-center w-full mx-auto aspect-video">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={track.videoUrl}
                          title={track.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                  <section className="mb-8 md:block">
                    <div className="mb-0 flex items-center justify-between w-full py-3 border-b-[1px] undefined border-black">
                      <div className="!text-xl uppercase text-black font-primary font-bold text-2xl">Written by</div>
                    </div>
                    <div className="!items-start flex items-center text-dark font-primary text-left leading-tight py-3">
                      <span>{track.writer}</span>
                    </div>
                  </section>
                </section>
              </div>
              <div className="w-full md:w-3/5">
                <div className="border-b-2 border-black pb-3">
                  <div className="flex items-center justify-between">
                    <div className="mb-0 pb-0 !border-none anchor-scroll flex items-center justify-between w-full py-3 border-b-[1px] undefined border-black">
                      <div className="!text-xl uppercase text-black font-primary font-bold text-2xl">Lyrics</div>
                    </div>
                  </div>
                  <div className="mt-2 whitespace-pre-wrap">
                    {lyrics}
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>

  );
}
