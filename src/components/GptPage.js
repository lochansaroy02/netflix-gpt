import React from 'react'
import GptSearch from './GptSearch'
import GptResults from './GptResults'
import { useSelector } from 'react-redux'


const GptPage = () => {

  const movieName = useSelector((store) => store.gpt.movieName)
  return (


    <div className=' w-full h-full bg-blue-300'>
      <GptSearch/>
      {movieName && <GptResults/>}
    </div>
  )
}

export default GptPage
