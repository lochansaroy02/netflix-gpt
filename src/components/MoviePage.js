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
    const movie = right[0];
    const { id, original_title, overview, release_date, poster_path, vote_average } = movie;
    useBackdrop(id)
    const backdrop = useSelector((store) => store.movie.backdrop);
    const backdropArr = backdrop.backdrops;




    return (
        <>


            <div className='bg-black'>

                <div className='flex flex-wrap bg-black '>
                    {
                        <img className='w-screen  fixed blur-sm opacity-25 ' src={IMG_CDN + backdropArr[0].file_path} alt="" />
                    }
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                </div>


                <div className='my-10 p-5 w-screen h-fit bg-gradient-to-r from-black  top-10 px-20 left-0 absolute' >
                    <div>
                        <img className='w-56' src={IMG_CDN + poster_path} alt="" />
                    </div>
                    <div className='text-white'>
                        <h3 className='text-xl mt-5'> Ratings :  {parseFloat(vote_average.toFixed(2))}</h3>
                        <h1 className='text-5xl my-2' >{original_title}</h1>
                        <p className='text-lg w-1/2'>{overview}</p>
                        <h3>{release_date}</h3>
                    </div>
                </div>



            </div>
        </>
    )

}

export default MoviePage
