import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll, scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logofam.jpg';
import './Navbar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70,
      });
    }, 100);
  };

  const isTransparent = location.pathname === '/';

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom fixed-top ${scrolled || !isTransparent ? 'scrolled' : ''}`}
      expanded={expanded}
    >
      <div className="container">
        <Navbar.Brand as={RouterLink} to="/" className="navbar-brand-custom">
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
          <Nav className="ml-auto">
            <Nav.Link
              as={RouterLink}
              to="/"
              onClick={() => {
                handleLinkClick();
                if (location.pathname === '/') {
                  scroll.scrollToTop();
                } else {
                  navigate('/');
                }
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleLinkClick();
                handleNavClick('about');
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleLinkClick();
                handleNavClick('gallery');
              }}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleLinkClick();
                handleNavClick('news');
              }}
            >
              Events
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleLinkClick();
                handleNavClick('move');
              }}
            >
              New to Fredericton?
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleLinkClick();
                handleNavClick('contact');
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
