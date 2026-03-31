import React, { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" onClick={closeMenu}>SANZETA</a>
      </div>
      
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#portfolio" onClick={closeMenu}>PORTFOLIO</a></li>
        <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
        
        {/* Enlace actualizado a la nueva pestaña */}
        <li>
          <a 
            href="/info" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={closeMenu}
          >
            INFO
          </a>
        </li>
        
        <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
        
        <li className="mobile-only-cta">
          <a href="#contact" className="nav-btn" onClick={closeMenu}>BOOK NOW</a>
        </li>
      </ul>

      <div className="navbar-cta desktop-only">
        <a href="#contact" className="nav-btn">BOOK NOW</a>
      </div>
    </nav>
  );
};

export default Navbar;