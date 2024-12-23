import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import TradingPlatforms from '../components/sections/TradingPlatforms';
import Contact from '../components/sections/Contact';
import Disclaimer from '../components/sections/Disclaimer';
import Footer from '../components/layout/Footer';
import CookieConsent from '../components/CookieConsent';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <TradingPlatforms />
      <Contact />
      <Disclaimer />
      <Footer />
      <CookieConsent />
    </div>
  );
}