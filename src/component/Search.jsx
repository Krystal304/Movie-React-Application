

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="col col-sm-4">
            <input className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search...">

            
            </input>

        </div>
    )
}

export default Search