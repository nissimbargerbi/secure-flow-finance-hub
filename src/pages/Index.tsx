
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Platform from '@/components/Platform';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Features />
        <Platform />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
