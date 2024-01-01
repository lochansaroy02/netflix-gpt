import React from 'react';
import MovieCard from './MovieCard';

const MovieRow = ({ movieArray }) => {

    return (movieArray && (
        <div className='px-6 w-screen ' >

            <h1 className="text-lg md:text-3xl py-4 text-white"> Now playng</h1>

            <div className=" flex  w-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]">

                <div className='flex '>
                    {movieArray.map((movie) => (
                        <MovieCard key={movie.id} poster_url={movie.poster_path} id={movie.id}  />
                    ))}
                </div>
            </div>

        </div>
    )
    )
}
export default MovieRow;
