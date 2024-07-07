import React from 'react'
import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies';
import MovieCard from '../MovieCard';
import { useSelector } from 'react-redux';

const TopRatedMovies = () => {
        useTopRatedMovies()
    const movieData  = useSelector((store) => store.movie.topRatedMovies);
    let populerShows =movieData?.results;
    useTopRatedMovies()
    return (
        <div className='text-white '>

            <div className='flex  '>
                {populerShows?.map((movie) => (
                    <div >
                        <MovieCard key={movie.id} poster_url={movie.poster_path} id={movie.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopRatedMovies