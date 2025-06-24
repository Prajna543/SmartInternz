import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import DataVisualization from './components/DataVisualization';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PillarsSection />
      <DataVisualization />
      <Footer />
    </div>
  );
}

export default App;