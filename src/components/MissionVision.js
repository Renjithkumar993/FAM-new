import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import missionImage from '../images/fam-removebg-preview.png'; // Adjust the path to your image
import missionbg from '../images/MISSIONBG1.mp4'; // Adjust the path to your video
import './MissionVision.css';
import data from "../config/missionvission.json"; // Directly import the JSON data

const TEXTS = ['MISSION', 'VISION'];

const MissionVision = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const missionVisionData = data.missionVision; // Directly use imported data

  return (
    <div className="mv-section" id="mission">
      <div className="video-background">
        <video autoPlay muted loop id="background-video">
          <source src={missionbg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={6} ref={textRef} className={`mv-text-container ${textInView ? 'animate' : ''}`}>
            <h2>
              OUR <span className="highlight-text"><TextTransition springConfig={presets.gentle}>{TEXTS[index]}</TextTransition></span>
            </h2>
            <p>
              <i className="fas fa-bullseye"></i> {missionVisionData.mission}
            </p>
            <h2>
              OUR <span className="highlight-text"><TextTransition springConfig={presets.gentle}>{TEXTS[(index + 1) % TEXTS.length]}</TextTransition></span>
            </h2>
            <p>
              <i className="fas fa-eye"></i> {missionVisionData.vision}
            </p>
          </Col>
          <Col md={6} ref={imageRef} className={`mv-image-col ${imageInView ? 'animate' : ''}`}>
            <div className="mv-image-container">
              <img src={missionImage} alt="Mission and Vision" className="mv-mission-image img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MissionVision;
