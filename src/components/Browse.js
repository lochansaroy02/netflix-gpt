import React, { useEffect } from 'react'
import Header from './Navbar'
import Main from './Main'
import VideoBackground from './VideoBackground'
import MoviesSection from './MoviesSection'
import { OPTIONS } from '../utils/constant'
import GptPage from './GptPage'
import { useSelector } from 'react-redux'
import gptSlice from '../utils/gptSlice'
import MainShimmer from './Shimmer/MainShimmer'
import useMovies from '../hooks/movies/usePopulerMovies'


const Browse = () => {


  useMovies();
  const gptState = useSelector((store) => store.gpt.gptState)



  return (
    <div className='flex  flex-col m-0 p-0'>




      <Header />
      {
        gptState ? <GptPage /> : <>
          <Main />
          {/* <VideoBackground /> */}
          <MoviesSection />
        </>
      }



    </div>
  )
}

export default Browse;
