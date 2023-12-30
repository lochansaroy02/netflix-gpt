import React from 'react'


import { useSelector } from 'react-redux';
import MovieRow from './MovieRow'
const MoviesSection = () => {
    const movies = useSelector((store) => store.movie.nowPlaying)
    const movieArray = movies?.results;
    console.log(movies)
    


    return (
        (
        
        <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>

            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={movieArray} />
            <MovieRow movieArray={movieArray} />
        </div>
        
        )
    )
}

export default MoviesSection

