import React from 'react';
import { Link } from 'react-router-dom'; 
import './Categories.css'; 

const categories = [
  { name: 'Schedule', link: '/schedule' },
  { name: 'Listen and Learn', link: '/listen-and-learn' },
  { name: 'Yes or No', link: '/yesorno' },
  { name: 'Relaxation Center', link: '/relax' },
  { name: 'Drawing', link: '/draw' }, // Updated link here
  { name: 'Forum', link: '/forum' }
];

const Categories = () => {
  return (
    <div className="categories-page">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <Link to={category.link}>
              <span>{category.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
