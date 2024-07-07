import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderCarousel.css';

// Function to import all images from a directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/heroimages', false, /\.(png|jpe?g|svg)$/));

const HeaderCarousel = ({ height = '40vh', pageTitle }) => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    setCarouselItems(images);
  }, []);

  return (
    <div className='header-carousel' style={{ height }}>
      <Carousel fade interval={5000} pause={false} className='custom-carousel'>
        {carouselItems.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="zoom-container" style={{ height }}>
              <img
                className='d-block w-100 carousel-image'
                src={image.default || image}
                alt={`Slide ${index + 1}`}
                style={{ height }}
              />
              <div className="overlay"></div>
              <Carousel.Caption className='carousel-caption'>
                {pageTitle && <h1>{pageTitle}</h1>}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
