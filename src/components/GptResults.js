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
        (
        
        
        <div className='flex  flex-col overflow-scroll  md:overflow-y-scroll items-center w-screen md:h-screen h-screen top-[30%]   md:p-10   fixed'>

            
            <div className='flex items-center   rounded-xl   justify-center flex-wrap md:w-fit mt-5 h-fit'>
                {movieName?.map((movie) =>
                    <h1 className='px-3  py-1 md:py-1 bg-neutral-700 text-white rounded-md text-sm  md:text-lg my-2 md:my-4 mx-2 '>{movie}</h1>)}
            </div >
            {<div className='text-white justify-center  gap-10 flex flex-wrap md:px-36 py-10   w-screen h-full md:mt-5 '>
                {posterArr?.map((item) => {
                    if (item) {
                        return (
                            <div key={item}>
                                <img className='md:w-52 w-36 rounded-lg' src={IMG_CDN + item} alt="error" />
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
