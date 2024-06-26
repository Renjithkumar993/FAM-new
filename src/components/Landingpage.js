// src/components/LandingPage.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import image1 from '../images/a1.jpg';
import image2 from '../images/a2.jpg';
import image3 from '../images/a3.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <div className="caption-content animate">
              <span className="badge">Hello</span>
              <h1>Welcome to FAM</h1>
              <h2>Fredericton Association of Malayalees (FAM)</h2>
              <p>A registered non-profit organization - society act established in 1989</p>
              <Button variant="danger" className="mr-2">Read More</Button>
              <Button variant="secondary">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <div className="caption-content animate">
              <span className="badge">Hello</span>
              <h1>We Do Picnics</h1>
              <h2>Cultural Festival Celebrations</h2>
              <p>Bringing together the community with vibrant cultural events.</p>
              <Button variant="danger" className="mr-2">Read More</Button>
              <Button variant="secondary">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <div className="caption-content animate">
              <span className="badge">Hello</span>
              <h1>Bring Your Ideas</h1>
              <h2>Join Us in Making a Difference</h2>
              <p>We welcome your suggestions and participation in our activities.</p>
              <Button variant="danger" className="mr-2">Read More</Button>
              <Button variant="secondary">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
