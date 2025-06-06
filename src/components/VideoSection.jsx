export default function VideoSection() {
  return (
    <section id="music" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Watch Our Latest Video</h2>
      <div className="max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/WxGiS7ilp8M?si=uAdxg1kRfhzMFPo-"
          title="Band Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
