import React, { useState } from 'react'

import MovieDetails from './MovieDetails'

const Movie = (props) => {
  const {
    imdbID,
    title,
    year,
    poster,
    onClickMovie,
  } = props

  const handleClickMovie = () => {
    onClickMovie(imdbID)
  }

  return (
    <div>
      <button onClick={handleClickMovie}>Go to movie</button>

      <br />
      {title}<br />
      Year: {year} <br />
      <img src={poster} />
    </div>
  )
}

export default Movie