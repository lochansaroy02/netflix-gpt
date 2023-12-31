import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constant';
import useBackdrop from '../hooks/useBackdrop';
import useMovies from '../hooks/useMovies';
import { addThisMovie } from '../utils/movieSlice';
import Header from './Header';

const MoviePage = () => {
    const dispatch = useDispatch()
    useMovies()
    const movieData = useSelector((store) => store.movie.nowPlaying)
    const topRated = useSelector((store) => store.movie.topRated);
    const selectedMovie = useSelector((store) => store.movie.clickedMovieData);
    const movieArr = movieData.results;


    const movieId = useSelector((store) => store.movie.movieId);

    const populer = movieArr.filter((movie) => movie.id === movieId)
    const toprated = topRated.filter((movie) => movie.id === movieId)



    const populerMovies = populer?.[0];
    const topRatedMovies = toprated?.[0];
    const { id, poster_path, vote_average,title, overview, release_date } = selectedMovie  ?? {};


    if (populerMovies === undefined) {  
        dispatch(addThisMovie(topRatedMovies))


    }
    if (topRatedMovies === undefined) {
        dispatch(addThisMovie(populerMovies))


    }


    useBackdrop(id)
    const backdrop = useSelector((store) => store.movie.backdrop);
    const backdropArr = backdrop?.backdrops;




    return ( selectedMovie  &&  movieData &&  (

        <>
            <div className=''>

                <div className='flex md:h-full  flex-wrap bg-black '>
                    {
                        <img className='md:w-screen  md:fixed fixed h-screen object-cover blur-sm ' src={IMG_CDN + backdropArr?.[0].file_path} alt="" />
                    }
                    <div className="fixed   inset-0 bg-black opacity-70 md:opacity-70"></div>
                </div>


                <div className='md:pt-20 pt-14   md:p-5 w-screen h-screen    md:bg-gradient-to-r md:from-black    left-0 absolute' >
                    <div className=' flex w-screen md:justify-start justify-center'>
                        <img className='md:w-56 w-48 mx-20' src={IMG_CDN + poster_path} alt="" />
                    </div>
                    <div className='text-white md:pl-10 md:mb-0   w-full  flex flex-col md:items-start items-center '>
                        <h3 className='md:text-xl  md:px-6 mt-5'> Ratings :  {parseFloat(vote_average.toFixed(2))}</h3>
                        <h1 className='md:text-5xl text-3xl my-2 px-5  md:px-6' >{title}</h1>
                        <p className='md:text-lg md:w-1/2 md:px-1  w-fit mx-5 text-left text-sm md:text-md '>{overview}</p>
                        <h3 className='md:px-6 mt-4'> Release Date: {release_date}</h3>
                    </div>
                </div>



            </div>





        </>

        ))

}

export default MoviePage
