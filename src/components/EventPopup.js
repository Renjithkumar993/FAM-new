import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link as ScrollLink } from 'react-scroll';
import './EventPopup.css';

// Dynamically import images from the folder
const importAll = (r) => r.keys().map(r);
const eventImages = importAll(require.context('../events', false, /\.(png|jpe?g|svg)$/));

const EventPopup = () => {
  const [show, setShow] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // Show the image popup 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('event-popup')) {
      setShow(false);
    }
  };

  const currentImage = eventImages[imageIndex];

  return (
    <CSSTransition in={show} timeout={300} classNames="popup" unmountOnExit>
      <div className="event-popup" onClick={handleOverlayClick}>
        <div className="popup-content">
          <button className="close-button" onClick={handleClose}>&times;</button>
          <ScrollLink to="news" smooth={true} duration={500} offset={-70}>
            <img src={currentImage} alt="Event" className="event-popup-image" />
          </ScrollLink>
          <p className="popup-message">Check the Events section to register!</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default EventPopup;
