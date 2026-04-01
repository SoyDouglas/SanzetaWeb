import React from 'react';
import '../styles/ReadyToInk.css'; // Asegúrate de enlazar tu archivo CSS

const ReadyToInk = () => {
  return (
    <section className="ready-section">
      <div className="ready-container">
        <h2 className="section-title">Ready for your next piece?</h2>
        <p>Books are currently open. Let's bring your vision to life.</p>
        <a href="https://wa.me/573142088193" className="btn-primary" target="_blank" rel="noopener noreferrer">
          BOOK YOUR SESSION
        </a>
      </div>
    </section>
  );
};

export default ReadyToInk;