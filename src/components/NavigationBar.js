// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../images/424906607_371211172391747_2532641992234494639_n.jpg'; // Adjust the path to your logo image


const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top">
      <Navbar.Brand href="/">
        <img src={logo} alt="FAM Logo" className="navbar-logo" />
        FAM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
          <Nav.Link as={Link} to="about" smooth={true} duration={500}>About Us</Nav.Link>
          <Nav.Link as={Link} to="gallery" smooth={true} duration={500}>Gallery</Nav.Link>
          <Nav.Link as={Link} to="events" smooth={true} duration={500}>Events</Nav.Link>
          <Nav.Link as={Link} to="team" smooth={true} duration={500}>Team</Nav.Link>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
