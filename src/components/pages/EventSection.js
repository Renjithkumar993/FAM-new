import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment-timezone';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css';
import eventsData from '../../config/events.json';
import loadImages from "../../helpers/loadImages";
import Footer from '../Footer';

const images = loadImages(require.context('../../images/events', false, /\.(png|jpe?g|svg)$/));

const iconMapping = {
  conference: 'fas fa-chalkboard-teacher',
  webinar: 'fas fa-video',
  workshop: 'fas fa-tools',
  social: 'fas fa-users',
};

const EventSection = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [filterYear, setFilterYear] = useState('all');
  const [filterMonth, setFilterMonth] = useState('all');

  useEffect(() => {
    const updatedEvents = eventsData.map((event, index) => ({
      ...event,
      id: index,
      image: images[event.image.replace('images/events/', '')]
    }));
    setEvents(updatedEvents);
  }, []);

  const handleRegister = (eventId, isOpen) => {
    if (isOpen) {
      navigate(`/events/${eventId}`);
    }
  };

  const handleYearChange = (e) => {
    setFilterYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setFilterMonth(e.target.value);
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const yearMatches = filterYear === 'all' || eventDate.getFullYear().toString() === filterYear;
    const monthMatches = filterMonth === 'all' || (eventDate.getMonth() + 1).toString() === filterMonth;
    return yearMatches && monthMatches;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="event-section-page">
      <Container className="event-section">
        <Row className="filter-row mb-4 mt-5">
          <Col md={6}>
            <Form.Control as="select" value={filterYear} onChange={handleYearChange}>
              <option value="all">All Years</option>
              {[...new Set(events.map(event => new Date(event.date).getFullYear()))].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Form.Control>
          </Col>
          <Col md={6}>
            <Form.Control as="select" value={filterMonth} onChange={handleMonthChange}>
              <option value="all">All Months</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <VerticalTimeline>
          {filteredEvents.map((event, index) => {
            const eventDate = moment(event.date).tz('UTC').format('MMMM D, YYYY');
            const isOpen = event.isOpen;
            const eventIcon = iconMapping[event.type] || 'fas fa-calendar-alt';

            return (
              <VerticalTimelineElement
                key={index}
                date={eventDate}
                iconStyle={{ background: isOpen ? 'green' : 'gray', color: 'white' }}
                icon={<i className={eventIcon}></i>}
                contentStyle={{ borderRadius: '15px' }}  // Add border radius to content box
                dateClassName="custom-date"
              >
                <h3 className="vertical-timeline-element-title">{event.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{event.location}</h4>
                <p>{event.details}</p>
                <div className="event-additional-details">
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Price:</strong> Adults - {event.price.adults}, Children - {event.price.children}, Kids - {event.price.kids}</p>
                </div>
                <Button
                 className='registrationButton '
                  variant={isOpen ? "success" : "danger"}
                  disabled={!isOpen}
                  onClick={() => handleRegister(event.id, isOpen)}
                >
                  {isOpen ? "Register" : "Registration Closed"}
                </Button>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Container>
      <Footer />
    </div>
  );
};

export default EventSection;
