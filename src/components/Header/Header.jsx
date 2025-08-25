import React from 'react';
import './Header.css';
import HeaderBackground from '../../assets/image 01 bg.svg';
import HeaderOverlay from '../../assets/image 01.png';
import arrow01 from '../../assets/Arrow 01.svg';
import arrow02 from '../../assets/Arrow 02.svg';
import decorativeLine from '../../assets/decorative line.svg';


const Header = () => {
 
  const handleContactClick = () => {
    const subject = "Working Capital Loan Inquiry";
    const email = "support@molta.africa";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="Header">
      <div className="Header-container">
        <div className="Header-content">
          <h1 className="Header-title">
            Power your growth with up to ₦20M in working capital.
          </h1>
          
          <p className="Header-description">
            Molta provides fast, flexible financing built for Nigerian SMEs. 
            Our deep local market knowledge, innovative lending structures, 
            and proven track record mean you get funding that works for your business, and delivers measurable impact.
          </p>
          
          <button className="Header-cta" onClick={handleContactClick}>Contact Us</button>
        </div>

        <div className="Header-visual">
          <div className="Header-image-container">
            <img 
              src={HeaderBackground} 
              alt="Woman with phone using Molta services" 
              className="Header-image"
            />
          </div>

           <div className="Header-overlay-image-container">
            <img
              src={HeaderOverlay}
              alt="Decorative overlay image"
              className="Header-overlay-image"
            />
          </div>
          
          <div className="decorative-elements">
            <img src={arrow01} alt="Decorative top arrow" className="arrow-top"/>
            <img src={arrow02} alt="Decorative bottom arrow" className="arrow-bottom"/>
            <img src={decorativeLine} alt="Decorative line element" className="decorative-line"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
