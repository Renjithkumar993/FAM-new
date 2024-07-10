import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
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
      <HeaderCarousel height="40vh" pageTitle="Our Events" />
      <Container className="event-section">
        <Row className="filter-row mb-4">
        </Row>
        <Row className="justify-content-center">
          {filteredEvents.map((event, index) => (
            <Col md={12} className="mb-4" key={index}>
              <div className="event-card" onClick={() => handleRegister(event.id)}>
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} className="event-image" />
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p><i className="fas fa-calendar-alt"></i> {new Date(event.date).toLocaleDateString()}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default EventSection;
