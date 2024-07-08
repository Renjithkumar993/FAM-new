import React from 'react';
import './LandingPage.css';
import sampleImage from '../images/Screenshot_2024-07-07_170027-removebg-preview.png'; // Replace with your image path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="full-width-background">
        <div className="container">
          <main className="main-content mt-5">
            <div className="text-content">
              <h2>Welcome to Fredericton Association of Malayalees</h2>
              <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div className="button-group">
                <button className="primary-btn">About Us</button>
                <button className="secondary-btn">Learn more</button>
              </div>
            </div>
            <div className="image-content">
              <img src={sampleImage} alt="Meeting" />
            </div>
          </main>
        </div>
        <div className="sloped-bottom"></div>
      </div>
    </div>
  );
};

export default LandingPage;
