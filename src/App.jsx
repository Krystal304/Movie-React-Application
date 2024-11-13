import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./App.css";
import MovieList from "./component/MovieList";

const App= () => {
  // set state
  const apiKey = "5e12f80e";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");




  const getMovies = async() => {
    try{
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`

    const response = await axios.get(url);
   console.log(response.data);
   if(response.data && response.data.Search)
   setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


return (
  <div className='container-fluid movie-app'>
    <div className='row'>
      <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for a movie"
      />
      <button onClick={getMovies}>Search</button>
      </div>
      <div className='row'>
      <MovieList movies={movies}/>
    </div>
  </div>
)
};
  
export default App;
