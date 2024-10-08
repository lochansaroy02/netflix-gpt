import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies';

const NowPlayingMovies = () => {
  useNowPlayingMovies()
  const movieData = useSelector((store) => store.movie.nowPlaying);

  return (
    <div className='text-white '>

    <div className='flex  '>
        {movieData?.results?.map((movie) => (
            <div >
            <MovieCard thisMovie={movie} />
                
            </div>
        ))}
    </div>
</div>
  )
}

export default NowPlayingMovies