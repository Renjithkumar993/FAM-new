import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import missionImage from '../images/fam-removebg-preview.png'; // Adjust the path to your image
import './MissionVision.css';
import missionbg from '../images/MISSIONBG1.mp4'; // Adjust the path to your video

const TEXTS = ['MISSION', 'VISION'];

const MissionVision = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

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
              <i className="fas fa-bullseye"></i> Our mission is to foster a vibrant and supportive community that celebrates
              Malayalam culture and heritage, while promoting inclusiveness and cultural exchange.
            </p>
            <h2>
              OUR <span className="highlight-text"><TextTransition springConfig={presets.gentle}>{TEXTS[(index + 1) % TEXTS.length]}</TextTransition></span>
            </h2>
            <p>
              <i className="fas fa-eye"></i> Our vision is to be a leading cultural organization that preserves and promotes
              the rich heritage of Kerala, and serves as a hub for cultural, social, and educational
              activities for the Malayalee community in Fredericton.
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
