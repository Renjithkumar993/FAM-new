import React from 'react';
import { Container, Row, Col, Alert, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import eventsData from '../config/events.json';
import './EventDetail.css';
import Footer from './Footer';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData[eventId];

  if (!event) {
    return <div>Event not found</div>;
  }

  const eventClosed = new Date(event.date) < new Date();

  return (
    <>
      <Container className="event-detail my-5">
        {eventClosed && (
          <Alert variant="warning" className="text-center">
            Event closed.
          </Alert>
        )}
        <Row className="mb-4">
          <Col>
            <h1 className="event-title">{event.title}</h1>
            <p className="event-date-time">
              {new Date(event.date).toLocaleDateString()} - {event.time}
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={8} className="event-info">
            <img src={event.imageUrl} alt={event.title} className="img-fluid mb-3 event-image" />
            <p className="event-description">{event.description}</p>
            <h3>Event Details</h3>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.details}</p>
            <h3>Ticket Prices</h3>
            <ul>
              <li><strong>Adults:</strong> {event.price.adults}</li>
              <li><strong>Children (6-14 years):</strong> {event.price.children}</li>
              <li><strong>Kids (under 6):</strong> {event.price.kids}</li>
            </ul>
          </Col>
          <Col lg={4} className="event-register">
            <h2>Register for the Event</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formTickets">
                <Form.Label>Number of Tickets</Form.Label>
                <Form.Control type="number" placeholder="Enter number of tickets" />
              </Form.Group>
              <Button variant="danger" type="submit" className="mt-3">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid className="map-container">
        <Row className="event-details">
          <Col md={4} className="event-detail-box">
            <h4>Event Details</h4>
            <p><strong>Organizer:</strong> {event.organizer}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </Col>
          <Col md={4} className="event-detail-box">
            <h4>Event Venue</h4>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Address:</strong> {event.address}</p>
          </Col>
          <Col md={4} className="event-detail-box">
            <h4>Event Location</h4>
            <iframe
              title='Location Map'
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.329142411639!2d144.96305801531643!3d-37.81361197975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4c1b59b%3A0x5045675218ceda0!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1602827161376!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EventDetail;
