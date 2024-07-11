import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
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
    <Box
      className='header-container'
      sx={{
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Carousel fade interval={5000} pause={false} controls={false} indicators={false} className='custom-carousel' style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
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
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Breadcrumbs aria-label="breadcrumb" className='custom-breadcrumb' sx={{ zIndex: 2 }}>
        <Link component={RouterLink} to="/" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
          Home
        </Link>
        <Typography color="inherit">{pageTitle}</Typography>
      </Breadcrumbs>
      <Typography
        variant="h2"
        className='page-title mt-5'
        sx={{
         
          fontSize: { xs: '2em', sm: '2.5em', md: '3em', lg: '4em' },
          fontWeight: 300,
          zIndex: 2,
        }}
      >
        <Typewriter

          words={[pageTitle]}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={100}
        />
      </Typography>
    </Box>
  );
};

export default HeaderCarousel;
