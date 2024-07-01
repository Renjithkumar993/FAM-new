import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import imageFredericton from '../images/heroimages/pexels-abhijithprakashan-13937264.jpg';
import imageKerala from '../images/heroimages/pexels-aswin-reji-186116512-11294493.jpg';
import imageCulture from '../images/heroimages/c8.jpg';

export default function LandingPage() {
  return (
    <div className='main-container'>
      <Carousel fade interval={5000} pause={false} className='custom-carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={imageFredericton}
            alt='Fredericton'
          />
          <Carousel.Caption className='carousel-caption'>
            <h1>Welcome to <span className='fam-hero'>FAM</span></h1>
            <h2>Fredericton Association of Malayalees (FAM)</h2>
            <p>A registered non-profit organization - society act established in 2021</p>
            <Button variant='primary'>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={imageKerala}
            alt='Kerala'
          />
          <Carousel.Caption className='carousel-caption'>
            <h1>We Do Picnics</h1>
            <h2>Cultural Festival Celebrations</h2>
            <p>Bringing together the community with vibrant cultural events.</p>
            <Button variant='primary'>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={imageCulture}
            alt='Culture'
          />
          <Carousel.Caption className='carousel-caption'>
            <h1>Bring Your Ideas</h1>
            <h2>Join Us in Making a Difference</h2>
            <p>We welcome your suggestions and participation in our activities.</p>
            <Button variant='primary'>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
