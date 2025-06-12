  
import React, { useState } from 'react';
import DesktopNav from './desktop-nav/desktop-nav';
import MobileMenuButton from '../ui/button/mobile-menu';
import MobileNav from './mobile-nav/mobile-nav';

export default function NavigationHeader() {
  // Navigation menu state
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-[#0a0a0a] border-b-2 border-yellow-500 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3 max-w-5xl">
          <div className="text-yellow-400 font-extrabold text-2xl tracking-tight drop-shadow-[0_0_6px_rgba(253,214,0,0.7)] select-none">
            Hive Card
          </div>
          <DesktopNav />
          <MobileMenuButton navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
        {navOpen && (
          <MobileNav setNavOpen={setNavOpen} />
        )}
      </header>
    </>
  );
}