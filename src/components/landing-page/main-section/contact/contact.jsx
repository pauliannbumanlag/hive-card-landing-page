  
import React from 'react';

export default function ContactSection() {
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="container mx-auto max-w-3xl px-6 py-20 text-yellow-300">
        <h2
          id="contact-title"
          className="text-yellow-400 text-4xl font-extrabold tracking-tight text-center mb-10 drop-shadow-[0_0_8px_rgba(179,156,0,0.8)] border-b-4 border-yellow-400 inline-block pb-2 select-none"
        >
          Contact Us
        </h2>
        <address className="not-italic text-center">
          Have questions or want to learn more? Reach out to us:
          <br />
          Email: <a href="mailto:support@hivecard.app" className="underline hover:text-yellow-300">support@hivecard.app</a>
          <br />
          Phone: <a href="tel:+1234567890" className="underline hover:text-yellow-300">+1 (234) 567-890</a>
        </address>
      </section>
    </>
  );
}