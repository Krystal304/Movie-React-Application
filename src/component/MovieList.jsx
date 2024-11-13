


import React from 'react'

function MovieList({movies}) {  
  return (
    <div className='d-flex flex-row flex-wrap'>

      {movies.map((movie) => (
        <div className='m-3' key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieList