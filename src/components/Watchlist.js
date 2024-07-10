import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_CDN } from '../utils/constant';
import { removeWatchlist } from '../utils/movieSlice';

const Watchlist = () => {
    const dispatch = useDispatch();
    const watchlist = useSelector((store) => store.movie.watchlist);

    const handleWatchlist = () => {
        dispatch(removeWatchlist())
    }

    return watchlist ? (
        <div className=''>

            <div className='pt-24 text-white flex   flex-col items-center '>
                <h1 className='text-6xl my-4 '>Watchlist</h1>
{

                watchlist.map((item)=>

                    <div className='flex justify-center  w-10/12 mb-4 '>
                    <div className='flex bg-neutral-800 w-3/4 rounded-lg'>
                        <div className='  rounded-lg '>
                            <img className='  rounded-lg  ' src={IMG_CDN + item.poster_path} alt="" />
                        </div>
                        <div className=' p-4  '>
                            <h1 className='text-2xl mb-4'>{item.title} </h1>
                            <p className='  text-sm    '>{item.overview}</p>
                           

                            <div className='mt-4' >
                                <button className='mr-4 py-2 px-6 rounded-xl text-base font-semibold bg-neutral-100 text-neutral-950'>
                                    Play Now
                                </button>
                                <button onClick={handleWatchlist} className='m text-red-100 bg-red-800 py-2 px-6 rounded-xl text-base font-semibold border border-red-100'>
                                    Remove 
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
                )
                
                
                }




                {/*  */}
            </div>
        </div>
    ) : (
        <div className=' lex flex-col   items-center'>

            <div className='pt-24 text-white flex   flex-col items-center '>
                <h1 className='text-6xl my-4 '>Watchlist</h1>
            <h1 className='text-white text-2xl'> watchlist is empty </h1>
            </div>
        </div>
    )
}

export default Watchlist