import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faImages, faCalendarAlt, faMapMarkerAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const pages = [
  { name: 'Home', icon: faHome, path: '/' },
  { name: 'About Us', icon: faInfoCircle, path: '/aboutus' },
  { name: 'Events', icon: faCalendarAlt, path: '/events' },
  { name: 'New to Fredericton?', icon: faMapMarkerAlt, path: '/newtofredericton' },
  { name: 'Contact Us', icon: faEnvelope, path: '/contactus' },
];
const logo =`${process.env.PUBLIC_URL}/images/logofam.jpg`;
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

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <RouterLink to="/" className="navbar-brand-custom">
          <img src={logo} alt="FAM Logo" className={`navbar-logo ${scrolled ? 'scrolled-logo' : ''}`} />
          <span className={`navbar-title ${scrolled ? 'scrolled-title' : ''}`}></span>
        </RouterLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
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
