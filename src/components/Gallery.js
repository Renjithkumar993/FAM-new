import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Gallery.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    setLoadedImages(images);
  }, []);

  return (
    <div className="gallery-section">
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
            Our Gallery
          </motion.h2>
        </motion.div>
        <div className="gallery-grid">
          {loadedImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
