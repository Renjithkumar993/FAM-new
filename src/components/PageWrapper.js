import React, { useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './PageWrapper.css';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef(null);

  useEffect(() => {
    if (nodeRef.current) {
      gsap.from(nodeRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.to(nodeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  }, [location]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={500} nodeRef={nodeRef}>
        <div className="page-content" ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageWrapper;
