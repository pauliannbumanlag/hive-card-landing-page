  
import React from 'react';
import HamburgerIcon from '../../../icons/hamburger';

export default function MobileMenuButton({ navOpen, setNavOpen}) {
  return (
    <>
      <button
        className="md:hidden text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Toggle menu"
        aria-expanded={navOpen ? 'true' : 'false'}
        onClick={() => setNavOpen((open) => !open)}
      >
        <HamburgerIcon navOpen={navOpen} />
      </button>
    </>
  );
}