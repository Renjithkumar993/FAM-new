import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import eventsData from '../../config/events.json';
import './EventDetail.css';
import event1 from '../../images/events/EVEnt1.jpeg'; // Static import for the image

const EventDetail = () => {
  const { eventName } = useParams();
  const event = eventsData.find(event => event.title.replace(/\s+/g, '-').toLowerCase() === eventName);

  if (!event) {
    return <div>Event not found</div>;
  }

  const eventImage = event.title === "Onam Celebration" ? event1 : null; // Use static import

  return (
    <Container className="event-detail-section">
      <Row className="my-5">
        <Col md={6}>
          <img src={eventImage} alt={event.title} className="event-detail-image" />
        </Col>
        <Col md={6}>
          <h2 className="event-title">{event.title}</h2>
          <p><strong>Date:</strong> {event.date}</p>
          <p className="event-details">{event.details}</p>
          <div className="map-container">
            <iframe
              title="Event Location"
              src={event.mapIframe}
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3 className="register-title">Register for the Event</h3>
          <div className="form-container">
            <iframe
              src={event.formIframe}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Event Registration Form"
              className="responsive-iframe"
            >Loading…</iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetail;
