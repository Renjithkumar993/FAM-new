import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import aboutImage from '../images/famaboutus.png'; // Adjust the path to your image
import './AboutUs.css';
import data from "../config/aboutus.json"; // Directly import the JSON data

const AboutUs = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`about-us-section ${aboutInView ? 'animate' : ''}`} ref={aboutRef} id='about'>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="about-text">
              <h1>Malayalee Community Group</h1>
              <h2>Celebrating Malayalam Culture in Fredericton, Canada</h2>
              {data.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <Button variant="outline-dark mb-5">Get in touch</Button>
            </div>
          </Col>
          <Col md={6}>
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
