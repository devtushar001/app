// HeroSection.js
import React from 'react';
import './Hero.css'; // Optional, for Hero Section styling

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to <span>DASTOOR</span></h1>
        <p>Your Home Away From Home</p>
        <button className="btn-book-now">Book Now</button>
      </div>
    </section>
  );
};

export default Hero;
