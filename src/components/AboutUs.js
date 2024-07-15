import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';
import data from "../config/aboutus.json"; // Directly import the JSON data
import { useNavigate } from 'react-router-dom'; 

const AboutUs = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const aboutImage = `${process.env.PUBLIC_URL}/images/heroimage.png`; // Fixed the path by removing the extra `}`
  const navigate = useNavigate(); // Initialize navigate

  return (
    <section className={`about-us-section ${aboutInView ? 'animate' : ''}`} ref={aboutRef} id='about'>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="order-2 order-md-1">
            <div className="about-text">
              <h1>Malayalee Community Group</h1>
              <h2>Celebrating Kerala Culture in Fredericton, Canada</h2>
              {data.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <Button variant="outline-dark mb-5" onClick={() => navigate('/contactus')}>Get in touch</Button>
            </div>
          </Col>
          <Col md={6} className="order-1 order-md-2">
            <div className="image-container">
              <img src={aboutImage} alt="About Us" className="about-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
