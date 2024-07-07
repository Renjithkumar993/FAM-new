import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
    <Container fluid className="event-detail my-5">
      <Row className="iframe-row">
        <Col lg={6} className="mb-4">
          <Card className="event-card">
            <Card.Body>
              <Card.Title>Register for the Event</Card.Title>
              <div className="iframe-container">
                <iframe
                  title='Registration Form'
                  className="responsive-iframe"
                  src={event.formIframe}
                  allowpaymentrequest
                  allowTransparency="true"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card className="event-card">
            <Card.Body>
              <Card.Title>Event Location</Card.Title>
              <div className="iframe-container">
                <iframe
                  title='Location Map'
                  className="responsive-iframe"
                  src={event.mapIframe}
                  allowFullScreen
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default EventDetail;
