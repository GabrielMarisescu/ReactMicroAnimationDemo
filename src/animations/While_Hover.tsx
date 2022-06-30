import { motion } from 'framer-motion';
import React from 'react';

function While_Hover() {
  return (
    <div>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundImage: 'linear-gradient(to right, #7b2ff7, #f107a3)',
        }}
        whileHover={{ scale: 0.8 }}
      />
    </div>
  );
}

export default While_Hover;
