import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import eventsData from '../config/events.json';
import './EventDetail.css';
import Footer from './Footer';
import HelmetWrapper from './HelmetWrapper';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import Breadcrumbs from './Breadcrumbs';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData[eventId];

  if (!event) {
    return <div>Event not found</div>;
  }

  const eventClosed = new Date(event.date) < new Date();
  const onamImage = `${process.env.PUBLIC_URL}/images/events/onam.jpeg`;
  const eventDate = moment.tz(event.date, 'UTC');

  const breadcrumbs = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/events", label: "Events", icon: EventIcon },
    { label: event.title },
  ];

  return (
    <>
      <HelmetWrapper pageTitle={event.title} description={`Details for ${event.title}`} />
      <Container className="event-detail my-5">
        <Breadcrumbs />
        {eventClosed && (
          <Alert variant="warning" className="text-center">
            Event closed.
          </Alert>
        )}
        <Row className="mb-4 align-items-center">
          <Col lg={6} className="event-image-container">
            <img src={onamImage} alt={event.title} className="img-fluid event-image" />
          </Col>
          <Col lg={6}>
            <h1 className="event-title">{event.title}</h1>
            <p className="event-date-time">
              {eventDate.format('MMMM Do, YYYY')} - {event.time}
            </p>
            <h3>About Onam</h3>
            <p>
              Onam is an annual Hindu festival celebrated in the Indian state of Kerala. It is a harvest festival and is celebrated with numerous festivities including Vallam Kali (boat races), Pulikali (tiger dances), Pookkalam (flower rangoli), Onam Kali, Tug of War, Thumbi Thullal (women's dance), Kummattikali (mask dance), Onathallu (martial arts), and various other activities. It is a festival that brings together people of all communities in Kerala.
            </p>
            <h3>Event Details</h3>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.details}</p>
            <h3>Ticket Prices</h3>
            <ul>
              <li><strong>Adults:</strong> {event.price.adults}</li>
              <li><strong>Children (6-14 years):</strong> {event.price.children}</li>
              <li><strong>Kids (under 6):</strong> {event.price.kids}</li>
            </ul>
            <div className="register-buttons mt-3">
              <Button variant="danger" className="me-3">Register for Event</Button>
              <Button variant="info">Register for Performances</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EventDetail;
