import React from 'react';
import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';

function showAnimations({
  forwardAnimation,
  backwardAnimation,
  showAnimations,
}) {
  return (
    <div className=' flex justify-evenly mt-32'>
      <button onClick={backwardAnimation}>
        <BackArrow />
      </button>
      {showAnimations()}
      <button onClick={forwardAnimation}>
        <ForwardArrow />
      </button>
    </div>
  );
}

export default showAnimations;
