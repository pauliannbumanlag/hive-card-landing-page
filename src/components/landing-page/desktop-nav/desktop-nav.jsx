  
import React from 'react';

export default function DesktopNav() {
  return (
    <>
      <nav className="hidden md:flex space-x-8 font-semibold text-yellow-400">
        <a href="#benefits" className="hover:bg-yellow-400 hover:text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Features
        </a>
        <a href="#social-proof" className="hover:bg-yellow-400 hover:text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Testimonials
        </a>
        <a href="#faq" className="hover:bg-yellow-400 hover:text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
          FAQ
        </a>
        <a href="#contact" className="hover:bg-yellow-400 hover:text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Contact
        </a>
        <a href="#privacy-terms" className="hover:bg-yellow-400 hover:text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Privacy & Terms
        </a>
      </nav>
    </>
  );
}