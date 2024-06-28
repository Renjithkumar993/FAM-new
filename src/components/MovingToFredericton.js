import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFileDownload, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './MovingToFredericton.css';
import image1 from '../images/fredericton/image1.jpg';
import image2 from '../images/fredericton/image2.jpg';
import image3 from '../images/fredericton/image3.jpg';
import image4 from '../images/fredericton/image4.jpg';
import image5 from '../images/fredericton/image5.jpg';

const images = [image1, image2, image3, image4, image5];

const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const MovingToFredericton = () => {
  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => shuffleArray(prevImages));
    }, 3000); // Shuffle images every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };

  const leftContentVariants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', duration: 1, delay: 0.5 } },
  };

  const rightContentVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="moving-to-fredericton-container"
      id="move"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              className="left-content"
              variants={leftContentVariants}
              initial="hidden"
              animate="visible"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.6697494024043!2d-66.650224384504!3d45.96358992967899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caae6ad24e65e55%3A0xb551e71e732b6ce8!2sFredericton%2C%20NB%2C%20Canada!5e0!3m2!1sen!2sin!4v1625049946572!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
              <h2 className="mt-4 text-center">
                Planning to move to <span className="typed-text">FREDERICTON</span>
              </h2>
              <p className="text-center">We have a helpful document to guide you through.</p>
              <div className="text-center">
                <Button variant="danger" className="rounded-pill custom-button" href="path_to_your_document.pdf" download>
                  <FaFileDownload className="mr-1" /> Download Guide
                </Button>
              </div>
              <div className="social-buttons mt-4 text-center">
                <Button variant="primary" className="mr-3 rounded-pill custom-button btn-facebook" href="#" target="_blank">
                  <FaFacebook className="mr-1" /> Join Facebook Group
                </Button>
                <Button variant="success" className="rounded-pill custom-button btn-whatsapp" href="#" target="_blank">
                  <FaWhatsapp className="mr-1" /> Join WhatsApp Group
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              className="right-content"
              variants={rightContentVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="image-grid">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`grid-item item-${index}`}
                  >
                    <img src={image} alt={`Fredericton ${index}`} className="fixed-size-image" />
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default MovingToFredericton;
