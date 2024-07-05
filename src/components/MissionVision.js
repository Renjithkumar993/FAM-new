import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import CountUp from 'react-countup';
import missionImage from '../images/fam-removebg-preview.png'; // Adjust the path to your image
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

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
  });

  const [index, setIndex] = useState(0);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (statsInView) {
      setStartCount(true);
    } else {
      setStartCount(false);
    }
  }, [statsInView]);

  const missionVisionData = data.missionVision; // Directly use imported data

  return (
    <div className="mv-section" id="mission">
      <Container>
        <Row className="align-items-center">
          <Col md={6} ref={imageRef} className={`mv-image-col ${imageInView ? 'animate' : ''}`}>
            <div className="mv-image-container">
              <img src={missionImage} alt="Mission and Vision" className="mv-mission-image img-fluid" />
            </div>
          </Col>
          <Col md={6} ref={textRef} className={`mv-text-container ${textInView ? 'animate' : ''}`}>
            <h2>
              OUR <span className="highlight-text"><TextTransition springConfig={presets.gentle}>{TEXTS[index]}</TextTransition></span>
            </h2>
            <p>
              {missionVisionData.mission}
            </p>
            <h2>
              OUR <span className="highlight-text"><TextTransition springConfig={presets.gentle}>{TEXTS[(index + 1) % TEXTS.length]}</TextTransition></span>
            </h2>
            <p>
              {missionVisionData.vision}
            </p>
            <button className="mv-read-more-btn mb-4">Read More</button>
          </Col>
        </Row>
        <Row ref={statsRef} className="mv-statistics text-center">
          <Col className="mv-stat-item">
            <h3>{startCount ? <CountUp start={0} end={45000} duration={3} /> : 0}</h3>
            <p>Social Media Reach</p>
          </Col>
          <Col className="mv-stat-item">
            <h3>{startCount ? <CountUp start={0} end={35} duration={3} /> : 0}</h3>
            <p>Year of Foundation</p>
          </Col>
          <Col className="mv-stat-item">
            <h3>{startCount ? <CountUp start={0} end={200} duration={3} /> : 0}</h3>
            <p>Events Organized</p>
          </Col>
          <Col className="mv-stat-item">
            <h3>{startCount ? <CountUp start={0} end={18000} duration={3} /> : 0}</h3>
            <p>Members</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MissionVision;
