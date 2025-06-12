import { Link } from 'react-router-dom';
import logo from '../assets/duanedell-logo-black.png';

export default function Navbar() {
  return (
    <div className="relative z-[99999]">
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 z-50">
        <Link to="/">
          <img src={logo} alt="Duane Dell Logo" className="h-10 cursor-pointer" />
        </Link>
        <div className="space-x-6 text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/music" className="hover:text-black">Music</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
