import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* COLUMNA 1: BRAND */}
        <div className="footer-brand">
          <h2 className="footer-logo">SANZETA TATTOO</h2>
          <p>Elevating the art of tattooing in Colombia. Exclusive designs, private studio.</p>
        </div>

        {/* COLUMNA 2: QUICK LINKS */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/info">Info & FAQ</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: CONTACT & SOCIAL */}
        <div className="footer-contact">
          <h3>Connect</h3>
          <p><a href="https://wa.me/573142088193" target="_blank" rel="noreferrer">WhatsApp: +57 314 2088193</a></p>
          <p><a href="https://instagram.com/sanzeta_art" target="_blank" rel="noreferrer">Instagram: @sanzeta_art</a></p>
        </div>

        {/* COLUMNA 4: LOCATION */}
        <div className="footer-location">
          <h3>Studio</h3>
          <p>Medellín / Rionegro</p>
          <p>Antioquia, Colombia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SANZETA TATTOO. ALL RIGHTS RESERVED.</p>
        <p className="made-by">BY SANZETA</p>
      </div>
    </footer>
  );
};

export default Footer;