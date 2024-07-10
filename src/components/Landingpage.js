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
              <h2 className="welcome-message">
                Welcome to <span className="highlight">FAM</span>
              </h2>
              <div className="left-aligned-content">
                <p>Fredericton Association of Malayalees (FAM) is a registered non-profit organization established under the Society Act in 2021. We are dedicated to bringing together the Malayalee community in Fredericton through vibrant cultural events and activities. We welcome your ideas and participation as we strive to make a positive impact in our community. Join us for picnics, cultural festival celebrations, and other exciting events that foster unity and celebrate our rich cultural heritage</p>
                <div className="button-group ">
                  <button className="primary-btn">About Us</button>
                  <button className="secondary-btn">Learn more</button>
                </div>
              </div>
            </div>
            <div className="image-content">
              <img src={sampleImage} alt="Meeting" className="constant-3d-effect" />
            </div>
          </main>
        </div>
        <div className="sloped-bottom"></div>
      </div>
    </div>
  );
};

export default LandingPage;
