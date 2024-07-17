import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './MissionVision.css';
import data from "../config/missionvission.json";
import { useNavigate } from 'react-router-dom';

const TEXTS = ['MISSION', 'VISION'];

const MissionVision = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
  });

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % TEXTS.length);
    }, 5000); // Change the word every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  const missionImage = `${process.env.PUBLIC_URL}/images/fam-removebg-preview.png`;

  const missionVisionData = data.missionVision;

  return (
    <div className="mv-section" id="mission">
      <Container>
        <Row className="align-items-center">
          <Col md={6} ref={textRef} >
            <motion.div
              className="mv-text-container"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: textInView ? 0 : 100, opacity: textInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>
                OUR <span className="highlight-text">
                  <Typewriter
                    words={['MISSION']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
              <p>{missionVisionData.mission}</p>
              <h2>
                OUR <span className="highlight-text">
                  <Typewriter
                    words={['VISION']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <p>{missionVisionData.vision}</p>
              <button className="mv-read-more-btn mb-4" onClick={() => navigate('/aboutus')}>Read More</button>
            </motion.div>
          </Col>
          <Col md={6} ref={imageRef}>
   <motion.div
     className="mv-image-container"
     initial={{ x: -100, opacity: 0 }}
     animate={{ x: imageInView ? 0 : -100, opacity: imageInView ? 1 : 0 }}
     transition={{ duration: 0.5 }}
   >
     <img src={missionImage} alt="Mission and Vision" className="mv-mission-image img-fluid" />
   </motion.div>
 </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MissionVision;
