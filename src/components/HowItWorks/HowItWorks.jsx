import React from 'react';
import './HowItWorks.css';
import formsIllustration from '../../assets/image 02 bg.svg';
import formsIllustrationOverlay from '../../assets/image 02.svg';
import arrow08 from '../../assets/Arrow 08.svg';
import arrow04 from '../../assets/Arrow 04.svg';
import arrow07 from '../../assets/Arrow 07.svg';

const HowItWorks = () => {

const handleContactClick = () => {
    const subject = "Working Capital Loan Inquiry";
    const email = "support@molta.africa";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  const requirements = [
    "Located in Nigeria",
    "Operate as a sole trader, partnership, or registered company",
    "Share key information about your business",
    "Provide recent bank statements"
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        
        <div className="section-header">
          <div className="section-badge-2">HOW IT WORKS</div>
          <h2 className="section-title-2">
            Funding your business,<br />
            minus the friction
          </h2>
        </div>

        <div className="main-content">
          <div className="illustration-container">
            <img 
              src={formsIllustration} 
              alt="Person working on laptop with forms and documents" 
              className="forms-illustration"
            />
            <div className="illustration-overlay-image-container">
              <img
                src={formsIllustrationOverlay}
                alt="Decorative overlay image"
                className="Illustration-overlay-image"
              />
            </div>
            <div className="decorative-elements-section-2">
               <img src={arrow08} alt="Decorative top arrow" className="arrow-top-section-2"/>
              <img src={arrow04} alt="Decorative bottom arrow" className="arrow-bottom-section-2"/>
               <img src={arrow07} alt="Decorative middle arrow" className="arrow-middle-section-2"/>
            </div>
          </div>

          <div className="requirements-container">
            <h3 className="requirements-title">Getting started is simple:</h3>
            <div className="requirements-list">
              {requirements.map((requirement, index) => (
                <div key={index} className="requirement-item">
                  <div className="check-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#695CEF"/>
                      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="requirement-text">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="info-box">
          <div className="info-content">
            <p className="info-text">
              We’ve streamlined our process for faster approvals,
              giving you more time to grow with the backing of a team that has financed thousands of Nigerian businesses.
            </p>
          </div>
          <div className="info-cta">
            <button className="contact-btn" onClick={handleContactClick}>Contact Us</button>
          </div>
          <div className="info-decorative">
            <div className="info-circle"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
