import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './EventSection.css';
import eventsData from '../../config/events.json';
import HeaderCarousel from '../HeaderCarousel';
import loadImages from "../../helpers/loadImages";


// Load all images dynamically
const images = loadImages(require.context('../../images/events', false, /\.(png|jpe?g|svg)$/));

const EventSection = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const updatedEvents = eventsData.map(event => ({
      ...event,
      image: images[event.image.replace('images/events/', '')]
    }));
    setEvents(updatedEvents);
  }, []);

  const handleRegister = (event) => {
    window.open(event.formIframe, '_blank');
  };

  return (
    <div className="event-page">
      <HeaderCarousel height="40vh" pageTitle="EVENTS" />
      <Container className="event-section">
        <Row className="text-center mb-5">
          <Col>
          </Col>
        </Row>
        <Row className="membership-reminder mb-5">
          <Col md={12} className="text-center">
            <h3>FAM Membership</h3>
            <p>
              Make sure you take full advantage of all the membership benefits available! As a new member, you can contest/participate in the election process to choose the office bearers for FAM. Also, you can avail a 10% discount on booking all events conducted by FAM.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {events.map((event, index) => (
            <Col md={10} className="mb-5" key={index}>
              <motion.div
                className="event-card"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.5 }}
            
              >
                <Row>
                  <Col md={4} className="event-image-container">
                    <img src={event.image} alt={event.title} className="event-image" />
                    <div className="event-date">
                      <span>{event.date}</span>
                    </div>
                  </Col>
                  <Col md={8} className="event-details">
                    <h3>{event.title}</h3>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p>{event.description}</p>
                    <p>{event.details}</p>
                    <Row>
                      <Col md={6}>
                        <h5>Ticket Price</h5>
                        <ul>
                          <li><strong>Adults:</strong> {event.price.adults}</li>
                          <li><strong>Children (6-14 years):</strong> {event.price.children}</li>
                          <li><strong>Kids (under 6):</strong> {event.price.kids}</li>
                        </ul>
                      </Col>
                      <Col md={6} className="text-right">
                        <Button variant="primary" className="register-button" onClick={() => handleRegister(event)}>Register</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventSection;
