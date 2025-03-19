import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      {/* Add other landing page sections here later */}
    </div>
  );
}

export default App;