import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LandingPage.css';
import sampleImage from '../images/Screenshot_2024-07-07_170027-removebg-preview.png'; // Replace with your image path

const LandingPage = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
  });

  const navigate = useNavigate(); // Initialize navigate

  // Function to handle smooth scroll
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <div className="full-width-background">
        <div className="container">
          <main className="main-content mt-5">
            <div className={`text-content ${textInView ? 'slide-in-left' : ''}`} ref={textRef}>
              <h2 className="welcome-message">
                Welcome to <span className="highlight">FAM</span>
              </h2>
              <div className="left-aligned-content">
                <p>
                  Fredericton Association of Malayalees (FAM) is a registered non-profit organization established under the Society Act in 2021. We are dedicated to bringing together the Malayalee community in Fredericton through vibrant cultural events and activities. We welcome your ideas and participation as we strive to make a positive impact in our community. Join us for picnics, cultural festival celebrations, and other exciting events that foster unity and celebrate our rich cultural heritage.
                </p>
                <div className="button-group">
                  <button className="primary-btn" onClick={scrollToAbout}>About Us</button>
                  <button className="secondary-btn" onClick={() => navigate('/aboutus')}>Learn more</button>
                </div>
              </div>
            </div>
            <div className={`image-content ${imageInView ? 'slide-in-right' : ''}`} ref={imageRef}>
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
