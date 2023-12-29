import React from 'react'
import { useSelector } from 'react-redux';

const Main = () => {

    const movieData = useSelector((store) => store.movie.movies)

    if (!movieData) return;

    const { original_title, overview } = movieData?.results[6]

    return (
        <div>

            <div className='px-20 py-48'>
                <h1 className='font-bold text-4xl m-4'>{original_title}</h1>
                <p className='m-4 w-1/3'>{overview}</p>
                <div>
                    <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg '>
                        Play
                    </button>
                    <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg '>
                        More info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;
