import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useScroll, useTransform } from 'framer-motion';
import './MovingToFredericton.css';
import FullWidthImage from './FullWidthImage';
import Steps from './Steps';



const MovingToFredericton = () => {

  
  return (
    <>

      <Steps />
      <Container>
        <Row >
        <Col md={12}>
  </Col>
        </Row>
       
      </Container>
      <FullWidthImage />
    </>
  );
};

export default MovingToFredericton;
