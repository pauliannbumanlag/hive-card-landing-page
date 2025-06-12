  
import React, { useState } from 'react';
import faqData from "../faq/data";

export default function FAQSection() {
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
    </>
  );
}