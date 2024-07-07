import React from 'react';
import { Box } from '@mui/material';
import logo from '../images/logofam.jpg';
import './FloatingLogo.css';

const FloatingLogo = ({ scrolled }) => {
  return (
    <Box className={`floating-logo ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="FAM Logo" className="floating-logo-img" />
    </Box>
  );
};

export default FloatingLogo;
