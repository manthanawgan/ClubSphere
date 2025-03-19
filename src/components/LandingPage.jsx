import React from 'react';
import Header from './Header';
import Hero from './Hero';
import EventsShowcase from './EventsShowcase';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <EventsShowcase />
      {/* Add other landing page sections here later */}
    </div>
  );
}

export default LandingPage;