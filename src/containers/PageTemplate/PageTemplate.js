import React from 'react';
import './PageTemplate.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

const transition = {
  ease: [0.43, 0.13, 0.23, 0.96],
};

// const variants = {
//   initial: { bottom: '100%' },
//   enter: { bottom: '100%' },
//   exit: { bottom: '0%' },
// };

const PageTemplate = ({ header, footer, children, location, match }) => {
  return (
    <div className="page">
      {header && header}
      <div className="page__content">{children}</div>
      {footer && footer}

      <motion.div initial="exit" animate="enter" exit="exit">
        {['animate1', 'animate2', 'animate3'].map((itm, idx) => (
          <motion.div
            key={itm + idx}
            className={`animates ${itm}`}
            variants={{
              initial: { bottom: '100%' },
              enter: {
                bottom: '100%',
                transition: { ...transition, duration: 1 - idx * 0.2 },
              },
              exit: {
                bottom: '0%',
                transition: { ...transition, duration: 0.6 + idx * 0.2 },
              },
            }}
          />
        ))}

        {/* <motion.div
          key="3"
          className="animates animate3"
          variants={{
            ...variants,
            enter: {
              ...variants.enter,
              transition: { ...transition, duration: 1 },
            },
            exit: {
              ...variants.exit,
              transition: { ...transition, duration: 0.6 },
            },
          }}
        />
        <motion.div
          key="2"
          className="animates animate2"
          variants={{
            ...variants,
            enter: {
              ...variants.enter,
              transition: { ...transition, duration: 0.8 },
            },
            exit: {
              ...variants.exit,
              transition: { ...transition, duration: 0.8 },
            },
          }}
        />
        <motion.div
          key="1"
          className="animates animate1"
          variants={{
            ...variants,
            enter: {
              ...variants.enter,
              transition: { ...transition, duration: 0.6 },
            },
            exit: {
              ...variants.exit,
              transition: { ...transition, duration: 1 },
            },
          }}
        /> */}
      </motion.div>
    </div>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
};

export default withRouter(PageTemplate);
