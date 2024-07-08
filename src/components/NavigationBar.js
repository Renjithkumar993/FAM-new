import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faImages, faCalendarAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logofam.jpg';
import './Navbar.css';

const pages = [
  { name: 'Home', icon: faHome, path: '/' },
  { name: 'About Us', icon: faInfoCircle, path: '/aboutus' },
  { name: 'Gallery', icon: faImages, path: '/gallery' },
  { name: 'Events', icon: faCalendarAlt, path: '/events' },
  { name: 'New to Fredericton?', icon: faMapMarkerAlt, path: '/newtofredericton' },
  { name: 'Contact Us', icon: faEnvelope, path: '/contactus' },
];

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <RouterLink to="/" className="navbar-brand-custom">
          <img src={logo} alt="FAM Logo" className={`navbar-logo ${scrolled ? 'scrolled-logo' : ''}`} />
        </RouterLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {pages.map((page) => (
            <li key={page.name} className="nav-item">
              <RouterLink to={page.path} className="nav-links" onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon icon={page.icon} className="nav-icon" />
                {page.name}
              </RouterLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
