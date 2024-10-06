import React from 'react';
import './RelaxationCenter.css'; // Styling for the Relaxation Center

import RelaxingActivities from '../RelaxingActivities/RelaxingActivities';

const RelaxationCenter = () => {
  return (
    <div className="relaxation-center">
      <h1 className="relaxation-title">Relaxation Center</h1>
      <p className="relaxation-description">
        Take a deep breath and relax. Choose from the calming activities or soothing sounds to help you unwind.
      </p>

      {/* Relaxing Activities Section */}
      <div className="activities-section">
        <h2>Relaxing Activities</h2>
        <RelaxingActivities />
      </div>

     
    </div>
  );
};

export default RelaxationCenter;
