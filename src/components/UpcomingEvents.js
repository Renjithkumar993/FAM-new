// src/components/UpcomingEvents.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './UpcomingEvents.css';
import image1 from '../images/a1.jpg';
import image2 from '../images/a2.jpg';

const events = [
  {
    title: "Family Picnic",
    date: "August 28, 2024",
    description: "A fun-filled day with games, activities, and delicious food at our family picnic.",
    image: image1,
  },
  {
    title: "Onam Celebration",
    date: "September 14, 2024",
    description: "Join us for a vibrant celebration of Onam with traditional dances, music, and a grand feast.",
    image: image2,
  },
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
              className="section-title"
            >
              Upcoming Events
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
                <Card className="h-100">
                  <Card.Img variant="top" src={event.image} alt={event.title} className="event-image"/>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mt-2">{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                    <Card.Text>{event.description}</Card.Text>
                    <Button variant="danger" className="mt-auto register-button">Register</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
