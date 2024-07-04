import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImage from '../images/famaboutus.png'; // Adjust the path to your image
import './AboutUs.css';
import data from "../config/aboutus.json"; // Directly import the JSON data

const AboutUs = () => {
  const aboutData = data.about; // No need to fetch, directly use imported data

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
              <h2>{aboutData.title}</h2>
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="statistics mt-5">
          {aboutData.statistics.map((stat, index) => (
            <Col md={6} className="stat-item" key={index}>
              <ul>
                {stat.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
