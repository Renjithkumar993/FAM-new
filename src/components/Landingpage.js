import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovingComponent from 'react-moving-text';
import './LandingPage.css';
import data from '../config/landingpage.json';

// Function to import all images from a directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/heroimages', false, /\.(png|jpe?g|svg)$/));

export default function LandingPage() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    // Set the carousel items to the imported images
    setCarouselItems(images);
  }, []);

  const getAnimationIndex = (itemIndex, animIndex) => {
    // Cycle through animations based on item index
    const animationSets = Math.floor(data.animations.length / 3); // Number of animation sets
    const start = (itemIndex % animationSets) * 3; // Start index for the animation set
    return start + animIndex;
  };

  return (
    <div className='main-container'>
      <Carousel fade interval={5000} pause={false} className='custom-carousel'>
        {carouselItems.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100 carousel-image'
              src={image.default || image} // Check for default export
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className='carousel-caption'>
              {Array(3).fill().map((_, animIndex) => {
                const animation = data.animations[getAnimationIndex(index, animIndex)];
                return (
                  <MovingComponent
                    key={animIndex}
                    type={animation.type}
                    duration={animation.duration}
                    delay={animation.delay}
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none"
                  >
                    {animIndex === 0 ? (
                      <h1 dangerouslySetInnerHTML={{ __html: animation.text }}></h1>
                    ) : animIndex === 1 ? (
                      <h2>{animation.text}</h2>
                    ) : (
                      <p>{animation.text}</p>
                    )}
                  </MovingComponent>
                );
              })}
              <Button variant='primary'>Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
