  
import React, { useState } from 'react';

export default function MobileNav({setNavOpen}) {
  return (
    <>
      <nav className="md:hidden bg-[#121212] border-t border-yellow-600 shadow-lg">
        <div className="flex flex-col max-w-5xl mx-auto px-6 py-4 space-y-3 font-semibold text-yellow-400">
          <a
            href="#benefits"
            className="block px-3 py-2 rounded hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setNavOpen(false)}
          >
            Features
          </a>
          <a
            href="#social-proof"
            className="block px-3 py-2 rounded hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setNavOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="block px-3 py-2 rounded hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setNavOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setNavOpen(false)}
          >
            Contact
          </a>
          <a
            href="#privacy-terms"
            className="block px-3 py-2 rounded hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setNavOpen(false)}
          >
            Privacy & Terms
          </a>
        </div>
      </nav>
    </>
  );
}