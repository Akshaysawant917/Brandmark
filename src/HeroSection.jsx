import React, { useState } from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isDropdownOpen) {
      setIsDropdownOpen(true);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-header">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="hero-text">
        <h1 className="company-name">
              <span className="first-word">BRAND</span> CREST
            </h1>
          <h2 className="hero-subheading">We Create Amazing Experiences</h2>
          <p className="hero-paragraph">
            Discover the best solutions and services tailored to your needs. Our team is dedicated to providing exceptional quality and innovative approaches to help you succeed.
          </p>
          <button className='hero-button'>Create My Logo</button>
        </div>
        <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-header">
            <h2 className="company">Brand Crest</h2>
          </div>
          <div className="menu-toggle" onClick={toggleDropdown}>
              <span className="menu-text">Menu</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </div>
            <button className="close-button" onClick={toggleMenu}>✕</button>
          <nav className={`menu-nav ${isDropdownOpen ? 'show' : 'hide'}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
