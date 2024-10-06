import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './listen.css'; 
import morningImage from '../../assets/morning2.jpeg';
import nightImage from '../../assets/night.jpg';
import afternoonImage from '../../assets/afternoon.jpg'; 
import carImage from '../../assets/car.svg';
import dogImage from '../../assets/dog.svg';
import airplaneImage from '../../assets/airplane.svg';

import dogSound from '../../assets/dog.mp3'; // Your sound file
import carSound from '../../assets/car.mp3'; // Your sound file
import airplaneSound from '../../assets/airplane.mp3'; // Your sound file

const Listen = () => {
  const navigate = useNavigate(); // Create navigate function

  const dogSoundRef = useRef(null);
  const carSoundRef = useRef(null);
  const airplaneSoundRef = useRef(null);
  const soundRefs = [dogSoundRef, carSoundRef, airplaneSoundRef];

  // Function to stop all sounds
  const stopAllSounds = () => {
    soundRefs.forEach((soundRef) => {
      if (soundRef.current) {
        soundRef.current.pause();
        soundRef.current.currentTime = 0; // Reset audio to the beginning
      }
    });
  };

  // Function to play sound
  const playSound = (soundRef) => {
    stopAllSounds(); // Stop any currently playing sounds
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  return (
    <div className="scheduling-container">
      <h1 className="scheduling-title">Listen and Learn</h1>
      <div className="schedule-grid">
        <div className="schedule-card" onClick={() => playSound(carSoundRef)}>
          <img src={carImage} alt="Car" className="schedule-image" />
          <span className="card-text">Car</span>
        </div>
        <div className="schedule-card" onClick={() => playSound(dogSoundRef)}>
          <img src={dogImage} alt="Dog" className="schedule-image" />
          <span className="card-text">Dog</span>
        </div>
        <div className="schedule-card" onClick={() => playSound(airplaneSoundRef)}>
          <img src={airplaneImage} alt="Airplane" className="schedule-image" />
          <span className="card-text">Airplane</span>
        </div>
      </div>
      
      {/* Audio elements */}
      <audio ref={carSoundRef} src={carSound} />
      <audio ref={dogSoundRef} src={dogSound} />
      <audio ref={airplaneSoundRef} src={airplaneSound} />
    </div>
  );
};

export default Listen;
