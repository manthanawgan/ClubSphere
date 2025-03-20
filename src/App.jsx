import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsShowcase from './components/EventsShowcase'
//import DescriptionSection from './components/DescriptionSection'
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <EventsShowcase />
      {/* Add other landing page sections here later */}
    </div>
  );
}

export default App;