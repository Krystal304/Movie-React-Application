import { useEffect, useState } from 'react'
import SearchBar from './component/SearchBar.jsx'
import MovieList from './component/MovieList.jsx'
import axios from 'axios'
import './App.css'

function App() {


  // set state
  const apiKey = "ca4a1533"
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  // useEffect 

  useEffect(() => {
    if (searchTerm) {
      axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
        .then((response) => {
          if (response.data.Search) {
            setMovie(response.data.Search);
          } else {
            setMovie([]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchTerm]);


return (
  <div className="App">
    <SearchBar setSearchTerm={setSearchTerm} />
    <MovieList movie={movie} />
  </div>
);

}
export default App
