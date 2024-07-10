import React, { useEffect } from 'react'
import useTvGenre from './tvSeries/useTvGenre';
import useMovieGenre from './movies/useMovieGenre';
import { useDispatch, useSelector } from 'react-redux';
import { addAllGenre } from '../utils/movieSlice';

const useGenre = () => {

    const movieGenreData = useSelector((store) => store.movie.genre) || {};
    const tvGenreData = useSelector((store) => store.tvshow.genre) || {};
    const dispatch = useDispatch();
    useMovieGenre();
    useTvGenre();
    const getGenre = ()=>{
        const allGenreData = [
            ...(movieGenreData.genres || []),
            ...(tvGenreData.genres || [])
        ];
        dispatch(addAllGenre(allGenreData));
    }
  
    useEffect(() => {
       getGenre()
    }, []);
};


export default useGenre;