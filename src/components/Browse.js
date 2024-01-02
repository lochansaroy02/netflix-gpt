import React, { useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import VideoBackground from './VideoBackground'
import MoviesSection from './MoviesSection'
import { OPTIONS } from '../utils/constant'
import GptPage from './GptPage'
import { useSelector } from 'react-redux'
import gptSlice from '../utils/gptSlice'
import MainShimmer from './Shimmer/MainShimmer'
import useMovies from '../hooks/useMovies'


const Browse = () => {


   useMovies();
  const gptState = useSelector((store) => store.gpt.gptState)
 

    console.log(process.env.REACT_APP)


  return (
    <div className='flex bg-black flex-col m-0 p-0'>

  


      <Header />
      {
        gptState ?  <GptPage/> :  <>
        <Main/> 
        
        <VideoBackground/>
        <MoviesSection/>
        </>
      }
      
      
      
    </div>
  )
}

export default Browse;
