import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCalendarAlt, FaHandsHelping, FaBell } from 'react-icons/fa';
import './WhatWeDo.css';
import { Container } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);

const initialCardData = [
  { id: 1, title: "Attend Events", description: "Join us at various cultural events, gatherings, and celebrations organized by the association.", icon: <FaCalendarAlt /> },
  { id: 2, title: "Volunteer Opportunities", description: "Get involved by volunteering for different roles and activities within the association.", icon: <FaHandsHelping /> },
  { id: 3, title: "Stay Connected", description: "Stay updated with the latest news, announcements, and activities by following our social media channels.", icon: <FaBell /> },
];

const colors = ['#e95420', '#0c9c84', '#d4a017', '#992828'];

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const [cardData] = useState(initialCardData);

  useEffect(() => {
    const cards = gsap.utils.toArray('.whatwedoo-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: -250,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          backgroundColor: colors[index % colors.length],
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            markers: false,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, [cardData]);

  return (
    <Container>
      <div className="whatwedoo-container" ref={containerRef}>
        <div className="whatwedoo-cards">
          {cardData.map((card) => (
            <div className="card-wrapper" key={card.id}>
              <div className="whatwedoo-card card-contents">
                <div className="card-description">
                  <h3 className="card-description__title">{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className="card-icon">{card.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
