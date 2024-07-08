import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import eventsData from '../config/events.json';
import './EventDetail.css';
import HeaderCarousel from './HeaderCarousel';
import Footer from './Footer';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData[eventId];

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <HeaderCarousel height="40vh" pageTitle={event.title} />
      <Container className="event-detail my-5">
        <Row className="mb-4">
          <Col>
            <h1 className="event-title">{event.title}</h1>
            <p className="event-description">{event.description}</p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={8} className="event-info">
            <h2>Event Details</h2>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {event.time}</p>
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
            <div className="iframe-container full-height">
              <iframe
                title='Registration Form'
                className="responsive-iframe"
                src={event.formIframe}
                allowpaymentrequest
                allowTransparency="true"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="map-full-width">
        <h2 className="map-title">Event Location</h2>
        <iframe
          title='Location Map'
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.329142411639!2d144.96305801531643!3d-37.81361197975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4c1b59b%3A0x5045675218ceda0!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1602827161376!5m2!1sen!2sus"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
