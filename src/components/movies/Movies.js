import React from 'react'
import NowPlayingMovies from './NowPlayingMovies'
import PopulerMovies from './PopulerMovies'
import TopRatedMovies from './TopRatedMovies'

const Movies = () => {
  return (
    <div className='md:mt-[50-%]'>
        <div className='mx-4 md:my-8 w-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]'>
        <h1 className='text-lg font-semibold  p-2 md:p-4  text-white'>Now Playing</h1>
        <NowPlayingMovies/>

        </div>
        <div className='mx-4 md:my-8 w-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]'>
        <h1 className='text-lg font-semibold p-2  md:p-4  text-white '>Populer </h1>
        <PopulerMovies/>

        </div>
        <div className='mx-4 md:my-8 w-full scrollbar-thin scrollbar-thumb-neutral-800 text-white scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]'>
        <h1 className='text-lg font-semibold p-2  md:p-4 '> Top Rated</h1>
        <TopRatedMovies/>

        </div>
    </div>
  )
}

export default Movies