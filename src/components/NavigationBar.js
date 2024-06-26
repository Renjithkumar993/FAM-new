// src/components/NavigationBar.js
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../images/logofam.jpg'; // Adjust the path to your logo image
import './Navbar.css'; // Ensure you import the updated CSS

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar-custom fixed-top" expanded={expanded}>
      <div className="container">
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <img src={logo} alt="FAM Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggler-custom" 
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500} onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500} onClick={handleLinkClick}>About Us</Nav.Link>
            <Nav.Link as={Link} to="gallery" smooth={true} duration={500} onClick={handleLinkClick}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="news" smooth={true} duration={500} onClick={handleLinkClick}>Events</Nav.Link>
            <Nav.Link as={Link} to="team" smooth={true} duration={500} onClick={handleLinkClick}>Team</Nav.Link>
            <Nav.Link as={Link} to="move" smooth={true} duration={500} onClick={handleLinkClick}>New to fredericton ?</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} onClick={handleLinkClick}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
