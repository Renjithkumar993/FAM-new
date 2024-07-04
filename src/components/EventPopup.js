// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import './UpcomingEvents.css';
// import eventsData from '../config/events.json';

// // Import all images from the ../events/ folder
// const importAll = (r) => r.keys().map(r);
// const images = importAll(require.context('../events', false, /\.(png|jpe?g|svg)$/));

// const cardVariants = {
//   offscreen: { y: 100, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// const UpcomingEvents = () => {
//   const navigate = useNavigate();
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Add images to events
//     const updatedEvents = eventsData.map((event, index) => ({
//       ...event,
//       image: images[index]
//     }));
//     setEvents(updatedEvents);
//   }, []);

//   const handleRegister = (event) => {
//     navigate(`/event/${event.title.replace(/\s+/g, '-').toLowerCase()}`);
//   };

//   return (
//     <div className="upcoming-events-section" id="news">
//       <Container>
//         <Row className="text-center mb-5">
//           <Col>
//             <motion.h2
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="section-title1"
//             >
//               UPCOMING EVENTS
//             </motion.h2>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           {events.map((event, index) => (
//             <Col md={5} className="mb-5" key={index}>
//               <motion.div
//                 className="event-card"
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: false, amount: 0.5 }}
//                 variants={cardVariants}
//               >
//                 <div className="image-container">
//                   <img src={event.image} alt={event.title} className="event-image"/>
//                   <Button variant="danger" className="register-button" onClick={() => handleRegister(event)}>Register</Button>
//                 </div>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default UpcomingEvents;