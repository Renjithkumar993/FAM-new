// src/components/MeetTheTeam.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './MeetTheTeam.css';

const teamMembers = [
  { name: 'Dennis Thomas', role: 'Director' },
  { name: 'Gesha Rajath', role: 'Director' },
  { name: 'Raju Kurian', role: 'Director' },
  { name: 'Rajath Abraham', role: 'Director' },
  { name: 'Ramya Ravi', role: 'Director' },
  { name: 'Renil Lambert', role: 'Director' },
  { name: 'Renjith Rajakumar', role: 'Director' },
];

const MeetTheTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <div className="meet-the-team-section" id='meet'>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="section-header"
        >
          <motion.h2 className="section-title1">Meet the Current Admins</motion.h2>
          <motion.p className="section-description">
            Our team is composed of talented individuals dedicated to making our project a success.
          </motion.p>
        </motion.div>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="team-member"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
              >
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
