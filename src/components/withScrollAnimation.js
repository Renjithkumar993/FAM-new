// src/hoc/withFramerAnimation.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const withFramerAnimation = (WrappedComponent) => {
  return (props) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withFramerAnimation;
