import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRated } from '../utils/movieSlice';

const useTopRated = () => {
    const dispatch = useDispatch()
    const getPopulerMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS);
        const json = await data?.json();
        dispatch(addTopRated(json.results))
        console.log(json.results)

    }

    useEffect(() => {
        getPopulerMovies()
    }, []);


}



export default useTopRated;
