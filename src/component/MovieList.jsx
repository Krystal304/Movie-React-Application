



import React from 'react';

function MovieList({ movie }) {
  return (
    !movie ? (
      <p>No movie found</p> 
    ) : (
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
    )
  );
}

export default MovieList;

