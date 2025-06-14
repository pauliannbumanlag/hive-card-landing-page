  
import React from 'react';

export default function FooterSection() {
  return (
    <>
      <footer
        id="privacy-terms"
        role="contentinfo"
        className="bg-yellow-900 bg-opacity-10 text-yellow-500 text-center py-8 text-sm select-none"
      >
        <a href="#" className="underline hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mx-2">
          Privacy Policy
        </a>
        {' | '}
        <a href="#" className="underline hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mx-2">
          Terms of Service
        </a>
        <div className="mt-4">&copy; 2024 Hive Card. All rights reserved.</div>
      </footer>
    </>
  );
}