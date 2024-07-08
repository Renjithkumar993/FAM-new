import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
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
                <Typewriter
                  words={[
                    'Welcome to FAM 🙏',
                    
                    'Fredericton Association of Malayalees'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p>Fredericton Association of Malayalees (FAM)
              A registered non-profit organization - society act established in 2021Bring Your Ideas
Join Us in Making a Difference
We welcome your suggestions and participation in our activities.
We Do Picnics
Cultural Festival Celebrations
Bringing together the community with vibrant cultural events.</p>
              <div className="button-group">
                <button className="primary-btn">About Us</button>
                <button className="secondary-btn">Learn more</button>
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
