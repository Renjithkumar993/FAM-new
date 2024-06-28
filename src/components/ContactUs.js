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
            <h2 className='contactushead'>CONTACT US</h2>
            <p>Send us a quick message we will get back to you.</p>
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
            <div className="social-contact mt-4">
              <p>Follow us on <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
              <p>Contact us at <a href="mailto:infofamnb@outlook.com">infofamnb@outlook.com</a></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="copyright">© 2024 Fredericton Association of Malayalees. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
