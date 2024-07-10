import React from 'react'
import useNowPlayingMovies from './movies/useNowPlayingMovies';
import usePopulerMovies from './movies/usePopulerMovies';
import useTopRatedMovies from './movies/useTopRatedMovies';
import usePopulerShows from './tvSeries/usePopulerShows';
import useTopRated from './tvSeries/useTopRated';
import useTrandingShows from './tvSeries/useTrandingShows';
import { useDispatch, useSelector } from 'react-redux';
import { addAllData } from '../utils/tvSlice';

const useAllData = () => {
    const dispatch = useDispatch();
    useNowPlayingMovies();
    let nowplaying = useSelector((store) => store.movie.nowPlaying);
    usePopulerMovies();
    let populermovie = useSelector((store) => store.movie.populer);
    useTopRatedMovies();
    let topratedmovie = useSelector((store) => store.movie.topRatedMovies);

    let movieData = [...populermovie?.results, ...nowplaying?.results, ...topratedmovie?.results]

    usePopulerShows();
    let populershow = useSelector((store) => store.tvshow.populer);
    useTopRated();
    let topratedshow = useSelector((store) => store.tvshow.topRated);
    useTrandingShows();
    let trandingshow = useSelector((store) => store.tvshow.tranding);

    
    let tvData = [...populershow?.results, ...topratedshow?.results, ...trandingshow?.results]
    let allData = [...movieData, ...tvData]
    dispatch(addAllData(allData))

}

export default useAllData