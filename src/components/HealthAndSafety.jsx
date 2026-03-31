import React from 'react';
import '../styles/HealthAndSafety.css';
// Aquí la imagen 
import safetyImg from '../assets/health-safety.jpg'; 

const HealthAndSafety = () => {
  return (
    <section className="health-section">
      <div className="health-container">
        
        {/* Columna Izquierda: Textos */}
        <div className="health-content">
          <h2 className="section-title">Health & Safety</h2>
          <p className="health-subtitle">Your safety and well-being are our top priorities.</p>

          <div className="health-items">
            {/* Item 1 */}
            <div className="health-item">
              <div className="health-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </div>
              <div className="health-text">
                <h3>Sterilized Equipment</h3>
                <p>All our equipment and tools are rigorously sterilized before each session to guarantee the absolute safety of our clients.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="health-item">
              <div className="health-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </div>
              <div className="health-text">
                <h3>Disposable Materials</h3>
                <p>We use high-quality, single-use disposable needles and materials, ensuring every client receives a safe and clean treatment.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="health-item">
              <div className="health-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </div>
              <div className="health-text">
                <h3>Hygienic Studio</h3>
                <p>We maintain an impeccable private studio, complying with the strictest hygiene standards and constantly monitoring disinfection.</p>
              </div>
            </div>
          </div>

          <div className="health-footer">
            <p className="health-highlight">Your health is paramount.</p>
            <p>We follow strict cleaning and sterilization protocols to guarantee your tattoo experience is as safe as it is professional.</p>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="health-image-wrapper">
          <div className="health-image-border">
            <img src={safetyImg} alt="Sanzeta Tattoo Health and Safety Equipment" loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HealthAndSafety;