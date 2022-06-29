import { motion } from 'framer-motion';
import React from 'react';

function Spring() {
  return (
    <div>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundImage: 'linear-gradient(to right, #7b2ff7, #f107a3)',
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

export default Spring;
