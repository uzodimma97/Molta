import React from 'react'
import './Team.css';
import section4arrow05 from '../../assets/Arrow 05.svg';

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-badge">TEAM</div>
        
        <h2 className="team-title">
          Guided by experience. Driven by purpose
        </h2>
        
        <p className="team-description">
          For decades, our team has supported the growth of Nigerian businesses, 
          from first-time entrepreneurs to established SMEs scaling across regions. 
          This experience shapes our mission: financing Africa's next generation of 
          business leaders and strengthening the SME sector.
        </p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-divider"></div>
            <div className="stat-label">
              Years in SME lending experience
            </div>
          </div>
          
          <div className="stat-card-middle">
            <div className="stat-number-middle">₦25b+</div>
            <div className="stat-divider-middle"></div>
            <div className="stat-label-middle">
              Funded for small and medium businesses
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">100k+</div>
            <div className="stat-divider"></div>
            <div className="stat-label">
              Nigerian businesses empowered through loans
            </div>

          <div className="decorative-elements-section-4">
            <div className="curved-arrow-down01">
              <img src={section4arrow05} alt="Decorative top arrow" className="arrow-top-section-4"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;