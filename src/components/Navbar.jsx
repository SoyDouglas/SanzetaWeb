import React, { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Funciones para manejar el menú
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" onClick={closeMenu}>SANZETA</a>
      </div>
      
      {/* Botón de Hamburguesa (3 rayas) */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Enlaces de Navegación */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#portfolio" onClick={closeMenu}>PORTFOLIO</a></li>
        <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
        <li><a href="#faq" onClick={closeMenu}>INFO</a></li>
        <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
        
        {/* Botón CTA clonado para que aparezca dentro del menú en móviles */}
        <li className="mobile-only-cta">
          <a href="#contact" className="nav-btn" onClick={closeMenu}>BOOK NOW</a>
        </li>
      </ul>

      {/* Botón CTA original (solo visible en escritorio) */}
      <div className="navbar-cta desktop-only">
        <a href="#contact" className="nav-btn">BOOK NOW</a>
      </div>
    </nav>
  );
};

export default Navbar;