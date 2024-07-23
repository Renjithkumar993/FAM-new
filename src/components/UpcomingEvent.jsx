import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Countdown from 'react-countdown';
import './UpcomingEvent.css';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'; 

const UpcomingEvent = () => {
  const [updatedEvents, setUpdatedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/config/events.json`); 
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventsData = await response.json();
        const updatedEventsData = eventsData.map((event) => ({
          ...event,
          eventId: event.title.replace(/\s+/g, '').toLowerCase(),
        }));
        setUpdatedEvents(updatedEventsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <Loading />; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (updatedEvents.length === 0) {
    return <div>No upcoming events.</div>;
  }

  const UpcomingBanner = `${process.env.PUBLIC_URL}/images/events/upcoming-banner.png`;
  const event = updatedEvents[0]; // Assuming the first event is the upcoming event
  const { eventId, title, description, date, isOpen, image } = event;
  const eventDate = moment.tz(date, 'UTC');

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>The event has started!</span>;
    } else {
      return (
        <div className="mv-statistics">
          <div className="stat-box">
            <h3>{days}</h3>
            <p>Days</p>
          </div>
          <div className="stat-box">
            <h3>{hours}</h3>
            <p>Hours</p>
          </div>
          <div className="stat-box">
            <h3>{minutes}</h3>
            <p>Minutes</p>
          </div>
          <div className="stat-box">
            <h3>{seconds}</h3>
            <p>Seconds</p>
          </div>
        </div>
      );
    }
  };

  const handleRegister = (eventId, isOpen) => {
    if (isOpen) {
      navigate(`/${eventId}`);
    }
  };

  return (
    <Container fluid className="mv-notification-container">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} className="event-image-container order-1 order-md-2">
          <img src={image} alt={title} className="event-image img-fluid" />
        </Col>
        <Col xs={12} md={6} className="event-info">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <img src={UpcomingBanner} alt={title} className="img-fluid" />
            </Col>
          </Row>
          <h4 className="event-title">{title}</h4>
          <p className="event-description text-black">{description}</p>
          <h5 className="event-date">{eventDate.format('MMMM D, YYYY')}</h5>
          <Countdown date={eventDate.toDate()} renderer={countdownRenderer} />
          <Button
            className="mv-register-btn mt-3 mb-3"
            variant="primary"
            onClick={() => handleRegister(eventId, isOpen)}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UpcomingEvent;
