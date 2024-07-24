import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const image = `${process.env.PUBLIC_URL}/images/heroimages/Kerala-hero.jpg`;

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
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: false });
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrimaryButtonClick = (action) => {
    if (action.startsWith('#')) {
      const element = document.querySelector(action);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(action);
    }
  };

  return (
    <div className="landing-page">
      <div className="hero-section" ref={heroRef}>
        <div
          className={`hero-image ${heroInView ? 'fixed' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="overlay"></div>
        <main className="main-content mt-5">
          <div className={`text-content ${textInView ? 'slide-in-left' : ''}`} ref={textRef}>
            <h2 className="welcome-message mt-5">
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
