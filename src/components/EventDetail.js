import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
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

  const handleRegisterAttendanceClick = () => {
    window.open(event.formIframe, '_blank');
  };

  const handleRegisterParticipationClick = () => {
    window.open(event.participationFormIframe, '_blank');
  };

  return (
    <>
      <Container maxWidth="lg" className="event-detail">
        <Card className="event-card">
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" component="h1" gutterBottom className="event-title">
                  {event.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph className="event-description">
                  {event.description}
                </Typography>
                <Box className="event-details">
                  <Typography variant="h5" component="h2" gutterBottom className="section-title">
                    Event Details
                  </Typography>
                  <Typography variant="body1" className="event-detail-item">
                    <FaCalendarAlt /> <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1" className="event-detail-item">
                    <FaClock /> <strong>Time:</strong> {event.time}
                  </Typography>
                  <Typography variant="body1" className="event-detail-item">
                    <FaMapMarkerAlt /> <strong>Location:</strong> {event.location}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {event.details}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom className="section-title">
                    Ticket Prices
                  </Typography>
                  <ul className="event-price-list">
                    <li><FaTicketAlt /> <strong>Adults:</strong> {event.price.adults}</li>
                    <li><FaTicketAlt /> <strong>Children (6-14 years):</strong> {event.price.children}</li>
                    <li><FaTicketAlt /> <strong>Kids (under 6):</strong> {event.price.kids}</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} className="event-register">
                <Box className="register-container">
                  <Typography variant="h5" component="h2" gutterBottom className="section-title">
                    Register for the Event
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="register-button"
                    onClick={handleRegisterAttendanceClick}
                  >
                    Register Attendance
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className="register-button"
                    onClick={handleRegisterParticipationClick}
                  >
                    Register Participation
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" className="map-container">
        <Typography variant="h5" component="h2" gutterBottom className="map-title">
          Event Location
        </Typography>
        <div className="map-responsive">
          <iframe
            title='Location Map'
            frameBorder="0"
            style={{ border: 0 }}
            src={event.mapIframe}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default EventDetail;
