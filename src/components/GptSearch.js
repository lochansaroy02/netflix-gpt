import React, { useRef } from 'react'
import { lang } from '../utils/langConst'
import { useDispatch, useSelector } from 'react-redux'
import { BACKGROUND_IMAGE, OPTIONS } from '../utils/constant'
import { MdSearch } from "react-icons/md";
import openAiResponse from '../utils/openAi';
import { pushMovieName, pushMoviesList, } from '../utils/gptSlice';

const GptSearch = () => {
  const dispatch = useDispatch(null);





  const searchText = useRef(null);

  const getSearchedMovies = async (movie) => {
    const data = (await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", OPTIONS));
    const json = await data?.json();
    return json;
  }


  const handleGPTClick = async () => {

    const gptQuary = "act as a movie recommendation system and suggest me some movie for the quary:" + searchText.current.value + ".only give  me 5 top results, comma saprated, here is the example: movie1,movie2,movie3,movie4...do not write here is the result and all dont add numbering and year "
    const result = await openAiResponse(gptQuary)
    const movieArray = result?.[0]?.message?.content?.split(",");
    
    if (movieArray.length > 1) {
      dispatch(pushMovieName(movieArray))
    }
    
    const promiseArray = movieArray?.map((movie) => getSearchedMovies(movie))
    const finalResult = await Promise?.all(promiseArray)

    dispatch(pushMoviesList(finalResult))



  }

  const langKey = useSelector((store) => store.config.lang)


  return (
    <div className=' h-full'>
      <div className=' w-fit  bg-black   '>
        <img src={BACKGROUND_IMAGE} alt="" className='fixed top-0, left-0, mt-16 opacity-50 bg-black' />
      </div>

      <form className='flex flex-col justify-center items-center z-20   mt-20   fixed w-full top-20 '
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >

        <input ref={searchText} className='m-2 p-4 h-10 text-white bg-neutral-800 rounded-md w-1/2' type="text" placeholder={lang[langKey].placeHolder} />
        <button onClick={handleGPTClick} className='bg-red-600  flex items-center gap-2  py-2 px-4 rounded-lg'> <MdSearch /> {lang[langKey].search}</button>


      </form>
    </div>
  )
}

export default GptSearch
