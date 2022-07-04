import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Animation_Sequence() {
  const animation = useAnimation();

  async function sequence() {
    await animation.start({ rotate: -90 });
    await animation.start({ scale: 1.3 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 1 });
  }
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
        onTap={sequence}
        animate={animation}
      />
    </div>
  );
}

export default Animation_Sequence;
