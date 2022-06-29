import { motion } from 'framer-motion';
import React from 'react';

function Spring() {
  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: 'black',
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
