import { motion } from 'framer-motion';
import React from 'react';

function WhileHover() {
  return (
    <div>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: 'black',
        }}
        whileHover={{ scale: 0.8 }}
      />
    </div>
  );
}

export default WhileHover;
