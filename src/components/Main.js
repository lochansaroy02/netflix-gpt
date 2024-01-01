import React from 'react'
import useMovies from '../hooks/useMovies';
import { useSelector } from 'react-redux';
import { MdOutlineVaccines } from 'react-icons/md';
import MainShimmer from './Shimmer/MainShimmer';
import useTrailer from '../hooks/useTrailer';

const Main = () => {
    const movieData = useSelector((store) => store.movie.nowPlaying)
    const { original_title, overview } = movieData?.results[0]




return ( original_title===undefined && overview===undefined )  ? <MainShimmer/> :       (
            <div>
                {<div className='w-screen aspect-video py-40 px-10 text-white my-20  opacity-80 absolute bg-gradient-to-r from-black'>
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
                </div>}
            </div>
        )

}

export default Main;
