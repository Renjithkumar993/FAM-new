import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './ContactUs.css';
import logoImage from '../images/logofam.jpg'; // Adjust the path to your image

const ContactUs = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="contact-us-section" id='contact'>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className={`left-col ${leftInView ? 'animate' : ''}`} ref={leftRef}>
            <img src={logoImage} alt="Association Logo" className="img-fluid logo-image" />
          </Col>
          <Col md={6} className={`right-col ${rightInView ? 'animate' : ''}`} ref={rightRef}>
            <h2>Contact Us</h2>
            <p>Send us a quick message we will get back to You</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control type="text" placeholder="Full Name *" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address *</Form.Label>
                <Form.Control type="email" placeholder="Email Address *" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your Message..." />
              </Form.Group>
              <Button variant="warning" type="submit" className="rounded-pill">
                Send Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
