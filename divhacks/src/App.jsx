import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Landingpage from './Pages/Landingpage';
import { auth } from './COMPONENTS/Config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Categories from './COMPONENTS/Categories/Categories';
import LoginSignup from './COMPONENTS/LoginSignup/LoginSignup';
import Schedule from './COMPONENTS/Schedule/Schedule';
import MorningSchedule from './COMPONENTS/MorningSchedule/MorningSchedule';
import RelaxationCenter from './COMPONENTS/RelaxationCenter/RelaxationCenter';
import DrawingCanvas from './COMPONENTS/DrawingCanvas/DrawingCanvas';
import YesOrNo from './COMPONENTS/YesorNo/YesorNo';
import Listen from './COMPONENTS/Listen/listen';
import AfternoonSchedule from './COMPONENTS/AfternoonSchedule/MorningSchedule'
import NightSchedule from './COMPONENTS/NightSchedule/MorningSchedule'
import Forum from './COMPONENTS/Forum/forum'



const App = () => {
  const [user, loading] = useAuthState(auth);

  // Log the user state to see its value
  console.log("User:", user);

  // Optional: Show a loading state while checking the authentication status
  if (loading) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <Router>
      <Routes>
      <Route path="categories" element={<Categories />} />
      <Route path="login" element={<LoginSignup />} />
      <Route path="/" element={<Landingpage />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="morning" element={<MorningSchedule />} />
      <Route path="relax" element={<RelaxationCenter />} />
      <Route path="draw" element={<DrawingCanvas />} />
      <Route path="Yesorno" element={<YesOrNo />} />
      <Route path="listen-and-learn" element={<Listen />} />
      <Route path="afternoon" element={<AfternoonSchedule/>} />
      <Route path="night" element={<NightSchedule/>} />
      <Route path="forum" element={<Forum/>} />


      </Routes>
    </Router>
  );
};

export default App;
