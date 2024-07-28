import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import HelmetWrapper from '../HelmetWrapper';
import Breadcrumbs from '../Breadcrumbs';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaInfoCircle, FaClipboardList } from 'react-icons/fa';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './EventDetail.css';

const ModalComponent = lazy(() => import('../ModalComponent'));
const Loading = lazy(() => import('../Loading'));

const EventDetailWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 100vh;
`;

const EventTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  font-size: 50px;
`;

const LocationInfo = styled.p`
  color: #666;

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
  color: #555;

  h3 {
    margin-top: 20px;
    color: #333;
  }

  p {
    margin-top: 10px;
  }

  ul {
    margin-top: 10px;
    list-style-type: disc;
    padding-left: 20px;

    li {
      margin-bottom: 5px;
    }
  }
`;

const RegisterButtons = styled.div`
  margin-top: 20px;
  text-align: center;

  .btn-ticket {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 60px;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    border: none;
    color: #fff;
    transition: background 0.3s ease, transform 0.3s ease;
    border-radius: 30px;
    margin: 10px auto;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      background: linear-gradient(135deg, #feb47b, #ff7e5f);
      transform: translateY(-3px);
    }

    svg {
      margin-right: 8px;
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
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Loading />
      </Suspense>
    );
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
          <div className="event-detail">
            <Breadcrumbs />
            {eventClosed && (
              <Alert variant="danger" className="text-center">
                Event closed.
              </Alert>
            )}
            <Row className="mb-4">
              <Col lg={6} className="event-image-container">
                <LazyLoadImage
                  className="event-image img-fluid"
                  src={`${event.image}`}
                  alt={event.title}
                  effect="blur"
            
                />
              </Col>
              <Col lg={6}>
                <EventTitle className="event-title">{event.title}</EventTitle>
                <div className="event-date-time">
                  <div className="event-date" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FaCalendarAlt style={{ marginRight: '8px' }} /> {eventDate.format('MMMM Do, YYYY')}
                  </div>
                  <div className="event-time" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FaClock style={{ marginRight: '8px' }} /> {event.time}
                  </div>
                </div>
                <LocationInfo className="location-info">
                  <FaMapMarkerAlt style={{ marginRight: '8px' }} /> <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">{event.location}</a>
                </LocationInfo>
                <EventDescription className="event-description">
                  <h3><FaInfoCircle style={{ marginRight: '8px' }} /> About the Event</h3>
                  <p>{event.details}</p>
                  {event.extraLinks && event.extraLinks.map((link, index) => (
                    <p key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></p>
                  ))}
                  {event.extraDetails && (
                    <>
                      <h3><FaClipboardList style={{ marginRight: '8px' }} /> Activities</h3>
                      <ul>
                        {event.extraDetails.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                      <p>{event.extraDetails.about}</p>
                    </>
                  )}
                </EventDescription>
                <RegisterButtons className="register-buttons">
                  <Row>
                    <Col xs={12} sm={12} className="mb-2">
                      {event.formIframe ? (
                        <Button className="btn-ticket" block onClick={() => handleModalShow('form')}>
                          <FaTicketAlt /> Get Tickets
                        </Button>
                      ) : (
                        <Button className="btn-ticket" block disabled>
                          <FaTicketAlt /> Tickets Coming Soon
                        </Button>
                      )}
                    </Col>
                    <Col xs={12} sm={12}>
                      {event.performanceIframe ? (
                        <Button className="btn-ticket" block onClick={() => handleModalShow('performance')}>
                          Performance Registration
                        </Button>
                      ) : (
                        <Button className="btn-ticket" block disabled>
                          <FaTicketAlt /> Performance Registration Soon
                        </Button>
                      )}
                    </Col>
                  </Row>
                </RegisterButtons>
              </Col>
            </Row>
          </div>
        </EventDetailWrapper>
      </Container>
      {event.formIframe && (
        <Suspense fallback={<div>Loading...</div>}>
          <ModalComponent open={modalType === 'form'} handleClose={handleModalClose} iframeSrc={event.formIframe} />
        </Suspense>
      )}
      {event.performanceIframe && (
        <Suspense fallback={<div>Loading...</div>}>
          <ModalComponent open={modalType === 'performance'} handleClose={handleModalClose} iframeSrc={event.performanceIframe} />
        </Suspense>
      )}
    </>
  );
};

export default EventDetail;
