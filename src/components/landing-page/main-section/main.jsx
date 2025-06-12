  
import React, { useState } from 'react';
import FeaturesSection from './features/features';
import SocialProofSection from './social-proof/social-proof';

const faqData = [
  {
    question: 'Is my credit card information safe with Hive Card?',
    answer: 'Yes, we use state-of-the-art encryption and security protocols to protect your data at all times.',
  },
  {
    question: 'How do I join the beta program?',
    answer: "Simply enter your email in the beta sign-up form above and we'll notify you when access is available.",
  },
  {
    question: 'Does Hive Card support multiple credit cards?',
    answer: 'Yes, you can securely link and manage multiple credit cards from various providers in one app.',
  },
];

export default function MainSection() {
  // FAQ expanded state: indices of expanded items
  const [expandedFaqs, setExpandedFaqs] = useState({});

  // Toggle FAQ item by index
  const toggleFaq = (index) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <main className="flex-grow">
        <FeaturesSection />
        <SocialProofSection />

        <section id="faq" aria-labelledby="faq-title" className="container mx-auto max-w-3xl px-6 py-20 text-yellow-300">
          <h2
            id="faq-title"
            className="text-yellow-400 text-4xl font-extrabold tracking-tight text-center mb-12 drop-shadow-[0_0_8px_rgba(179,156,0,0.8)] border-b-4 border-yellow-400 inline-block pb-2 select-none"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map(({ question, answer }, idx) => {
              const isOpen = expandedFaqs[idx];
              return (
                <div key={idx} className="border-b border-yellow-600">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    className="w-full text-left font-bold text-yellow-400 text-lg py-3 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    {question}
                    <span className="ml-4 text-2xl select-none">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`mt-2 text-yellow-200 text-base transition-max-height duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                    style={{ maxHeight: isOpen ? '24rem' : '0' }}
                  >
                    {answer}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

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
      </main>
    </>
  );
}