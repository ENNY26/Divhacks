// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-title">SuperKids</h4>
        <p className="footer-description">Your support platform for autistic children and their families.</p>
        <ul className="footer-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#feedbacks">Feedbacks</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Superkids. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
