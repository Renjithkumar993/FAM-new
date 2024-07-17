import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import eventsData from '../config/events.json';
import Footer from './Footer';
import HelmetWrapper from './HelmetWrapper';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import Breadcrumbs from './Breadcrumbs';
import ZeffyModal from './ZeffyModal';
import { LocationOn } from '@mui/icons-material';
import styled from 'styled-components'; // Import styled-components

const EventDetailWrapper = styled.div`
  .event-detail {
    background-color: rgba(255, 255, 255, 0.9); /* semi-transparent background */
    border-radius: 8px;
    padding: 20px;
  }

  .event-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 10px;
  }

  .event-date-time {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
  }

  .event-description,
  .event-info p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
  }

  .event-info h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #343a40;
  }

  .event-info ul {
    list-style: none;
    padding: 0;
  }

  .event-info ul li {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .event-info a {
    color: #007bff;
    text-decoration: none;
  }

  .event-info a:hover {
    text-decoration: underline;
  }

  .register-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .register-buttons .btn {
    flex: 1;
    padding: 10px 15px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
  }

  .register-buttons .btn-danger:hover,
  .register-buttons .btn-info:hover {
    background-color: #0056b3;
  }

  .map-container {
    margin-top: 30px;
  }

  .map-title {
    text-align: center;
    font-size: 1.8rem;
    margin: 20px 0;
    color: #343a40;
  }

  .map-embed {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 8px;
  }

  .location-info {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  .location-info svg {
    margin-right: 8px;
  }

  @media (max-width: 767.98px) {
    .event-title {
      font-size: 2rem;
    }

    .event-date-time,
    .event-description,
    .event-info p {
      font-size: 1rem;
    }

    .event-info h3 {
      font-size: 1.5rem;
    }

    .register-buttons {
      flex-direction: column;
    }
  }
`;

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData.find(event => event.title.replace(/\s+/g, '-').toLowerCase() === eventId);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  if (!event) {
    return <div>Event not found</div>;
  }

  const eventClosed = new Date(event.date) < new Date();
  const onamImage1 = `${process.env.PUBLIC_URL}/images/events/onam.jpeg`;
  const eventDate = moment.tz(event.date, 'UTC');

  const breadcrumbs = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/events", label: "Events", icon: EventIcon },
    { label: event.title },
  ];

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`;

  return (
    <>
      <HelmetWrapper pageTitle={event.title} description={`Details for ${event.title}`} />
      <Container>
        <EventDetailWrapper>
          <div className="event-detail my-5">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            {eventClosed && (
              <Alert variant="warning" className="text-center">
                Event closed.
              </Alert>
            )}
            <Row className="mb-4">
              <Col lg={6} className="event-image-container">
                <img src={onamImage1} alt={event.title} className="img-fluid event-image" />
              </Col>
              <Col lg={6}>
                <h1 className="event-title-detail">{event.title}</h1>
                <p className="event-date-time">
                  {eventDate.format('MMMM Do, YYYY')} - {event.time}
                </p>
                <p className="location-info">
                  <LocationOn />
                  <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">{event.location}</a>
                </p>
                <div className="event-description">
                  <h3>About Onam</h3>
                  <p>
                    Welcome to our joyous Onam celebration! Onam is Kerala's most beloved festival, a time of unity, prosperity, and cultural pride. At the heart of Onam is the legend of King Mahabali, a benevolent ruler whose spirit is said to visit Kerala during this time. Our festivities are a warm welcome to this beloved king and a showcase of the happiness and prosperity of our community.
                  </p>
                  <ul>
                    <li>Feast on our elaborate "Onam Sadhya," a sumptuous vegetarian banquet served on banana leaves.</li>
                    <li>Enjoy traditional folk songs and dances.</li>
                    <li>Marvel at intricate floral decorations known as "Athapookkalam" or "Onappookkalam".</li>
                    <li>Participate in cultural programs and games that bring our community together.</li>
                  </ul>
                  <p>
                    Onam is more than just a festival; it's a celebration of Kerala's culture, a time for family reunions, and an opportunity to connect with our roots. It embodies the spirit of unity in diversity, bringing together people of all faiths in joyous harmony.
                  </p>
                  <p>
                    Whether you're a longtime celebrant or new to Onam, we invite you to immerse yourself in the colors, flavors, and traditions of this special occasion. Join us in creating memories, strengthening bonds, and honoring our shared heritage. Happy Onam!
                  </p>
                </div>
                <div className="event-info">
                  <div className="register-buttons">
                    <Button variant="success" onClick={handleShow}>
                      Register for Event
                    </Button>
                    <Button variant="success" className="">Register for Performances</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </EventDetailWrapper>
      </Container>
      <Footer />
      <ZeffyModal open={showModal} handleClose={handleClose} />
    </>
  );
};

export default EventDetail;
