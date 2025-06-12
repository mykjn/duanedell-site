import bandPhoto from '../assets/landing.jpg';

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bandPhoto})`,
      }}
    >
      {/* <h1 className="text-5xl md:text-6xl font-bold mb-4">Duane Dell</h1>
      <p className="text-xl md:text-2xl mb-6 max-w-2xl">
        Sa kangitngit mahimung suga.
      </p> */}
      {/* <a
        href="https://open.spotify.com/artist/YOUR_BAND_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
      >
        Listen Now
      </a> */}
    </section>
  );
}
