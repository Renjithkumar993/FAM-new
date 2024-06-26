import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import './UpcomingEvents.css';
import image1 from '../images/a1.jpg'
import image2 from '../images/a2.jpg'
import image3 from '../images/a3.jpg'




const events = [
  {
    title: "Cultural Festival",
    date: "July 25, 2024",
    description: "Join us for a vibrant cultural festival with traditional dances, music, and food.",
    image: image1
  },
  {
    title: "Annual Picnic",
    date: "August 15, 2024",
    description: "A fun-filled day with games, activities, and delicious food at our annual picnic.",
    image: image2
  },
  {
    title: "Community Workshop",
    date: "September 5, 2024",
    description: "Learn new skills and connect with community members at our workshop.",
    image: image3
  }
];

const UpcomingEvents = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return (
    <div className="upcoming-events-section">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="section-title"
        >
          <Typed
            strings={['Upcoming Events']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </motion.div>
        <Row>
          {events.map((event, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="event-card"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
              >
                <Card>
                  <Card.Img variant="top" src={event.image} alt={event.title} />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                    <Card.Text>{event.description}</Card.Text>
                    <Button variant="danger" className="register-button">Register</Button>
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
