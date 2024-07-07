import React from 'react'
import NowPlayingMovies from './NowPlayingMovies'
import PopulerMovies from './PopulerMovies'
import TopRatedMovies from './TopRatedMovies'

const Movies = () => {
  return (
    <div>
        <NowPlayingMovies/>
        <PopulerMovies/>
        <TopRatedMovies/>
    </div>
  )
}

export default Movies