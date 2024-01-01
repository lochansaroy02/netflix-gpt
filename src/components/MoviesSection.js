import React from 'react';
import MovieRow from './MovieRow'
import { useSelector } from 'react-redux';
const MoviesSection = () => {
    const movies = useSelector((store) => store.movie.nowPlaying)
    const movieArray = movies?.results;
    


    return (
        (
        
        <div className=' md:top-[100%] top-[90%] absolute bg-black z-20'>

            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={movieArray} />
        </div>
        
        )
    )
}

export default MoviesSection

