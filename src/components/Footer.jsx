export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-20 text-center">
      <div className="mb-4">
        <a
          href="https://www.facebook.com/duanedellmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/duanedellfuderanan/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://open.spotify.com/artist/1oseVWis06Xs5fjP6j4t3I?si=wSyV1d-rQRajFWC38n1fqA"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i className="fa-brands fa-spotify"></i>
        </a>
        <a
          href="https://www.youtube.com/@duanedellfuderanan"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Duane Dell. All rights reserved.</p>
    </footer>
  );
}
