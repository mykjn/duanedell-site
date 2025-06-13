import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const baseClasses =
    'w-full fixed top-0 left-0 px-6 py-4 flex justify-between items-center transition-all duration-300 z-50';
  const transparent = 'bg-transparent text-white';
  const solid = 'bg-white text-black shadow-md';

  const navStyle = isHome ? (scrolled ? solid : transparent) : solid;

  return (
    <div className="relative z-[99999]">
      <nav className={`${baseClasses} ${navStyle}`}>
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="text-xl font-bold tracking-wide">
            DUANE DELL
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/music" className="hover:underline">Music</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden w-full px-6 pt-20 pb-4 flex flex-col space-y-4 text-sm font-medium shadow-md fixed top-0 left-0 z-40 ${
            isHome && !scrolled ? 'bg-black text-white' : 'bg-white text-gray-700'
          }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
          <Link to="/music" onClick={() => setIsOpen(false)} className="hover:underline">Music</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</Link>
        </div>
      )}
    </div>
  );
}
