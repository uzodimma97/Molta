import React from 'react';
import './WhyMolta.css';
import flexibleIcon from '../../assets/flex icon.svg';
import expertiseIcon from '../../assets/deep exp icon.svg';
import technologyIcon from '../../assets/Tech int.svg';
import section3arrow01 from '../../assets/section 3 arrow 01.svg';
import section3arrow02 from '../../assets/section 3 arrow 02.svg';

const WhyMolta = () => {
  return (
    <section className="why-molta">
      <div className="why-molta-container">
        <div className="section-header">
          <div className="section-badge-3">WHY MOLTA</div>
          <h2 className="section-title-3">
            Financing tailored to your<br />
            business needs
          </h2>
          <p className="section-description">
            Nigerian SMEs are diverse, and we know one-size financing doesn't 
            work. Molta delivers tailored funding solutions that match your cash 
            flow, operational realities, and growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <div className="features-grid"> */}
          <div className="bg-white py-12 my-6 px-4 text-center shadow-lg rounded-3xl">
              <div className="feature-icon">
                <img src={flexibleIcon} alt="Flexible Financing Icon" />
              </div>
              <h3 className="feature-title">Flexible Financing</h3>
              <p className="feature-description">
                Loan amounts, repayment schedules, and collateral options 
                designed to fit your business, not force you into a rigid mold.
              </p>
            </div>

          {/* <div className="feature-card deep-expertise-card"> */}
          <div className="bg-white py-12 px-4 text-center shadow-lg rounded-3xl space-y-4">
            <div className='flex justify-center'>
              <img src={expertiseIcon} className='w-14' alt="Deep Expertise Icon" />
            </div>
            <h3 className="font-semibold text-2xl primary-text-color">Deep expertise in SME lending</h3>
            <p className="feature-description">
              Over 25 years of SME lending experience, giving us the insight to 
              navigate Nigeria's business landscape and structure loans that work in the 
              real world.
            </p>
          </div>

          <div className="bg-white py-12 my-6 px-4 text-center shadow-lg rounded-3xl">
            <div className="feature-icon">
              <img src={technologyIcon} alt="Technology Integration Icon" /> 
            </div>
            <h3 className="feature-title">Technology Integration</h3>
            <p className="feature-description">
              A tech-powered process that speeds approvals, reduces errors, 
              ensures transparency, and scales efficiently for growth.
            </p>
          </div>
        </div>
        
        <div className="decorative-elements-section-3">
          <div className="curved-arrow-left">
            <img src={section3arrow02} alt="Decorative top arrow" className="arrow-top-section-3"/>
          </div>
          <div className="curved-arrow-right">
            <img src={section3arrow01} alt="Decorative bottom arrow" className="arrow-bottom-section-3"/>
          </div>
        </div>
      </div>
    </section>
    
  );
};


export default WhyMolta;
