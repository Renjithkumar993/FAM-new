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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MeetTheTeam = () => {
  return (
    <div className="section meet-the-team-section" id="meet">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="section-header"
        >
          <h2 className="section-title2">CURRENT ADMINS </h2>
        </motion.div>
        <Row className="team-row">
          {teamMembers.map((member, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <motion.div
                className="team-member"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
              >
                <div className="member-photo"></div>
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
