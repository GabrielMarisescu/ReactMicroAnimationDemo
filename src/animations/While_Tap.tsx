import { motion } from 'framer-motion';
import React from 'react';

function While_Tap() {
  return (
    <div>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundImage: 'linear-gradient(to right, #7b2ff7, #f107a3)',
          cursor: 'pointer',
        }}
        whileTap={{ rotate: 90, scale: 0.75 }}
      />
    </div>
  );
}

export default While_Tap;
