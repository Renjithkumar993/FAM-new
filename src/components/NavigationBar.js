import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../images/logofam.jpg';
import './Navbar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`} expanded={expanded}>
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
          <Nav className="ml-auto"> {/* Changed from mx-auto to ml-auto */}
            <Nav.Link as={Link} to="home" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>About Us</Nav.Link>
            <Nav.Link as={Link} to="gallery" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="news" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>Events</Nav.Link>
            <Nav.Link as={Link} to="meet" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>Team</Nav.Link>
            <Nav.Link as={Link} to="move" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>New to Fredericton?</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} offset={-70} onClick={handleLinkClick}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
