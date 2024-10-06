import React, { useState } from 'react';
import './MorningSchedule.css'; // Import the CSS styling

// Import PNG images
import wakeUpIcon from '../../assets/alarm.jpg';
import brushTeethIcon from '../../assets/brushteeth.webp';
import breakfastIcon from '../../assets/breakfast.png';
import getDressedIcon from '../../assets/dressingup.jpg';
import activityTimeIcon from '../../assets/activity.jpg';
import relaxationTimeIcon from '../../assets/relaxing.jpg';

// Import MP3 sound effects
import wakeUpSound from '../../assets/goodmorning.mp3';
import brushTeethSound from '../../assets/new.mp3';
import breakfastSound from '../../assets/correct.mp3';
import getDressedSound from '../../assets/correct.mp3';
import activityTimeSound from '../../assets/correct.mp3';
import relaxationTimeSound from '../../assets/correct.mp3';

const MorningSchedule = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const morningTasks = [
    { name: 'Wake Up', time: '7:00 AM', icon: wakeUpIcon, sound: wakeUpSound },
    { name: 'Brush Teeth', time: '7:30 AM', icon: brushTeethIcon, sound: brushTeethSound },
    { name: 'Breakfast', time: '8:00 AM', icon: breakfastIcon, sound: breakfastSound },
    { name: 'Get Dressed', time: '8:30 AM', icon: getDressedIcon, sound: getDressedSound },
    { name: 'Activity Time', time: '9:00 AM', icon: activityTimeIcon, sound: activityTimeSound },
    { name: 'Relaxation Time', time: '9:30 AM', icon: relaxationTimeIcon, sound: relaxationTimeSound },
  ];

  // Toggle task completion and play sound
  const toggleTaskCompletion = (taskName, soundFile) => {
    // Play sound
    const audio = new Audio(soundFile);
    audio.play();

    // Toggle task completion
    setCompletedTasks((prev) =>
      prev.includes(taskName)
        ? prev.filter((name) => name !== taskName)
        : [...prev, taskName]
    );
  };

  return (
    <div className="morning-schedule-container">
      <h1 className="schedule-title">Morning Schedule</h1>
      <div className="tasks-grid">
        {morningTasks.map((task, index) => (
          <div
            key={index}
            className={`task-card ${completedTasks.includes(task.name) ? 'completed' : ''}`}
            style={{ backgroundImage: `url(${task.icon})` }}
            onClick={() => toggleTaskCompletion(task.name, task.sound)}
          >
            <div className="task-info">
              <h2>{task.name}</h2>
              <p>{task.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorningSchedule;
