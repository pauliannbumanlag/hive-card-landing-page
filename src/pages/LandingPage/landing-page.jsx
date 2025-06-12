  
import React from 'react';
import NavigationHeader from '../../components/landing-page/nav-header';
import HeroSection from '../../components/landing-page/hero-section/hero';
import MainSection from '../../components/landing-page/main-section/main';
import FooterSection from '../../components/landing-page/footer/footer';

export default function HiveCardLandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fefefe] flex flex-col">
      <NavigationHeader />
      <HeroSection />
      <MainSection />
      <FooterSection />
    </div>
  );
}