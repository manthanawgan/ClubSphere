import React from 'react';
import Header from './Header';
import Hero from './Hero';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      {/* Add other landing page sections here later */}
    </div>
  );
}

export default LandingPage;