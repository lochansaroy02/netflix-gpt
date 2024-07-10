import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from '../../utils/constant';
import { addGenre } from '../../utils/tvSlice';

const useTvGenre = () => {
    const dispatch = useDispatch();

    const getGenre = async () => {
        let response = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', OPTIONS)
        let json = await response.json();
        dispatch(addGenre(json))
    }

   
    useEffect(() => {
        getGenre();
    }, [])
}

export default useTvGenre