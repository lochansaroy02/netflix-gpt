import React, { useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import VideoBackground from './VideoBackground'
import MoviesSection from './MoviesSection'
import { OPTIONS } from '../utils/constant'


const Browse = () => {

  const getMovieData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
    const json = await data.json();
    console.log(json);


  }

  useEffect(() => {
    getMovieData()
  }, []);




  return (
    <div  className='flex bg-black flex-col m-0 p-0'>
      <Header />
      <Main />
      <VideoBackground />
      <MoviesSection />
   

    </div>
  )
}

export default Browse
