import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import eventData from '../config/events.json'; // Adjust the path to your JSON file
import './UpcomingEventBanner.css';

const UpcomingEventBanner = () => {
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Assuming the first event in the JSON is the next upcoming event
    setEvent(eventData[0]);
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  if (!event) return null;

  return (
    <>
      <div className="upcoming-event-banner">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <Button variant="primary" onClick={handleShow}>
                View Details
              </Button>
            </Col>
            <Col md={4}>
              <img src={event.image} alt={event.title} className="event-image" />
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Details:</strong> {event.details}</p>
          <p><strong>Price:</strong></p>
          <ul>
            <li>Adults: {event.price.adults}</li>
            <li>Children: {event.price.children}</li>
            <li>Kids: {event.price.kids}</li>
          </ul>
          <iframe
            src={event.mapIframe}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Event Location"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href={event.formIframe} target="_blank">
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpcomingEventBanner;
