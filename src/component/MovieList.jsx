


// import React from 'react'

// function MovieList({movies}) {  
//   return (
//     <div className='d-flex flex-row flex-wrap'>

//       {movies.map((movie,index) => (
     
//         <div className='m-3' key={movie.imdbID}>
//           <img src={movie.Poster} alt={movie.Title} />
//           <p>{movie.Title}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default MovieList


import React from 'react';

function MovieList({ movie }) {  
  if (!movie) {  
    return <p>No movie found.</p>;
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='m-3'>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "default-placeholder.jpg"} 
          alt={movie.Title}
          style={{ width: "150px", height: "225px" }} 
        />
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Plot}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieList;