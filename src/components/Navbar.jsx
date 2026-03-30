import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">SANZETA</a>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#reviews">REVIEWS</a></li>
        <li><a href="#faq">INFO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="navbar-cta">
        <a href="#contact" className="nav-btn">BOOK NOW</a>
      </div>
    </nav>
  );
};

export default Navbar;