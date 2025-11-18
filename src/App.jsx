import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ChatDemo from './components/ChatDemo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-[#29ABE2]/30 selection:text-white">
      <Navigation />
      <Hero />
      <div id="problem"><Problem /></div>
      <div id="solution"><Solution /></div>
      <ChatDemo />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
