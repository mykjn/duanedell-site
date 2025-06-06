export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-20 text-center">
      <div className="mb-4">
        <a
          href="https://facebook.com/yourband"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://instagram.com/yourband"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://spotify.com/yourband"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i class="fa-brands fa-spotify"></i>
        </a>
        <a
          href="https://youtube.com/@yourband"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Duane Dell. All rights reserved.</p>
    </footer>
  );
}
