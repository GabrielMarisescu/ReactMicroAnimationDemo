import { motion } from 'framer-motion';
import React from 'react';

function RepeatBackwards() {
  return (
    <div>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: 'black',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}

export default RepeatBackwards;
