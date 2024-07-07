import React, { useEffect } from 'react'
import { OPTIONS } from '../../utils/constant';
import { addNowPlayingMovies } from '../../utils/movieSlice';
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getTVdata =  async () =>  {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS);
        const data = await response?.json();
        dispatch(addNowPlayingMovies(data))
    }

    useEffect(() => {
        getTVdata();
    }, []);
}

export default useNowPlayingMovies