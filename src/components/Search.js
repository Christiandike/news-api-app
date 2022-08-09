import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ value, setQuery }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      setTimeout(() => {
        setTimeout(() => {
          setQuery(e.target.value);
        });
        navigate('/results');
      });
      console.log(e.target.value);
    }
  };

  return (
    <div className='search-btn-wrapper'>
      <input
        className='search-btn'
        placeholder='Search for news'
        value={value}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
