import React from 'react';
import './style/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">Club Sphere</a>
        </div>
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/login" className="nav-link">Login</a>
          <a href="/register" className="nav-link">Register</a>
          <a href="/about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;