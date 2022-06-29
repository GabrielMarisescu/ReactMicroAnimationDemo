import React from 'react';

function ForwardArrow() {
  return (
    <div>
      <button
        type='button'
        className='text-white bg-black hover:bg-gray-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-10'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='white'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14 5l7 7m0 0l-7 7m7-7H3'
          />
        </svg>
      </button>
    </div>
  );
}

export default ForwardArrow;
