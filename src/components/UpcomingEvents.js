import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './UpcomingEvents.css';

// Import all images from the ../events/ folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../events', false, /\.(png|jpe?g|svg)$/));

const events = [
  {
    title: "Onam Celebration",
    date: "September 14, 2024",
    description: "A fun-filled day with games, activities, and delicious food at our family picnic.",
    image: images[0],
  },
  {
    title: "Onam Celebration",
    date: "September 14, 2024",
    description: "A fun-filled day with games, activities, and delicious food at our family picnic.",
    image: images[1],
  },
  // Add more events as needed
];

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-section" id="news">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="section-title1"
            >
              UPCOMING EVENTS
            </motion.h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {events.map((event, index) => (
            <Col md={5} className="mb-5" key={index}>
              <motion.div
                className="event-card"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <div className="image-container">
                  <img src={event.image} alt={event.title} className="event-image"/>
                  <Button variant="danger" className="register-button">Register</Button>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
