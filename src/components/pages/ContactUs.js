import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import HeaderCarousel from '../HeaderCarousel';  // Ensure this import is correct
import ContactUsbox from "../ContactUsbox"
import Footer from '../Footer';
const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <Container>
        <ContactUsbox />
        
      </Container>
      <div className="map-container">
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.274308336435!2d-66.64458378446987!3d45.96358997910885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca43ae1f0f3b7a5%3A0x32a4958fdbb5a905!2sFredericton%2C%20NB!5e0!3m2!1sen!2sca!4v1605295357034!5m2!1sen!2sca"
         width="100%"
         height="450"
         frameBorder="0"
         style={{ border: 0 }}
         allowFullScreen=""
         aria-hidden="false"
         tabIndex="0"
       ></iframe>
     </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
