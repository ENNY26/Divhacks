import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Schedule.css'; 
import morningImage from '../../assets/morning2.jpeg';
import nightImage from '../../assets/night.jpg';
import afternoonImage from '../../assets/afternoon.jpg'; 

const Schedule = () => {
  const navigate = useNavigate(); // Create navigate function

  const handleCardClick = (time) => {
    navigate(time); // Navigate to the corresponding time page
  };

  return (
    <div className="scheduling-container">
      <h1 className="scheduling-title">Choose Your Schedule</h1>
      <div 
        className="schedule-card" 
        style={{ backgroundImage: `url(${morningImage})` }} 
        onClick={() => handleCardClick('/morning')} // Navigate to morning page
      >
        <span className="card-text">Morning</span>
      </div>
      <div 
        className="schedule-card" 
        style={{ backgroundImage: `url(${afternoonImage})` }} 
        onClick={() => handleCardClick('/afternoon')} // Navigate to afternoon page
      >
        <span className="card-text">Afternoon</span>
      </div>
      <div 
        className="schedule-card" 
        style={{ backgroundImage: `url(${nightImage})` }} 
        onClick={() => handleCardClick('/night')} // Navigate to night page
      >
        <span className="card-text">Night</span>
      </div>
    </div>
  );
};

export default Schedule;
