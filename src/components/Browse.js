import React, { useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import VideoBackground from './VideoBackground'
import MoviesSection from './MoviesSection'
import { OPTIONS } from '../utils/constant'
import GptPage from './GptPage'
import { useSelector } from 'react-redux'
import gptSlice from '../utils/gptSlice'


const Browse = () => {



  const gptState = useSelector((store)=> store.gpt.gptState)

  
  
  return (
    <div  className='flex bg-black flex-col m-0 p-0'>
    <Header />

     { !gptState ? <GptPage/> : <>
      <Main />
      
      <VideoBackground />
      <MoviesSection />
      
      </>}
     
      

    </div>
  )
}

export default Browse
