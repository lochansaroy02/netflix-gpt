import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse';
import MoviePage from './MoviePage';
import TvShows from './tvShow/TvShows';
import MoviesSection from './MoviesSection';
import Header from './Navbar';
import useTopRatedMovies from '../hooks/movies/useTopRatedMovies';
import TopRatedMovies from './movies/TopRatedMovies';
import NowPlayingMovies from './movies/NowPlayingMovies';
import PopulerMovies from './movies/PopulerMovies';
import Movies from './movies/Movies';
import CardShimmer from './Shimmer/CardShimmer';
import { useSelector } from 'react-redux';
import useAllData from '../hooks/useAllData';
import useMovieGenre from '../hooks/movies/useMovieGenre';
import useTvGenre from '../hooks/tvSeries/useTvGenre';
import useGenre from '../hooks/useGenre';


const Body = () => {

    // const AppRouter = createBrowserRouter([


    //     {
    //         path: '/',
    //         element: <Login />
    //     },
    //     {
    //         path: '/login',
    //         element: <Login />
    //     },
    //     {
    //         path: '/browse',
    //         element: <Browse />
    //     },
    //     {
    //         path: '/movie/:id',
    //         element: <MoviePage/>
    //     }
    // ])


    

    

    return (
            <div className='text-white'>
                
            </div>
        // <RouterProvider router={AppRouter} />
    )
}

export default Body;
