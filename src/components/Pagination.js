import React from 'react';
import Button from './Button';

const Pagination = ({ handleNext, handlePrevious, pageData, onChange }) => {
  const { page, totalPages } = pageData;
  const pageArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pageArray.push(i);
  }

  return (
    <div className='pagination-wrap'>
      <p className='page-count'>
        Page {page} of {totalPages}{' '}
      </p>
      <select className='select-list' onChange={onChange}>
        {pageArray.map((page) => (
          <PageOptions key={page} value={page} />
        ))}
      </select>
      <Button text='Previous' onClick={handlePrevious} />
      <Button text='Next' onClick={handleNext} />
    </div>
  );
};

const PageOptions = ({ value, onClick }) => (
  <option value={value} onClick={onClick}>
    {' '}
    {value}{' '}
  </option>
);

export default Pagination;
