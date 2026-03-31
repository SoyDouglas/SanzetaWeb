import React from 'react';
import '../styles/BookingProcess.css';

const BookingProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Share your idea",
      desc: "Tell us about your concept, size, and placement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Get a quote",
      desc: "We will send you a quote and details for the piece.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Secure your spot",
      desc: "Make a deposit to confirm your appointment.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M9 16l2 2 4-4" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Get Tattooed",
      desc: "Get your custom piece.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.5 2L12 4.5l3.5 3.5L18 5.5 14.5 2z" />
          <path d="M11.5 5L3 13.5v4h4L15.5 9l-4-4z" />
          <path d="M20 18l-3-3" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="booking-section">
      <div className="booking-header">
        <h2 className="booking-title">How to Book</h2>
        <p className="booking-subtitle">A simple process to schedule your custom tattoo in Medellín.</p>
      </div>

      <div className="timeline-container">
        {/* Línea central */}
        <div className="timeline-line"></div>

        {steps.map((step, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            
            <div className="timeline-content">
              <div className="icon-container">
                {step.icon}
              </div>
              <div className="text-container">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>

            <div className="timeline-dot">
              <span className="dot-number">{step.id}</span>
            </div>

          </div>
        ))}
      </div>

      <div className="booking-cta">
        <p>Ready to start your project?</p>
        <a 
          href="https://wa.me/tunumerodewhatsapp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-booking-large"
        >
          BOOK YOUR TATTOO
        </a>
      </div>
    </section>
  );
};

export default BookingProcess;