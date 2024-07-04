import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link as Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Gallery.css';

// Function to import all images from a directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/galleryimages', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setLoadedImages(images);
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const scrollTo = scrollPosition * (galleryGrid.scrollWidth / images.length);
    galleryGrid.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }, [scrollPosition, images.length]);

  const handleClick = (image) => {
    window.open(image.default || image, '_blank');
  };

  return (
    <Element name="gallery">
      <div className="gallery-section" id="gallery">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="section-title"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="animated-heading"
            >
              OUR GALLERY
            </motion.h2>
          </motion.div>
          <div className="gallery-container">
            <div className="gallery-scroll">
              <div className="gallery-grid">
                {loadedImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`gallery-item ${index === scrollPosition ? 'center-image' : ''}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleClick(image)}
                  >
                    <img src={image.default || image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <Link to="/gallery">
            <Button variant="danger" className="view-all-button">View All</Button>
          </Link>
        </Container>
      </div>
    </Element>
  );
};

export default Gallery;
