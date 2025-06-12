  
import React from 'react';

export default function FeaturesSection() {
  return (
    <>
      <section id="benefits" aria-labelledby="benefits-title" className="container mx-auto max-w-5xl px-6 py-20">
        <h2
          id="benefits-title"
          className="text-yellow-400 text-4xl font-extrabold tracking-tight text-center mb-16 drop-shadow-[0_0_8px_rgba(179,156,0,0.8)] border-b-4 border-yellow-400 inline-block pb-2 select-none"
        >
          Benefits & Features
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-yellow-200">
          <article className="bg-yellow-900 bg-opacity-10 rounded-3xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow focus-within:shadow-yellow-400 focus:outline-none">
            <div className="text-5xl mb-6" aria-hidden="true">📊</div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Tracking</h3>
            <p>Monitor all your credit card transactions in one place with real-time updates and detailed insights.</p>
          </article>
          <article className="bg-yellow-900 bg-opacity-10 rounded-3xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow focus-within:shadow-yellow-400 focus:outline-none">
            <div className="text-5xl mb-6" aria-hidden="true">💡</div>
            <h3 className="text-xl font-bold mb-2">Smart Analysis</h3>
            <p>Get personalized spending analysis, alerts, and suggestions to optimize your credit usage.</p>
          </article>
          <article className="bg-yellow-900 bg-opacity-10 rounded-3xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow focus-within:shadow-yellow-400 focus:outline-none">
            <div className="text-5xl mb-6" aria-hidden="true">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p>Make quick and encrypted payments directly from the app with multi-factor authentication.</p>
          </article>
          <article className="bg-yellow-900 bg-opacity-10 rounded-3xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow focus-within:shadow-yellow-400 focus:outline-none">
            <div className="text-5xl mb-6" aria-hidden="true">📱</div>
            <h3 className="text-xl font-bold mb-2">Mobile Convenience</h3>
            <p>Access your accounts anywhere with our sleek, intuitive mobile app available on iOS and Android.</p>
          </article>
        </div>
      </section>
    </>
  );
}