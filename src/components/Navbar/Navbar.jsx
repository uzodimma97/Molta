import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {

 const handleContactClick = () => {
    const subject = "Working Capital Loan Inquiry";
    const email = "support@molta.africa";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <header className="Navbar">
      <div className="Navbar-container">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Molta Logo" className="h-9 w-auto mr-2 md:h-10 lg:h-12" />
        </a>

       {/*<nav className="navigation">
          <a href="#" className="nav-link">How it works</a>
          <a href="#" className="nav-link">Why Molta</a>
          <a href="#" className="nav-link">Team</a>
        </nav>*/}

        <div className="Navbar-actions">
          <button className="btn btn-contact" onClick={handleContactClick}>Contact Us</button>
          <button className="btn btn-invest">Invest</button>
        </div>
      </div>
    </header>
  );
};



export default Navbar;