import React, { useEffect, useRef, useState } from 'react';
import '../styles/PortfolioHome.css';

import t1 from '../assets/portfolioHome/t1.jpeg';
import t2 from '../assets/portfolioHome/t2.jpeg';
import t3 from '../assets/portfolioHome/t3.jpeg';
import t4 from '../assets/portfolioHome/t4.jpeg'; 
import t5 from '../assets/portfolioHome/t5.jpeg';
import t6 from '../assets/portfolioHome/t6.jpeg';
import t7 from '../assets/portfolioHome/t7.jpeg';
import t8 from '../assets/portfolioHome/t8.jpeg';

const PortfolioHome = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null); // Nueva referencia para el contenedor móvil
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Estado para saber cuál carta está al medio

  const tattoos = [t1, t2, t3, t4, t5, t6, t7, t8];

  useEffect(() => {
    // 1. Observador General de la Sección (para el efecto 3D en escritorio)
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-active');
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    // 2. Observador del Carrusel Móvil (detecta la carta central)
    const carouselObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el 60% de la carta está visible, la consideramos "en el centro"
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: carouselRef.current, // Observa dentro del contenedor de scroll
        threshold: 0.6,
      }
    );

    // Conectamos el observador a cada carta del carrusel
    const items = document.querySelectorAll('.fan-item');
    items.forEach((item) => carouselObserver.observe(item));

    return () => {
      sectionObserver.disconnect();
      carouselObserver.disconnect();
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio-showcase-3d" ref={sectionRef}>
      <div className="portfolio-vapor-effect"></div>

      <div className="portfolio-header-center">
        <h2 className="section-title">THE KIND OF TATTOO YOU WON'T REGRET.</h2>
        <p className="portfolio-intro">
          Exclusive blackwork tattoos by appointment-only.<br />
          Where clean design meets permanent art.
        </p>
      </div>

      {/* Contenedor principal, le añadimos la referencia del carrusel */}
      <div className="portfolio-fan-container" ref={carouselRef}>
        {tattoos.map((img, index) => (
          <div 
            key={index} 
            data-index={index} /* Data attribute para que el observer lo lea */
            /* Añadimos la clase 'active-center' dinámicamente si es la carta central */
            className={`fan-item fan-pos-${index} ${activeIndex === index ? 'active-center' : ''}`}
            style={{ '--index-delay': index }}
            onClick={() => setSelectedImg(img)}
          >
            <div className="image-wrapper">
              <img src={img} alt="Sanzeta Professional Tattoo Work" loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <a href="/gallery" target="_blank" rel="noopener noreferrer" className="btn-outline-large">
          VIEW FULL GALLERY
        </a>
      </div>

      {/* Modal Lightbox */}
      {selectedImg && (
        <div className="portfolio-modal" onClick={() => setSelectedImg(null)}>
          <div className="portfolio-modal-content">
            <span className="close-modal" onClick={() => setSelectedImg(null)}>&times;</span>
            <img src={selectedImg} alt="Tattoo Preview" className="portfolio-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioHome;