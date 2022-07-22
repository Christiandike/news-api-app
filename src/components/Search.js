import React from "react";

const Search = ({ value, onKeyDown }) => (
  <div className="search-btn-wrapper">
    <input
      className="search-btn"
      placeholder="Search for news"
      value={value}
      onKeyDown={onKeyDown}
    />
  </div>
);

export default Search;
