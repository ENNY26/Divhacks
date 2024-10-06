// YesOrNo.js
import React, { useRef } from 'react';
import './YesOrNo.css'; // Import CSS for styling
import yesAudio from '../../assets/yes.mp3'; // Yes audio file
import noAudio from '../../assets/no.mp3'; // No audio file

const YesOrNo = () => {
  // Refs for audio
  const yesAudioRef = useRef(null);
  const noAudioRef = useRef(null);

  // Function to play sound
  const playSound = (soundRef) => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  return (
    <div className="yes-or-no-container">
        
      <div
        className="yes-card"
        onClick={() => playSound(yesAudioRef)}
      >
      </div>
      <div
        className="no-card"
        onClick={() => playSound(noAudioRef)}
      >
      </div>

      {/* Hidden audio elements */}
      <audio ref={yesAudioRef} src={yesAudio} />
      <audio ref={noAudioRef} src={noAudio} />
    </div>
  );
};

export default YesOrNo;
