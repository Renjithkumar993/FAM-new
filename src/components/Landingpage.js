import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import AboutUs from './AboutUs';

const images = [
  `${process.env.PUBLIC_URL}/images/heroimages/c8.jpg`,
  `${process.env.PUBLIC_URL}/images/heroimages/c88.jpg`
];

const LandingPage = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${index === imageIndex ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="overlay"></div>
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
      <div id="about">
        <AboutUs />
      </div>
    </div>
  );
};

export default LandingPage;
