import React from 'react';
import { useSelector } from 'react-redux';
import MainShimmer from './Shimmer/MainShimmer';


const Main = () => {
    const movieData = useSelector((store) => store.movie.nowPlaying);

    if (!movieData || !movieData.results || movieData.results.length === 0) {
        return <MainShimmer />;
    }
    
    const { original_title, overview } = movieData.results[0];

    return (
        <div className='w-screen bg-gradient-to-t from-black  py-10 md:top-0  top-52   rounded-b-xl h-fit md:aspect-video md:py-40 md:w-fit md:h-fit  px-10 text-white md:absolute  md:my-20  md:opacity-80 absolute md:bg-gradient-to-r '>
            <h1 className='font-bold text-4xl md:m-4'>{original_title}</h1>
            <p className='md:m-4 mb-6 md:w-1/3'>{overview}</p>
            <div>
                <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg'>
                    Play
                </button>
                <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg'>
                    More info
                </button>
            </div>
        </div>
    );
};

export default Main;
