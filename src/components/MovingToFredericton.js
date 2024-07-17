import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFileDownload, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import './MovingToFredericton.css';
import FullWidthImage from './FullWidthImage';
import Steps from './Steps';


const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const MovingToFredericton = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };

  
  
  
  

  const rightContentVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', duration: 1, delay: 0.5 } },
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.5, 1]);

  return (
    <>

      <Steps />
      <Container>
        <Row className="align-items-center">
        <Col md={12}>
  </Col>
        </Row>
       
      </Container>
      <FullWidthImage />
    </>
  );
};

export default MovingToFredericton;
