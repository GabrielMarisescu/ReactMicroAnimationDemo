import React from 'react';
import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';

function showAnimations({
  forwardAnimation,
  backwardAnimation,
  showAnimations,
}) {
  return (
    <>
      <div className='flex justify-center mt-28 '>
        <div className='p-8  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-auto w-auto '>
          <div className='flex'>
            <button onClick={backwardAnimation}>
              <BackArrow />
            </button>
            {showAnimations()}
            <button onClick={forwardAnimation}>
              <ForwardArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default showAnimations;
