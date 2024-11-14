const Search = ({ searchTerm, setSearchTerm, getMovies }) => {
    const handleSearchClick = (event) => {
        event.preventDefault();
        if(searchTerm)

      getMovies(searchTerm);
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
