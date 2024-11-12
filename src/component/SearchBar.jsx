


import React from 'react'

function SearchBar({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar