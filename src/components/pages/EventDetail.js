import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import HelmetWrapper from '../HelmetWrapper';
import Breadcrumbs from '../Breadcrumbs';
import ModalComponent from '../ModalComponent';
import { LocationOn } from '@mui/icons-material';
import styled from 'styled-components';
import Loading from '../Loading';
import "./EventDetail.css"

const EventDetailWrapper = styled.div`
  padding-top: 30px;
  margin-top: 50px;
`;


const EventTitle = styled.h1`

  font-weight: bold;
  margin-bottom: 20px;
`;

const EventDateTime = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const LocationInfo = styled.p`
  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EventDescription = styled.div`
  margin-top: 20px;
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
        const response = await fetch(`${process.env.PUBLIC_URL}/config/events.json`);
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
    return <Loading />;
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
               
                  <img className="event-image img-fluid" src={`${event.image}`} alt={event.title} />
               
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
                  <h3>About the Event</h3>
                  <p>{event.details}</p>
                  {event.extraDetails && (
                    <>
                      <h3>Activities</h3>
                      <ul>
                        {event.extraDetails.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                      <p>{event.extraDetails.about}</p>
                    </>
                  )}
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
