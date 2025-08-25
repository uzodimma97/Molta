import React from 'react'
import './Card01.css';
const Card01 = () => {

  const handleContactClick = () => {
    const subject = "Working Capital Loan Inquiry";
    const email = "support@molta.africa";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="card-section">  
     <div className="card-box">
          <div className="card-content">
            <h3 className="card-title">Get your business loan today</h3>
            <p className="card-text">
              Businesses choose Molta because we combine local expertise with modern lending  technology, 
              enabling fast decisions and terms that make sense for long-term success.  
              We’re not just another lender, we’re a partner in your growth.
            </p>
          </div>
          <div className="info-cta">    
            <button className="contact-btn" onClick={handleContactClick}>Contact Us</button>
          </div>
          <div className="info-decorative">
            <div className="info-circle"></div>
          </div>
        </div>
      </section>
  )
};

export default Card01
