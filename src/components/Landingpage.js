import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import FullWidthImage from './FullWidthImage';

const LandingPage = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: false });
  const navigate = useNavigate(); 

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backgroundImage= `${process.env.PUBLIC_URL}/images/heroimages/c8.jpg`;

  return (
    <div className="landing-page">
        <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <main className="main-content mt-5">
            <div className={`text-content ${textInView ? 'slide-in-left' : ''}`} ref={textRef}>
              <h2 className="welcome-message mt-5">
                Welcome to <span className="highlight">FAM</span>
              </h2>
              <div className="left-aligned-content">
                <p>
                  Fredericton Association of Malayalees (FAM) is a registered non-profit organization established under the Society Act in 2021.
                </p>
                <div className="button-group">
                  <button className="primary-btn" onClick={scrollToAbout}>About Us</button>
                  <button className="secondary-btn" onClick={() => navigate('/aboutus')}>Learn more</button>
                </div>
              </div>
            </div>
          </main>
        </div>
        
      </div>
   
    </div>
  );
};

export default LandingPage;
