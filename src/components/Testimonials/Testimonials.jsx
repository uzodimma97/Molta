import React from 'react';
import './Testimonials.css';
import section4arrow06 from '../../assets/Arrow 06.svg';

const Testimonials = () => {
  
 const handleContactClick = () => {
    const subject = "Working Capital Loan Inquiry";
    const email = "support@molta.africa";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  const testimonials = [
    {
      name: "Dumebi",
      business: "Processed Foods Lagos",
      quote: "Molta took the time to understand my business and provided a tailored loan structure that helped me achieve my growth targets.",
      rating: 5,
      className: "testimonial-card-left"
    },
    {
      name: "Ahmed",
      business: "Building Materials Kano",
      quote: "Securing a business loan with Molta was a breeze. Their process was professional, responsive, and gave me full confidence in my decision.",
      rating: 5,
      className: "testimonial-card-center"
    },
    {
      name: "Chinedu",
      business: "Consumer Electronics Lagos",
      quote: "Molta was a game-changer for my business. Their fast approval and tailored terms helped me secure the funds I needed to expand.",
      rating: 5,
      className: "testimonial-card-right"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star">★</span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        
        <div className="section-header">
          <div className="section-badge">TESTIMONIALS</div>
          <h2 className="section-title">What our clients say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.className}`}>
              <div className="testimonial-content">
                <h3 className="client-name">{testimonial.name}</h3>
                <p className="client-business">{testimonial.business}</p>
                <blockquote className="client-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to grow your business?</h2>
        </div>

        <div className="decorative-elements-section-5">
          <div className="curved-arrow-down02">
         <img src={section4arrow06} alt="Decorative top arrow" className="arrow-top-section-5"/>   
          </div>
        </div>
         
         <div className="info-box-testimonial">
          <div className="info-content">
            <h3 className="card-title">Fast decisions. Flexible terms. Local expertise.</h3>
            <p className="info-text">
           With Molta, you get more than a loan,
           you gain a growth partner backed by decades of  experience, 
           cutting-edge technology, and a vision for a stronger SME sector.
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

export default Testimonials;