import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './WhatWeDo.css';

gsap.registerPlugin(ScrollTrigger);

const initialCardData = [
  { id: 1, title: "Become a Member", description: "Contact us to become a member of the Fredericton Association of Malayalees.", step: "01" },
  { id: 2, title: "Attend Events", description: "Join us at various cultural events, gatherings, and celebrations organized by the association.", step: "02" },
  { id: 3, title: "Volunteer Opportunities", description: "Get involved by volunteering for different roles and activities within the association.", step: "03" },
  { id: 4, title: "Stay Connected", description: "Stay updated with the latest news, announcements, and activities by following our social media channels.", step: "04" },
];

const colors = ['#e95420', '#0c9c84', '#d4a017', '#992828'];

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const [cardData, setCardData] = useState(initialCardData);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.whatwedoo-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            x: -150,
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
    },
    { scope: containerRef }
  );

  return (
    <div className="whatwedoo-container step-text" ref={containerRef}>
      <h1>What <span className='hilite-color' >We Do</span></h1>
      <div className="whatwedoo-cards">
        {cardData.map((card) => (
          <div className="card-wrapper" key={card.id}>
            <div className="whatwedoo-card card-contents">
              <div className="card-description">
                <div className="card-step">{card.step}</div>
                <h3 className="card-description__title">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
