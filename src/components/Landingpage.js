import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const images = [
  `${process.env.PUBLIC_URL}/images/heroimages/Fredericton-Hero.jpg`,
  `${process.env.PUBLIC_URL}/images/heroimages/Kerala-hero.jpg`,
  `${process.env.PUBLIC_URL}/images/heroimages/Kerala-hero1.jpg`
];

const texts = [
  {
    welcome: 'Welcome to FAM',
    description: 'Fredericton Association of Malayalees (FAM) is a registered non-profit organization established under the Society Act in 2021.',
    primaryBtn: { text: 'About Us', action: '/aboutus' },
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
    primaryBtn: { text: 'Join Now', action: '/join' },
    secondaryBtn: { text: 'Learn more', action: '/join' }
  }
];

const LandingPage = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

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
              {texts[imageIndex].welcome}
            </h2>
            <div className="left-aligned-content">
              <p>
                {texts[imageIndex].description}
              </p>
              <div className="button-group">
                <button className="primary-btn" onClick={() => navigate(texts[imageIndex].primaryBtn.action)}>
                  {texts[imageIndex].primaryBtn.text}
                </button>
                <button className="secondary-btn" onClick={() => navigate(texts[imageIndex].secondaryBtn.action)}>
                  {texts[imageIndex].secondaryBtn.text}
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
