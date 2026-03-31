import React, { useState, useEffect } from 'react';
import '../styles/FullGallery.css';

// Aquí idealmente importarías las versiones de ALTA resolución
import t1 from '../assets/portfolio/t1.jpeg';
import t2 from '../assets/portfolio/t2.jpeg';
import t3 from '../assets/portfolio/t3.jpeg';
import t4 from '../assets/portfolio/t4.jpeg'; 
import t5 from '../assets/portfolio/t5.jpeg';
import t6 from '../assets/portfolio/t6.jpeg';
import t7 from '../assets/portfolio/t7.jpeg';
import t8 from '../assets/portfolio/t8.jpeg';

const FullGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const tattoos = [t1, t2, t3, t4, t5, t6, t7, t8];

  // Efecto para bloquear el scroll del fondo cuando la imagen está ampliada
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImg]);

  return (
    <div className="full-gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Complete Portfolio</h1>
        <p className="gallery-subtitle">High-resolution details of our custom pieces.</p>
      </div>

      {/* Cuadrícula Limpia */}
      <div className="gallery-grid">
        {tattoos.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => setSelectedImg(img)}
          >
            <img src={img} alt={`Sanzeta Tattoo Detail ${index + 1}`} loading="lazy" />
            <div className="hover-overlay">
              <span>View Detail</span>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de Instagram */}
      <div className="instagram-cta-container">
        <a 
          href="https://instagram.com/sanzeta_art" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-instagram"
        >
          SEE MORE ON INSTAGRAM
        </a>
      </div>

      {/* Modal / Lightbox para Primer Plano */}
      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <span className="gallery-close">&times;</span>
          <img 
            src={selectedImg} 
            alt="Tattoo Close Up" 
            className="gallery-modal-img" 
            onClick={(e) => e.stopPropagation()} // Evita que al hacer clic en la foto se cierre
          />
        </div>
      )}
    </div>
  );
};

export default FullGallery;