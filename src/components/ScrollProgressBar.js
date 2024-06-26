import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ScrollProgressBar.css'; // You can create this CSS file for styling

const ScrollProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const updatePercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setPercentage(scrolled);
    };

    window.addEventListener('scroll', updatePercentage);

    return () => {
      window.removeEventListener('scroll', updatePercentage);
    };
  }, []);

  return (
    <div className="scroll-progress-bar">
      <CircularProgressbar value={percentage} text={`${Math.round(percentage)}%`} />
    </div>
  );
};

export default ScrollProgressBar;
