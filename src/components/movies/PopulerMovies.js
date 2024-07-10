import React from 'react'
import { useSelector } from 'react-redux';
import usePopulerMovies from '../../hooks/movies/usePopulerMovies';
import MovieCard from '../MovieCard';

const PopulerMovies = () => {
    const movieData = useSelector((store) => store.movie.populer);
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

export default PopulerMovies