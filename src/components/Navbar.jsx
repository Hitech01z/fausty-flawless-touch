import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold text-pink-700"
          onClick={() => setOpen(false)}
        >
          Fausty Flawless Touch
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <Link
            to="/"
            className="text-pink-600 hover:text-gray-900 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="text-pink-600 hover:text-gray-900 transition-colors duration-300"
          >
            Services
          </Link>

          <Link
            to="/gallery"
            className="text-pink-600 hover:text-gray-900 transition-colors duration-300"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="text-pink-600 hover:text-gray-900 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-pink-600"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4 font-medium">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-pink-600 hover:text-gray-900 transition"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="text-pink-600 hover:text-gray-900 transition"
            >
              Services
            </Link>

            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="text-pink-600 hover:text-gray-900 transition"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-pink-600 hover:text-gray-900 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
