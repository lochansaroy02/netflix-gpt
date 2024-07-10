import React, { useEffect } from 'react'
import { OPTIONS } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addGenre } from '../../utils/movieSlice';

const useMovieGenre = () => {

    const dispatch = useDispatch();

    const getGenre = async () => {
        let response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', OPTIONS)
        let json = await response.json();
        dispatch(addGenre(json))
        
       
    }

    useEffect(() => {
        getGenre();
    }, [])


}

export default useMovieGenre