import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Configuración del mensaje breve para WhatsApp
  const whatsappNumber = "573142088193";
  const message = encodeURIComponent("Hi! I'd like to book a tattoo session.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>SANZETA</Link>
      </div>
      
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>GALLERY</Link></li>
        <li><Link to="/info" onClick={closeMenu}>INFO</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
        
        {/* Botón CTA para Móvil */}
        <li className="mobile-only-cta">
          <a 
            href={whatsappUrl} 
            className="nav-btn" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            BOOK NOW
          </a>
        </li>
      </ul>

      {/* Botón CTA para Desktop */}
      <div className="navbar-cta desktop-only">
        <a 
          href={whatsappUrl} 
          className="nav-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;