import React from 'react';
import MovieCard from './MovieCard';

const MovieRow = ({ movieArray }) => {

    return (movieArray && (
        <div className='px-6 ' >

            <h1 className="text-lg md:text-3xl py-4 text-white"> Now playng</h1>

            <div className="flex overflow-x-scroll no-scrollbar">

                <div className='flex '>
                    {movieArray.map((movie) =>
                        <MovieCard poster_path={movie?.poster_path} />
                    )
                    }

                </div>
            </div>

        </div>
    )
    )
}
export default MovieRow;
