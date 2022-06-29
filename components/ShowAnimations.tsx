import React from 'react';
import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';

function showAnimations({
  forwardAnimation,
  backwardAnimation,
  showAnimations,
}) {
  return (
    <div className=' flex justify-between mt-48'>
      <button onClick={backwardAnimation} className='ml-36'>
        <BackArrow />
      </button>
      {showAnimations()}
      <button onClick={forwardAnimation} className='mr-36'>
        <ForwardArrow />
      </button>
    </div>
  );
}

export default showAnimations;
