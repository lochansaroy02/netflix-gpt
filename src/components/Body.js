import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse';
import MoviePage from './MoviePage';
import TvShows from './tvShow/TvShows';
import MoviesSection from './MoviesSection';
import Header from './Navbar';
import useTopRatedMovies from '../hooks/movies/useTopRatedMovies';
import TopRatedMovies from './movies/TopRatedMovies';
import PopulerMovies from './movies/PopulerMovies';
import Movies from './movies/Movies';
import CardShimmer from './Shimmer/CardShimmer';
import { useSelector } from 'react-redux';
import useAllData from '../hooks/useAllData';
import useMovieGenre from '../hooks/movies/useMovieGenre';
import useTvGenre from '../hooks/tvSeries/useTvGenre';
import useGenre from '../hooks/useGenre';
import usePopulerMovies from '../hooks/movies/usePopulerMovies';
import MovieCard from './MovieCard';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Watchlist from './Watchlist';


const Body = () => {
    const thisMovie = useSelector((store)=> store.movie.clickedMovieData)
    return (
      <>
      
      <Header />
 
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/:id" element={<MoviePage />} />
          <Route path="/watchlist" element={<Watchlist/>} />
        </Routes> 
     
      </>
    )
}

export default Body;
