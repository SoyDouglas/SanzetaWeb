import React, { useState } from 'react';
import '../styles/Info.css';

const Info = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "Do I need to leave a deposit?", a: "Yes, a non-refundable deposit is required to secure your appointment and start the design process." },
    { q: "Can I bring a companion?", a: "To maintain a calm and professional environment, we ask that you come alone or with maximum one companion." },
    { q: "How do I care for my new tattoo?", a: "We will provide a detailed physical guide, but generally: keep it clean, use the recommended balm, and avoid sun/pools for 2 weeks." },
    { q: "Where exactly is the studio?", a: "We are located in Rionegro. The exact private address is shared once your appointment is confirmed." }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="info-page">
      <div className="info-hero">
        <h1>Studio Info & Logistics</h1>
        <p>Everything you need to know before your session.</p>
      </div>

      <section className="info-grid">
        {/* Bloque de Salud y Seguridad */}
        <div className="info-card">
          <h3>Health & Safety</h3>
          <p>With 6+ years of experience, we follow strict international hygiene protocols. All needles are single-use and our equipment is 100% sterilized.</p>
        </div>

        {/* Bloque de Depósitos */}
        <div className="info-card">
          <h3>Booking Policies</h3>
          <p>Deposits are non-refundable but can be moved to a new date if you notify us at least 48 hours in advance.</p>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes (FAQ) */}
      <section className="faq-section">
        <h2>Common Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">{activeFaq === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="info-footer-cta">
        <a href="/" className="btn-back">Back to Home</a>
      </div>
    </div>
  );
};

export default Info;