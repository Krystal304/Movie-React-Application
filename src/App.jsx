import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./App.css";
import MovieList from "./component/MovieList";
import MovieListHeader from "./component/MovieListHeader";
import Search from "./component/Search";


const App= () => {
  // set state
  // const apiKey = "5e12f80e";
  // const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");




  const getMovies = async(searchTerm) => {
    const apiKey = "5e12f80e";

    // const apiKey = import.meta.env.VITE_API_KEY;


    try{
      const url =`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      // const ur1 =  `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_apiKey}&t=${searchTerm}`;

    const response = await axios.get(url);
   console.log(response.data);


   if(response.data && response.data.Search) {
    setMovies(response.data.Search);

  } else {
    console.error('no movies found')
    setMovies([]);
  }

  
    } catch (error) {
      console.error("Error fetching movies:", error);
  
    }
  };

  useEffect(() => {
    if (searchTerm) { 
      getMovies();
    }
  }, [searchTerm]);


return (
  <div className='container-fluid movie-app'>
    <div className='row'>
      <MovieListHeader header="Movie List" />
      <Search setSearchTerm={setSearchTerm} />
      </div>
      <div className='row'>
      <MovieList movies={movies}/>
    </div>
  </div>
)
};
  
export default App;
