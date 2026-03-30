import React from 'react';
import '../styles/AboutMe.css';
import artistImg from '../assets/SanzetaImage.JPG'; // La foto original del estudio

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Columna de Imagen: Con un marco decorativo para elevar el diseño */}
        <div className="about-image">
          <img src={artistImg} alt="Sanzeta Art - Professional Tattooist" />
          <div className="image-frame"></div>
        </div>

        {/* Columna de Texto: Foco en Trust & Quality */}
        <div className="about-content">
          <span className="section-subtitle">The Artist</span>
          <h2 className="section-title">Behind the needle</h2>
          <p className="about-text">
            With over 6 years of experience, Sanzeta specializes in <strong>Realism, Black & Grey, and Fine Line</strong>. 
            Based in Medellín and Rionegro, the focus is always on providing a professional, safe, and clean environment for every client.
          </p>
          <p className="about-text">
            Every piece is custom-designed to tell a story, ensuring that travelers and expats 
            receive world-class art while visiting Colombia.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">6+</span>
              <span className="highlight-label">Years Exp.</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Sterile & Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;