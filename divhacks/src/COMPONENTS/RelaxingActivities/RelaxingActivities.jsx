import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RelaxingActivities.css';

// Import icons or images for actions and sounds
import flowersImage from '../../assets/flowers.avif';
import bubblesImage from '../../assets/bubbles.avif';
import oceanSound from '../../assets/oceans.mp3'; // Your sound file
import birdsSound from '../../assets/birds.mp3'; // Your sound file
import rainSound from '../../assets/rain.mp3'; // Your sound file

import oceanIcon from '../../assets/ocean.svg';
import birdsIcon from '../../assets/birds.svg';
import rainIcon from '../../assets/rain.svg';

const RelaxingActivities = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Refs for each sound
  const oceanSoundRef = useRef(null);
  const birdsSoundRef = useRef(null);
  const rainSoundRef = useRef(null);

  // Array to hold all sound references for easier management
  const soundRefs = [oceanSoundRef, birdsSoundRef, rainSoundRef];

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
    <div className="relaxing-activities-container">
      {/* Breathing Section */}
      <section className="breathing-section">
        <h2 className="section-title">Deep Breathing</h2>
        <div className="breathing-cards">
          <div className="breathing-card">
            <h1 className="step-number">1</h1>
            <img src={flowersImage} alt="Smell the Flowers" className="breathing-image" />
            <div className="breathing-info">
              <h3>Step 1: Smell the Flowers</h3>
              <p>Breathe in deeply through your nose as if you're smelling fresh flowers.</p>
            </div>
          </div>
          <div className="breathing-card">
            <h1 className="step-number">2</h1>
            <img src={bubblesImage} alt="Blow the Bubbles" className="breathing-image" />
            <div className="breathing-info">
              <h3>Step 2: Blow the Bubbles</h3>
              <p>Breathe out slowly through your mouth as if you're blowing bubbles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Drawing Section */}
      <section className="drawing-section">
        <h2 className="section-title">Draw a Picture</h2>
        <p>Pick a color and draw something calm.</p>
        <button
          className="start-drawing-button"
          onClick={() => navigate('/draw')} // Navigate to drawing activity
        >
          Start Drawing
        </button>
      </section>

      {/* Soothing Sounds Section */}
      <section className="sounds-section">
        <h2 className="section-title">Soothing Sounds</h2>
        <p>Click on an icon to hear the sound and relax.</p>
        <div className="sounds-buttons-container">
          <div className="sound-card" onClick={() => playSound(oceanSoundRef)}>
            <img src={oceanIcon} alt="Ocean Waves" className="sound-icon" />
            <p>Ocean Waves</p>
          </div>
          <div className="sound-card" onClick={() => playSound(birdsSoundRef)}>
            <img src={birdsIcon} alt="Birds Chirping" className="sound-icon" />
            <p>Birds Chirping</p>
          </div>
          <div className="sound-card" onClick={() => playSound(rainSoundRef)}>
            <img src={rainIcon} alt="Rain Drops" className="sound-icon" />
            <p>Rain Drops</p>
          </div>
        </div>
      </section>

      {/* Hidden audio elements */}
      <audio ref={oceanSoundRef} src={oceanSound} />
      <audio ref={birdsSoundRef} src={birdsSound} />
      <audio ref={rainSoundRef} src={rainSound} />
    </div>
  );
};

export default RelaxingActivities;
