import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []); 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="footer-logo-text">molta</span>
            </div>
            <div className="company-name">
              <span>Molta Africa Limited</span>
            </div>
          </div>
          <div className="footer-right">
            <div className="address">
              <div className="address-line">82, Upper Iweka Road</div>
              <div className="address-line">Onitsha, Anambra State</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {currentYear} Molta Inc. All Rights Reserved</span>
          </div>
          <div className="footer-contact">
            <span>support@molta.africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
