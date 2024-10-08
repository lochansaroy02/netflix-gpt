import React from 'react';
import { useSelector } from 'react-redux';
import MainShimmer from './Shimmer/MainShimmer';
import { IMG_CDN } from '../utils/constant';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const movieData = useSelector((store) => store.movie.nowPlaying);
    const navigate = useNavigate()
    if (!movieData || !movieData.results || movieData.results.length === 0) {
        return <MainShimmer />;
}
    
    const { original_title, overview, poster_path,id,  } = movieData.results[0];
    // const handleclick = ()=>{
    //     navigate(`/${thisMovie.id}`);
    // }
    return (
      <div className='  justify-center flex-col-reverse md:flex-row flex w-full bg-gradient-to-t   mt-20  from-black  py-10 md:top-0  top-52   rounded-b-xl    md:py-30 md:w-fit md:h-fit  px-10 text-white   md:opacity-80 md:bg-gradient-to-r'>
        <div className='md:ml-40 flex flex-col items-center ' >
        <h1 className='font-bold text-2xl md:text-4xl md:m-4'>{original_title}</h1>
            <p className='md:flex  hidden md:m-4 mb-6 md:w-3/4'>{overview}</p>
           
            <div className=''>
                <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg'>
                    Play
                </button>
                <button  className='bg-gray-700 mx-2 px-4 py-2 text-lg text-white rounded-lg'>
                    More info
                </button>
            </div>
        </div>

 
        <div className='md:mr-40   flex justify-center'>
                <img className='md:w-[100%] w-[75%] ' src={IMG_CDN+poster_path} alt="" />
            </div>

        </div>
    );
};

export default Main;
