// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to SuperKids</h1>
        <p className="hero-subtitle">
        Our Mission:
We are committed to empowering children with autism to experience life like any 
other child. Through our application, we aim to foster meaningful interactions, 
enabling autistic kids to connect and engage effectively with their friends and family.
 We believe that every child deserves the opportunity to thrive socially and emotionally,
 and we are here to support them on that journey.
        </p>
        <a href="#features" className="cta-button">
          Explore Features
        </a>
      </div>
    </div>
  );
};

export default Hero;
