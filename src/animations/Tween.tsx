import { motion } from 'framer-motion';
import React from 'react';

function Tween() {
  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundImage: 'linear-gradient(to right, #7b2ff7, #f107a3)',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    />
  );
}

export default Tween;
