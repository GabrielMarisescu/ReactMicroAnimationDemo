import React from 'react';

function BackArrow() {
  return (
    <button
      type='button'
      className='text-white bg-black hover:bg-gray-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10 19l-7-7m0 0l7-7m-7 7h18'
        />
      </svg>
    </button>
  );
}

export default BackArrow;
