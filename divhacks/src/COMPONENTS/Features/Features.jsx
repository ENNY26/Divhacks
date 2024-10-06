// Features.js
import React from 'react';
import './Features.css';

const featuresData = [
  {
    title: 'Support Resources',
    description: 'Access a wide range of resources for parents and children.',
    image: 'path/to/support-resources-image.png', // Add the correct path to your image
  },
  {
    title: 'Community Engagement',
    description: 'Connect with other families and share experiences.',
    image: 'path/to/community-engagement-image.png', // Add the correct path to your image
  },
  {
    title: 'Interactive Learning',
    description: 'Engage children with fun and interactive activities.',
    image: 'path/to/interactive-learning-image.png', // Add the correct path to your image
  },
  {
    title: 'Progress Tracking',
    description: 'Track your child’s progress with personalized dashboards.',
    image: 'path/to/progress-tracking-image.png', // Add the correct path to your image
  },
];

const Features = () => {
  return (
    <div className="features-section" id="features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
