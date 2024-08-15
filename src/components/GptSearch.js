import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useRef } from 'react';
import { MdSearch } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { OPTIONS } from '.././utils/constant';
import { pushMovieName, pushMoviesList, } from '../utils/gptSlice';



const GptSearch = () => {
  const API = "AIzaSyBMRn1wDtDGaJY6zTQ-uptwEIsuros_b0k"
  // fix process.env
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


  const dispatch = useDispatch(null);







  const searchText = useRef(null);

  const getSearchedMovies = async (movie) => {
    const data = (await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", OPTIONS));
    const json = await data?.json();
    return json;
  }




  const handleAISearch = async () => {
    const prompt = `act as a movie recommendation system and suggest me some movie for the quary: ${searchText.current.value}.only give  me 10 top results, comma separated, here is the example: movie1,movie2,movie3,movie4...do not write here is the result and all do not add numbering and year`;
    const result = await model.generateContent(prompt);
    const textResult = result.response.text()
    const movieArray = textResult.split(",");

    if (movieArray.length > 1) {
      dispatch(pushMovieName(movieArray))
    }
    const promiseArray = movieArray?.map((movie) => getSearchedMovies(movie))
    const finalResult = await Promise?.all(promiseArray)

    dispatch(pushMoviesList(finalResult))

  }

  return (

    <div className=' h-fit  '>
      <form className='flex flex-col justify-center items-center z-20  mt-20   fixed w-full top-20 '
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >

        <input ref={searchText} className='m-2 p-4 h-10 text-white bg-zinc-700  rounded-md w-3/4 md:w-1/2' type="text" />
        <button onClick={handleAISearch} className='bg-red-600  flex items-center gap-2  py-2 px-4 rounded-lg'> <MdSearch /> { }</button>
      </form>
    </div>
  )
}

export default GptSearch
