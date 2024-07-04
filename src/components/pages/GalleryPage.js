import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './GalleryPage.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images/galleryimages', false, /\.(png|jpe?g|svg)$/));

const GalleryPage = () => {
  return (
    <div className="gallery-page">
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
            className="animated-heading text-black mt-5"
          >
            GALLERY
          </motion.h2>
        </motion.div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-grid-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => window.open(image.default || image, '_blank')}
            >
              <img src={image.default || image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GalleryPage;