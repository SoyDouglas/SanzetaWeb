import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  // Configuración del mensaje breve para WhatsApp
  const whatsappNumber = "573142088193";
  const message = encodeURIComponent("Hi! I'd like to book a tattoo session.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="hero-simple">
      <div className="hero-content">
        <p className="hero-tagline">Safe. Clean. High-quality work</p>
        
        <h1 className="hero-title">
          Tattoo Artist <br /> 
          <span className="hero-title-accent">in Medellín</span>
        </h1>

        <p className="hero-description">
          Custom and professional tattoos <br />
          designed for travelers and expats.
        </p>

        {/* Botón actualizado con link directo y target blank */}
        <a 
          href={whatsappUrl} 
          className="hero-btn"
          target="_blank" 
          rel="noopener noreferrer"
        >
          BOOK YOUR TATTOO
        </a>

        <p className="hero-location">Private studio in Rionegro, Antioquia</p>
      </div>
    </section>
  );
};

export default Hero;