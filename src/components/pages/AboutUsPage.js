import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderCarousel from '../HeaderCarousel';
import './AboutUsPage.css';
import aboutImage1 from '../../images/fredericton/image1.jpg'; // Replace with your image path
import aboutImage2 from '../../images/fredericton/image4.jpg'; // Replace with your image path
import data from "../../config/aboutus.json"; // Directly import the JSON data
import Footer from '../Footer';
import FullWidthImage from '../FullWidthImage';
import { useMediaQuery } from 'react-responsive';

const AboutUsPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="about-us-page">
      <Container className="about-us-content">
        <Row className="mb-4">
          
          
          
        </Row>
        <Row>
          <Col md={6}>
            <div className="about-description">
              {data.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="image-container">
              <img src={aboutImage1} alt="About Us" className="about-image" />
            </div>
          </Col>
        </Row>
        <Row className="statistics mt-4">
          {data.about.statistics.map((stat, index) => (
            <Col md={6} key={index} className="stat-item">
              <ul>
                {stat.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <div className="image-container">
              <img src={aboutImage2} alt="Activities" className="about-image" />
            </div>
          </Col>
          <Col md={6}>
            <div className="mission-description">
              <h2>Fredericton Association of Malayalees</h2>
              <p>
                Through FAM (Fredericton Association of Malayalees), we unite and join hands to pass the culture on to generations. As a team, we conduct cultural activities, linguistic programs, festivals, charity activities, etc. FAM is a forum where we can meet, exchange views, and foster friendships.
              </p>
              <p>
                Malayalees in Fredericton are represented in FAM, which advocates for their wellbeing and cultural needs. With all our cooperative efforts, FAM pledges to keep our next generation abreast of our mother tongue, culture, and enriched heritage.
              </p>
              <p>
                We are open to collaborating and engaging with other cultural groups and ethnicities. Let us hold our hands to form a composite culture with every color and song to be felt and experienced in its original essence under a single umbrella.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
  
      <FullWidthImage />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
