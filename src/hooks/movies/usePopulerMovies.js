import React, { useEffect } from 'react'
import { addPopulerMovies } from '../../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../../utils/constant';

const usePopulerMovies = () => {
    const dispatch = useDispatch();
    const getTVdata =  async () =>  {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS);
        const data = await response?.json();
        dispatch(addPopulerMovies(data))
    }

    useEffect(() => {
        getTVdata();
    }, []);



}

export default usePopulerMovies