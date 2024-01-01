import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constant';
import useBackdrop from '../hooks/useBackdrop';
import Header from './Header'

const MoviePage = () => {
    const movieData = useSelector((store) => store.movie.nowPlaying)
    const movieArr = movieData.results;
    const movieId = useSelector((store) => store.movie.movieId);
    const right = movieArr.filter((movie) => movie.id === movieId)
    const movie = right?.[0];
    const { id, original_title, overview, release_date, poster_path, vote_average } = movie;
    useBackdrop(id)
    const backdrop = useSelector((store) => store.movie.backdrop);
    const backdropArr = backdrop?.backdrops;




    return (
        <>
            <div className='bg-black'>

                <div className='flex flex-wrap bg-black '>
                    {
                        <img className='md:w-screen  md:fixed fixed h-screen object-cover blur-sm ' src={IMG_CDN + backdropArr?.[0].file_path} alt="" />
                    }
                    <div className="fixed   inset-0 bg-black opacity-75"></div>
                </div>


                <div className='md:my-10  md:p-5 w-screen h-fit     md:bg-gradient-to-r md:from-black  top-10  left-0 absolute' >
                    <div className=' flex w-screen md:justify-start justify-center'>
                        <img className='w-56 mx-20' src={IMG_CDN + poster_path} alt="" />
                    </div>
                    <div className='text-white  w-full  flex flex-col md:items-start items-center '>
                        <h3 className='md:text-xl md:px-6 mt-5'> Ratings :  {parseFloat(vote_average.toFixed(2))}</h3>
                        <h1 className='text-5xl my-2 md:px-6' >{original_title}</h1>
                        <p className='md:text-lg md:w-1/2 md:px-1  w-fit mx-5 text-left text-md '>{overview}</p>
                        <h3 className='md:px-6'>{release_date}</h3>
                    </div>
                </div>



            </div>
        </>
    )

}

export default MoviePage
