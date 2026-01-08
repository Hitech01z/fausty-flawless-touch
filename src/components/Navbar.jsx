import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-pink-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-700">Fausty Flawless Touch</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-pink-900">Home</Link>
          <Link to="/services" className="hover:text-pink-900">Services</Link>
          <Link to="/gallery" className="hover:text-pink-900">Gallery</Link>
          <Link to="/contact" className="hover:text-pink-900">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
