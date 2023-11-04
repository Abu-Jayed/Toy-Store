import React from 'react';
import WithScrollbar from './WithScrollbar';

const LegoStore = () => {
  return (
    <div className='relative max-w-7xl mx-auto mt-4'>
      <h1 className='text-[40px] font-bold text-black text-center'>LEGO Store at ToyTopia</h1>
      <WithScrollbar></WithScrollbar>
    </div>
  );
};

export default LegoStore;