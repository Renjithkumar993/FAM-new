import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const image = `${process.env.PUBLIC_URL}/images/heroimages/Kerala-hero.avif`;

const texts = [
  {
    welcome: 'Welcome to FAM',
    description: 'Fredericton Association of Malayalees (FAM) is a registered non-profit organization established under the Society Act in 2021.',
    primaryBtn: { text: 'About Us', action: '#about' },
    secondaryBtn: { text: 'Learn more', action: '/aboutus' }
  },
  {
    welcome: 'Join us for our events',
    description: 'Explore our upcoming events and join us for a wonderful experience.',
    primaryBtn: { text: 'Events', action: '/events' },
    secondaryBtn: { text: 'More info', action: '/events' }
  },
  {
    welcome: 'Be a part of our community',
    description: 'Join us and be a part of a vibrant and supportive community.',
    primaryBtn: { text: 'Join Now', action: '/joinus' },
    secondaryBtn: { text: 'Learn more', action: '/aboutus' }
  }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrimaryButtonClick = useCallback((action) => {
    if (action.startsWith('#')) {
      const element = document.querySelector(action);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(action);
    }
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="overlay"></div>
        <main className="main-content">
          <div className="text-content">
            <h2 className="welcome-message">
              {texts[textIndex].welcome}
            </h2>
            <div className="left-aligned-content">
              <p>
                {texts[textIndex].description}
              </p>
              <div className="button-group">
                <button className="primary-btn" onClick={() => handlePrimaryButtonClick(texts[textIndex].primaryBtn.action)}>
                  {texts[textIndex].primaryBtn.text}
                </button>
                <button className="secondary-btn" onClick={() => navigate(texts[textIndex].secondaryBtn.action)}>
                  {texts[textIndex].secondaryBtn.text}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
