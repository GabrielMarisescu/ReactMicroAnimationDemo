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
          backgroundColor: 'black',
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

export default Spring;
