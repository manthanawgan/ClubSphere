import React from 'react';
import './style/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="text-primary">Unify.</span> 
            <span className="text-secondary">Automate.</span> 
            <span className="text-primary">Transform.</span>
          </h1>
          <p className="hero-description">
            The next-generation platform for student tech organizations to streamline operations, 
            boost engagement, and maximize impact.
          </p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary">Register</a>
            <a href="/tour" className="btn btn-secondary">Take Tour</a>
          </div>
        </div>
        <div className="hero-images">
          <img src="src\assets\TaskPadPhoto.png" alt="Checklist" className="hero-image checklist" />
          <img src="src\assets\CalenderPhoto.png" alt="Calendar" className="hero-image calendar" />
        </div>
      </div>
    </div>
  );
}

export default Hero;