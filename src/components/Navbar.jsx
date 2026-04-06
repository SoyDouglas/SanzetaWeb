import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Importación clave para navegar en React
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Cambiamos 'a' por 'Link' y 'href' por 'to' */}
        <Link to="/" onClick={closeMenu}>SANZETA</Link>
      </div>
      
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {/* Actualizado a las rutas de tu App.jsx */}
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>GALLERY</Link></li>
        
        <li>
          <Link to="/info" onClick={closeMenu}>
            INFO
          </Link>
        </li>
        
        {/* Aquí estaba el error: ahora redirige a la ruta /contact */}
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
        
        <li className="mobile-only-cta">
          <Link to="/contact" className="nav-btn" onClick={closeMenu}>BOOK NOW</Link>
        </li>
      </ul>

      <div className="navbar-cta desktop-only">
        <Link to="/contact" className="nav-btn">BOOK NOW</Link>
      </div>
    </nav>
  );
};

export default Navbar;