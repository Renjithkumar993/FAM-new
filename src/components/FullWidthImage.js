import React from 'react';
import './FullWidthImage.css';
import culture from "../images/herosection/culture.png"; // Adjust the path to your image

const FullWidthImage = () => {
  return (
    <div className="full-width-image-container">
      <img src={culture} alt="Culture" className="full-width-image" />
    </div>
  );
};

export default FullWidthImage;
