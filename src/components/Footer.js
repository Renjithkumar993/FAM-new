import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate(); // Initialize navigate

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-widget">
              <h3>About Us</h3>
              <p>Fredericton Association Of Malayalees is a non-profit, non-political, non-religious association for promoting the cultural and social activities of Malayalees in Fredericton.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-widget">
              <h3>Quick Links</h3>
              <ul className="footer-links">
              <li><a onClick={() => navigate('/joinus')}>Register</a></li>
              <li><a onClick={() => navigate('/aboutus')}>About</a></li>
              <li><a onClick={() => navigate('/events')}>Buy Tickets</a></li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-widget">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:operations@halifaxmalayaliassociation.com">info@famnb.ca</a></p>
              <p>Address: Fredericton, NewBrunswick, Canada</p>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={12} className="text-center">
            <p>© 2024 Fredericton Association Of Malayalees  </p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;