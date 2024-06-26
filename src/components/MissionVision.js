import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import missionImage from '../images/fam-removebg-preview.png'; // Adjust the path to your image
import './MissionVision.css';

const MissionVision = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="mission-vision-section" id='mission'>
      <Container>
        <Row className="align-items-center">
          <Col md={6} ref={textRef} className={`text-container ${textInView ? 'animate' : ''}`}>
            <h2>Our Mission</h2>
            <p>
              <i className="fas fa-bullseye"></i> Our mission is to foster a vibrant and supportive community that celebrates
              Malayalam culture and heritage, while promoting inclusiveness and cultural exchange.
            </p>
            <h2>Our Vision</h2>
            <p>
              <i className="fas fa-eye"></i> Our vision is to be a leading cultural organization that preserves and promotes
              the rich heritage of Kerala, and serves as a hub for cultural, social, and educational
              activities for the Malayalee community in Fredericton.
            </p>
          </Col>
          <Col md={6} ref={imageRef} className={`image-col ${imageInView ? 'animate' : ''}`}>
            <div className="image-container">
              <img src={missionImage} alt="Mission and Vision" className="mission-image img-fluid" />
              <div className="overlay">
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MissionVision;
