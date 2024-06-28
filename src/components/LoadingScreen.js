import React from 'react';
import logo from '../images/logofam.jpg'; // Adjust the path to your logo image
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Loading..." className="loading-logo" /> 
    </div>
  );
};

export default LoadingScreen;
