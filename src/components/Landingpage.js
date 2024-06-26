// src/components/LandingPage.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';
import image1 from '../images/a1.jpg';
import image2 from '../images/a2.jpg';
import image3 from '../images/a3.jpg';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-page" id='home'>
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={5}
        transition={2}
      />
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="carousel-caption-wrapper">
            <Carousel.Caption>
              <div className="caption-content animate">
                <span className="badge">Hello</span>
                <h1>Welcome to FAM</h1>
                <h2>Fredericton Association of Malayalees (FAM)</h2>
                <p>A registered non-profit organization - society act established in </p>
                <Button variant="danger" className="mr-2" href='#about'>Learn More</Button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-wrapper">
            <Carousel.Caption>
              <div className="caption-content animate">
                <span className="badge">Hello</span>
                <h1>We Do Picnics</h1>
                <h2>Cultural Festival Celebrations</h2>
                <p>Bringing together the community with vibrant cultural events.</p>
                <Button variant="danger" className="mr-2" href='#about'>Learn More</Button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-wrapper">
            <Carousel.Caption>
              <div className="caption-content animate">
                <span className="badge">Hello</span>
                <h1>Bring Your Ideas</h1>
                <h2>Join Us in Making a Difference</h2>
                <p>We welcome your suggestions and participation in our activities.</p>
                <Button variant="danger" className="mr-2" href='#about'>Learn More</Button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
