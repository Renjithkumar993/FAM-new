import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './ContactUsbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const ContactUsbox = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
  });

  const logoImage = `${process.env.PUBLIC_URL}/images/logofam.jpg`;

  return (
    <div className="contact-us-section mt-5" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className={`left-col ${leftInView ? 'animate' : ''}`} ref={leftRef}>
            <img src={logoImage} alt="Association Logo" className="img-fluid logo-image" />
          </Col>
          <Col md={6} className={`right-col ${rightInView ? 'animate' : ''}`} ref={rightRef}>
            <h2 className="contactushead text-center">Get in Touch</h2>
            <p className="contact-info text-center">
              The best way to contact us is via email at{' '}
              <a href="mailto:info@famnb.ca" className="contact-link">info@famnb.ca</a>.
              <br />
              We update regularly on Facebook. Join us there!
            </p>
            <div className="social-links text-center">
              <a href="https://www.facebook.com/famnb" className="facebook-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} /> Follow us on Facebook
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsbox;
