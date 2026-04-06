import React from 'react';
import '../styles/Contact.css'; // Asegúrate de que la ruta al CSS sea correcta

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-grid">
        
        {/* COLUMNA IZQUIERDA: Formulario de Reserva/Consulta */}
        <div className="contact-column contact-form-section">
          <h1 className="section-title">START YOUR PROJECT</h1>
          <p className="contact-subtitle">
            Tell us about your idea. Please provide as much detail as possible for a precise consultation.
          </p>
          
          <form className="booking-form">
            <div className="form-group">
              <label>FULL NAME</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="john.doe@email.com" required />
            </div>
            
            <div className="form-group">
              <label>TATTOO IDEA, PLACEMENT & SIZE (CM)</label>
              <textarea 
                placeholder="Describe the style, subject, body part, and approximate size..." 
                rows="6" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary-contact">SUBMIT APPLICATION</button>
          </form>
        </div>

        {/* COLUMNA DERECHA: Contacto Directo y Social Highlight */}
        <div className="contact-column contact-info-section">
          
          {/* Bloque de Contacto Directo */}
          <div className="info-block direct-chat">
            <h3>DIRECT CHAT</h3>
            <p className="info-text">For general questions or quick inquiries.</p>
            <a href="https://wa.me/573142088193" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              WhatsApp: +57 314 2088193
            </a>
          </div>

          {/* Bloque de Ubicación */}
          <div className="info-block studio-location">
            <h3>PRIVATE STUDIO</h3>
            <p className="info-text">Antioquia, Colombia.</p>
            <p className="location-detail">Medellín / Rionegro</p>
            <p className="appointment-only">BY APPOINTMENT ONLY</p>
          </div>

          {/* NUEVO BLOQUE INSTAGRAM (Llamativo y Estilizado) */}
          <div className="instagram-highlight-card">
            <div className="insta-card-header">
              <span className="insta-icon-svg">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
              <h3>VIEW LATEST ART</h3>
            </div>
            <p className="insta-card-text">
              Follow the process, exclusive designs, and healed results on our official profile.
            </p>
            <a href="https://instagram.com/sanzeta_art" className="insta-block-btn" target="_blank" rel="noreferrer">
              FOLLOW @SANZETA_ART
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;