import React from 'react';
import '../styles/ReadyToInk.css'; 

const ReadyToInk = () => {
  // Configuración del mensaje breve para WhatsApp
  const whatsappNumber = "573142088193";
  const message = encodeURIComponent("Hi! I'd like to book a tattoo session.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="ready-section">
      <div className="ready-container">
        <h2 className="section-title">Ready for your next piece?</h2>
        <p>Books are currently open. Let's bring your vision to life.</p>
        
        {/* Botón actualizado */}
        <a 
          href={whatsappUrl} 
          className="btn-primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          BOOK YOUR SESSION
        </a>
      </div>
    </section>
  );
};

export default ReadyToInk;