import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constant';


const GptResults = () => {
    const movieName = useSelector((store) => store.gpt.movieName)
    const movieResult = useSelector((store) => store.gpt.moviesList)
    const Movies = movieResult?.flat()
    const arr = Movies?.map((items) => items?.results.map((item) => item.poster_path
    ))
    const posterArr = arr?.flat()



    return (movieName &&
        (<div className='flex flex-col items-center w-screen h-screen top-[30%]   p-10   fixed'>

            
            <div className='flex  items-center   flex-wrap w-fit h-fit'>
                {movieName?.map((movie) =>
                    <h1 className='px-3 py-1 bg-neutral-800 text-white rounded-md text-lg  my-4 mx-2 '>{movie}</h1>)}
            </div >
            {<div className='text-white  gap-10 flex flex-wrap px-36 py-10   w-screen h-full mt-5 overflow-scroll'>
                {posterArr?.map((item) => {
                    if (item) {
                        return (
                            <div key={item}>
                                <img className='w-52 rounded-lg' src={IMG_CDN + item} alt="error" />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div> }
        </div>)
    )
}

export default GptResults;
