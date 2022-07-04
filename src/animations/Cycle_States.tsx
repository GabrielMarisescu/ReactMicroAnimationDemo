import { motion, useCycle } from 'framer-motion';
import React from 'react';

function Cycle_States() {
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90 }
  );
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
        animate={animate}
        onTap={() => {
          cycle();
        }}
      />
    </div>
  );
}

export default Cycle_States;
