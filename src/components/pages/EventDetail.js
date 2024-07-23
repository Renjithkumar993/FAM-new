import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import HelmetWrapper from '../HelmetWrapper';
import Breadcrumbs from '../Breadcrumbs';
import ModalComponent from '../ModalComponent';
import { LocationOn } from '@mui/icons-material';
import styled from 'styled-components';
import Loading from '../Loading'; // Import your Loading component

const EventDetailWrapper = styled.div`
  padding-top: 30px;
  border-radius: 15px;
  margin-top: 50px;
`;

const EventImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    border-radius: 15px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const EventDateTime = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 20px;
`;

const LocationInfo = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;
    margin-left: 8px;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    margin-right: 8px;
  }
`;

const EventDescription = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 10px;
    }
  }
`;

const RegisterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  .btn {
    flex: 1;
    padding: 12px 20px;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #ff6341, #ff9a41);
    border: none;
    color: #fff;
    transition: background 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #ff9a41, #ff6341);
    }
  }
`;

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/config/events.json`); // Replace with your actual URL
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventsData = await response.json();
        const event = eventsData.find(event => event.title.replace(/\s+/g, '').toLowerCase() === eventId);
        setEvent(event);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleModalClose = () => setModalType(null);
  const handleModalShow = (type) => setModalType(type);

  if (loading) {
    return <Loading />; // Use your custom Loading component
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  const eventClosed = new Date(event.date) < new Date();
  const eventDate = moment.tz(event.date, 'UTC');
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`;

  return (
    <>
      <HelmetWrapper pageTitle={event.title} description={`Details for ${event.title}`} />
      <Container>
        <EventDetailWrapper>
          <div className="event-detail my-5">
            <Breadcrumbs />
            {eventClosed && (
              <Alert variant="danger" className="text-center">
                Event closed.
              </Alert>
            )}
            <Row className="mb-4">
              <Col lg={6} className="event-image-container">
                <EventImageContainer>
                  <img src={`${event.image}`} alt={event.title} />
                </EventImageContainer>
              </Col>
              <Col lg={6}>
                <EventTitle>{event.title}</EventTitle>
                <EventDateTime>
                  {eventDate.format('MMMM Do, YYYY')} - {event.time}
                </EventDateTime>
                <LocationInfo>
                  <LocationOn />
                  <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">{event.location}</a>
                </LocationInfo>
                <EventDescription>
                  <h3>About Onam</h3>
                  <p>{event.description}</p>
                  <ul>
                    <li>Feast on our elaborate "Onam Sadhya," a sumptuous vegetarian banquet served on banana leaves.</li>
                    <li>Enjoy traditional folk songs and dances.</li>
                    <li>Marvel at intricate floral decorations known as "Athapookkalam" or "Onappookkalam".</li>
                    <li>Participate in cultural programs and games that bring our community together.</li>
                  </ul>
                  <p>Onam is more than just a festival; it's a celebration of Kerala's culture, a time for family reunions, and an opportunity to connect with our roots. It embodies the spirit of unity in diversity, bringing together people of all faiths in joyous harmony.</p>
                </EventDescription>
                <RegisterButtons>
                  {event.formIframe ? (
                    <Button onClick={() => handleModalShow('form')}>
                      Register for Event
                    </Button>
                  ) : (
                    <Button disabled>
                      Event Registration - available soon
                    </Button>
                  )}
                  {event.performanceIframe ? (
                    <Button onClick={() => handleModalShow('performance')}>
                      Register for Performances
                    </Button>
                  ) : (
                    <Button disabled>
                      Performance Registration - available soon
                    </Button>
                  )}
                </RegisterButtons>
              </Col>
            </Row>
          </div>
        </EventDetailWrapper>
      </Container>
      {event.formIframe && (
        <ModalComponent open={modalType === 'form'} handleClose={handleModalClose} iframeSrc={event.formIframe} />
      )}
      {event.performanceIframe && (
        <ModalComponent open={modalType === 'performance'} handleClose={handleModalClose} iframeSrc={event.performanceIframe} />
      )}
    </>
  );
};

export default EventDetail;
