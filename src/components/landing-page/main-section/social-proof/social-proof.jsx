  
import React from 'react';

export default function SocialProofSection() {
  return (
    <>
      <section id="social-proof" aria-labelledby="social-proof-title" className="container mx-auto max-w-3xl px-6 py-20 text-yellow-300">
        <h2
          id="social-proof-title"
          className="text-yellow-400 text-4xl font-extrabold tracking-tight text-center mb-10 drop-shadow-[0_0_8px_rgba(179,156,0,0.8)] border-b-4 border-yellow-400 inline-block pb-2 select-none"
        >
          What Early Users Say
        </h2>
        <blockquote className="italic text-lg text-center drop-shadow-[0_0_6px_rgba(179,156,0,0.7)]">
          "Hive Card has completely transformed how I manage my credit cards. The intuitive design and smart analytics save me time and money every month."
          <footer className="mt-4 font-bold text-yellow-400 text-base">— Jordan K., Beta User</footer>
        </blockquote>
      </section>
    </>
  );
}