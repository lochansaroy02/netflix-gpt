import React from 'react';
import { useSelector } from 'react-redux';
import MainShimmer from './Shimmer/MainShimmer';
import { IMG_CDN } from '../utils/constant';


const Main = () => {
    const movieData = useSelector((store) => store.movie.nowPlaying);

    if (!movieData || !movieData.results || movieData.results.length === 0) {
        return <MainShimmer />;
}
    
    const { original_title, overview, poster_path } = movieData.results[0];

    return (
        <div className=' flex w-screen bg-gradient-to-t  from-black  py-10 md:top-0  top-52   rounded-b-xl   md:py-30 md:w-fit md:h-fit  px-10 text-white   md:opacity-80 md:bg-gradient-to-r'>
        <div className='ml-40' >
        <h1 className='font-bold text-4xl md:m-4'>{original_title}</h1>
            <p className='md:m-4 mb-6 md:w-3/4'>{overview}</p>
           
            <div className=''>
                <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg'>
                    Play
                </button>
                <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg'>
                    More info
                </button>
            </div>

           
        </div>


        <div className='mr-40'>
                <img src={IMG_CDN+poster_path} alt="" />
            </div>

        </div>
    );
};

export default Main;
