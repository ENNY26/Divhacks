import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doCreateUserWithEmailAndPassword } from "../Config/Auth"; // Adjust import path as necessary
import "./LoginSignup.css";
import google from '../../assets/google.svg'

const LoginSignup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted", { email, password }); // Log form data
  
    if (isLogin) {
      try {
        await doSignInWithEmailAndPassword(email, password);
        console.log("Logged in successfully!"); // Log success
        navigate('/categories'); // Redirect to categories after login
      } catch (error) {
        console.error("Error logging in: ", error); // Log error
        alert(error.message); // Display error message
      }
    } else {
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        console.log("Signed up successfully!"); // Log success
        navigate('/categories'); // Redirect to categories after signup
      } catch (error) {
        console.error("Error signing up: ", error); // Log error
        alert(error.message); // Display error message
      }
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await doSignInWithGoogle();
      console.log("Signed in with Google:", result.user.displayName);
      navigate('/categories'); // Redirect to categories after Google sign-in
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      alert(error.message); // Display error message
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
          )}
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {!isLogin && (
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Confirm Password" 
                required 
              />
            </div>
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="google-signin">
          <button className="google-button" onClick={handleGoogleSignIn}>
            <img src={google} alt="Google Icon" className="google-icon" /> Sign in with Google
          </button>
        </div>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
