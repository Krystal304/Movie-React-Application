const Search = ({ searchTerm, setSearchTerm }) => {
    const handleSearchClick = (event) => {
        if(searchTerm)
      getMovies(searchTerm);
      event.preventDefault();
    }
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
      />
            <button className="btn btn-primary" onClick={handleSearchClick}>
        Search
      </button>

    </div>
  );
};

export default Search;
