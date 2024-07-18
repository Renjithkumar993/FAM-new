import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './Steps.css';
import { useNavigate } from 'react-router-dom';
import WhatWeDo from './WhatWeDo';
import { FaFileDownload, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Steps = () => {
  const { ref: stepRef, inView: stepInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

const docment = `${process.env.PUBLIC_URL}/documents/Welcome to Fredericton(2024-07-01)DRAFT.pdf`

  return (
    <section className={`step-section ${stepInView ? 'animate' : ''}`} ref={stepRef} id="about">
      <Container>
        <Row className="">
          <Col xs={12} md={6} className="order-2 order-md-1">
            <div className="step-text">
              <h1>Get Involved With Us</h1>
              <h2>Join Our Vibrant Malayalee Community in Fredericton</h2>
              <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.6697494024043!2d-66.650224384504!3d45.96358992967899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caae6ad24e65e55%3A0xb551e71e732b6ce8!2sFredericton%2C%20NB%2C%20Canada!5e0!3m2!1sen!2sin!4v1625049946572!5m2!1sen!2sin"
   width="100%"
   height="450"
   style={{ border: 0 }}
   allowFullScreen=""
   loading="lazy"
   title="Google Map"
 ></iframe>
  
  
  
   <p className="text-center mt-3 text-black">We have a helpful document to guide you through.</p>
   <div className="text-center">
       <Button variant="danger" className="rounded-pill custom-button" href={docment} target="_blank" rel="noopener noreferrer">
          <FaFileDownload className="mr-1" /> Open Guide
        </Button>
   </div>
   <div className="social-buttons mt-4 text-center">
     <Button variant="primary" className="mr-3 rounded-pill custom-button btn-facebook" href="https://www.facebook.com/profile.php?id=61552104893247" target="_blank">
       <FaFacebook className="mr-1" /> Join Facebook Group
     </Button>
     <Button variant="success" className="rounded-pill custom-button btn-whatsapp" href="https://chat.whatsapp.com/IS3UUoZ1cqW9p6NLRg5QZB" target="_blank">
       <FaWhatsapp className="mr-1" /> Join WhatsApp Group
     </Button>

   </div>
              
            </div>
          </Col>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <WhatWeDo />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Steps;