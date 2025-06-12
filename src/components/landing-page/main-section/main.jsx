  
import React from 'react';
import FeaturesSection from './features/features';
import SocialProofSection from './social-proof/social-proof';
import FAQSection from './faq/faq';
import ContactSection from './contact/contact';

export default function MainSection() {
  return (
    <>
      <main className="flex-grow">
        <FeaturesSection />
        <SocialProofSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}