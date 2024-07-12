import React from 'react';
import { Alert, Row, Col, Button, Container } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import Countdown from 'react-countdown';
import events from '../config/events.json';
import loadImages from '../helpers/loadImages';
import './UpcomingEvent.css';
import image1 from "../images/fredericton/upcoming.png"

const images = loadImages(require.context('../images/events', false, /\.(png|jpe?g|svg|jpeg)$/));

const UpcomingEvent = () => {
  const event = events[0]; // Assuming the first event is the upcoming event
  const { title, description, date, image } = event;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>The event has started!</span>;
    } else {
      return (
        <div className="mv-statistics">
          <div className="stat-box">
            <h3>{days}</h3>
            <p>Days</p>
          </div>
          <div className="stat-box">
            <h3>{hours}</h3>
            <p>Hours</p>
          </div>
          <div className="stat-box">
            <h3>{minutes}</h3>
            <p>Minutes</p>
          </div>
          <div className="stat-box">
            <h3>{seconds}</h3>
            <p>Seconds</p>
          </div>
        </div>
      );
    }
  };

  return (
    <Container fluid className="mv-notification-container">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} className="event-image-container">
          <img src={images[image.replace('images/events/', '')]} alt={title} className="event-image img-fluid" />
        </Col>
        <Col xs={12} md={6} className="event-info">
        <Row className="justify-content-center">
   <Col xs={12} className="text-center">
   
   
   
   <img src={image1} alt={title} className="img-fluid" />
  
   
   
   
   
   
   
   
   </Col>
 </Row>
          <h4 className="event-title">{title}</h4>
          <p className="event-description">{description}</p>
          <h5 className="event-date">{formatDate(date)}</h5>
          <Countdown date={new Date(date)} renderer={countdownRenderer} />
          <Button className="mv-register-btn mt-3" variant="primary">Register</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UpcomingEvent;
