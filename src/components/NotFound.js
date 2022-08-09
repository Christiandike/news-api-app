import React from 'react';
import errorImg from '../media/404-error.gif';

const NotFound = () => {
  return (
    <div className='err-wrap'>
      <p className='big'>
        <span className='red'>Oops!</span> We can't seem to find what you're
        looking for<span className='red'>.</span>
      </p>
      <p className='small'>
        Try to make your search more specific like "stock market", and check for
        typos.
      </p>
      <div className='err-img'>
        <img src={errorImg} alt='' />
      </div>
    </div>
  );
};

export default NotFound;
