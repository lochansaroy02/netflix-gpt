import React from 'react';
import MovieRow from './MovieRow'
import { useSelector } from 'react-redux';
import useTopRated from '../hooks/movies/useTopRatedMovies';
import useTopRatedMovies from '../hooks/movies/useTopRatedMovies';
import useUpcomingMovies from '../hooks/movies/usePopulerMovies';

const MoviesSection = () => {
    const movies = useSelector((store) => store.movie.nowPlaying)
    const topRated = useSelector((store) => store.movie.topRated);
    const movieArray = movies?.results;
    useUpcomingMovies();


    return (
        movies && topRated &&
        (
        
        <div className=' md:top-[100%] top-[60%] absolute bg-black z-20'>
            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={topRated}  />
        </div>
        
        )
    )
}

export default MoviesSection

