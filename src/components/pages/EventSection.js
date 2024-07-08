import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import './EventSection.css';
import eventsData from '../../config/events.json';
import HeaderCarousel from '../HeaderCarousel';
import loadImages from "../../helpers/loadImages";
import Footer from '../Footer';

const images = loadImages(require.context('../../images/events', false, /\.(png|jpe?g|svg)$/));

const EventSection = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [filterYear, setFilterYear] = useState('all');
  const [filterMonth, setFilterMonth] = useState('all');

  useEffect(() => {
    const updatedEvents = eventsData.map((event, index) => ({
      ...event,
      id: index,
      image: images[event.image.replace('images/events/', '')]
    }));
    setEvents(updatedEvents);
  }, []);

  const handleRegister = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  const handleYearChange = (e) => {
    setFilterYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setFilterMonth(e.target.value);
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const yearMatches = filterYear === 'all' || eventDate.getFullYear().toString() === filterYear;
    const monthMatches = filterMonth === 'all' || (eventDate.getMonth() + 1).toString() === filterMonth;
    return yearMatches && monthMatches;
  });

  return (
    <div className="event-page">
      <HeaderCarousel height="40vh" pageTitle="OUR EVENTS" />
      <Container className="event-section">
        <Row className="text-center mb-4">
          <Col>
            <h1 className="section-title">Upcoming Events</h1>
          </Col>
        </Row>
        <Row className="mb-4 filter-row">
          <Col md={6}>
            <Form.Group controlId="filterYear">
              <Form.Label>
                <FiFilter /> Filter by Year
              </Form.Label>
              <Form.Control as="select" value={filterYear} onChange={handleYearChange}>
                <option value="all">All Years</option>
                {[...new Set(events.map(event => new Date(event.date).getFullYear()))].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="filterMonth">
              <Form.Label>
                <FiFilter /> Filter by Month
              </Form.Label>
              <Form.Control as="select" value={filterMonth} onChange={handleMonthChange}>
                <option value="all">All Months</option>
                {Array.from({ length: 12 }, (v, k) => k + 1).map(month => (
                  <option key={month} value={month}>{new Date(0, month - 1).toLocaleString('default', { month: 'long' })}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="membership-reminder mb-5">
          <Col md={12} className="text-center">
            <motion.div
              className="membership-box"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>FAM Membership</h3>
              <p>
                Make sure you take full advantage of all the membership benefits available! As a new member, you can contest/participate in the election process to choose the office bearers for FAM. Also, you can avail a 10% discount on booking all events conducted by FAM.
              </p>
            </motion.div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {filteredEvents.map((event, index) => (
            <Col md={10} lg={8} className="mb-5" key={index}>
              <motion.div
                className="event-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Row>
                  <Col md={4} className="event-image-container">
                    <img src={event.image} alt={event.title} className="event-image" />
                    <div className="event-date">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                  </Col>
                  <Col md={8} className="event-details">
                    <h3>{event.title}</h3>
                    <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
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
                        <Button variant="primary" className="register-button" onClick={() => handleRegister(event.id)}>Register</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default EventSection;
