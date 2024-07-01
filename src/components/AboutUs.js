import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImage from '../images/famaboutus.png'; // Adjust the path to your image
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us-section" id='about'>
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className="image-col">
            <div className="image-container1">
              <img src={aboutImage} alt="About Us" className="about-image" />
              <div className="overlay1">
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h2>ABOUT US</h2>
              <p>
                Welcome to the vibrant and diverse Malayalee Community Group
                in Fredericton, Canada. We are a group of individuals who share
                a common bond of Malayalam language and culture, hailing from
                the beautiful state of Kerala, India.
              </p>
              <p>
                Our community strives to foster inclusiveness and to create a
                warm and welcoming environment for everyone. We celebrate our
                rich cultural heritage through various events, festivals,
                cultural programs, and social gatherings.
              </p>
              <p>
                Whether you are a student, professional, family, or an individual
                with an interest in Malayalam culture, you are warmly invited to
                be a part of our community. Join us as we cherish our traditions,
                share our stories, and create beautiful memories together.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="statistics mt-5">
          <Col md={6} className="stat-item">
            <ul>
              <li>Organizing picnics and outdoor activities</li>
              <li>Hosting cultural festivals and celebrations</li>
            </ul>
          </Col>
          <Col md={6} className="stat-item">
            <ul>
              <li>Providing support to newcomers</li>
              <li>Promoting arts and cultural heritage through various events</li>
            </ul>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default AboutUs;
