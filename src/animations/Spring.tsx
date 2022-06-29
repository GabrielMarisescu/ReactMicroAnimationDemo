import { motion } from 'framer-motion';
import React from 'react';

function Spring() {
  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundImage: 'linear-gradient(to right, #7b2ff7, #f107a3)',
      }}
      animate={{ rotate: 180 }}
      transition={{
        type: 'spring',
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      }}
    />
  );
}

export default Spring;
