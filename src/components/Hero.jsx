import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-simple">
      <div className="hero-content">
        {/* Tagline sutil para no competir con el menú del header */}
        <p className="hero-tagline">Safe. Clean. High-quality work</p>
        
        {/* Título en dos renglones para mayor impacto estético */}
        <h1 className="hero-title">
          Tattoo Artist <br /> 
          <span className="hero-title-accent">in Medellín</span>
        </h1>

        {/* Descripción con un peso visual distinto */}
        <p className="hero-description">
          Custom and professional tattoos <br />
          designed for travelers and expats.
        </p>

        <a href="#contact" className="hero-btn">
          BOOK YOUR TATTOO
        </a>

        <p className="hero-location">Private studio in Rionegro, Antioquia</p>
      </div>
    </section>
  );
};

export default Hero;