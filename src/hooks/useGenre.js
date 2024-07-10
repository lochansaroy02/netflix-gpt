import React, { useEffect } from 'react'
import useTvGenre from './tvSeries/useTvGenre';
import useMovieGenre from './movies/useMovieGenre';
import { useDispatch, useSelector } from 'react-redux';
import { addAllGenre } from '../utils/movieSlice';

const useGenre = () => {
    useMovieGenre();
    useTvGenre();

    const dispatch = useDispatch();
    
    const movieGenreData = useSelector((store) => store.movie.genre) || {};
    const tvGenreData = useSelector((store) => store.tvshow.genre) || {};

    const allGenreData = [
        ...(movieGenreData.genres || []),
        ...(tvGenreData.genres || [])
    ];

    useEffect(() => {
        dispatch(addAllGenre(allGenreData));
    }, [dispatch, movieGenreData, tvGenreData]);
};


export default useGenre;