import React from 'react';
import './index.css'
function SearchBar({ searchCity, handleInputChange, handleSearch }) {
  return (
    <div className="search">
      <input
        className='searchbar'
        type="text"
        value={searchCity}
        onChange={handleInputChange}
        placeholder="Search location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
