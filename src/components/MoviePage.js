import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constant';
import useBackdrop from '../hooks/useBackdrop';
import useMovies from '../hooks/movies/usePopulerMovies';
import { addThisMovie, addToWatchlist } from '../utils/movieSlice';
import useGenre from '../hooks/useGenre';
import usePopulerShows from '../hooks/tvSeries/usePopulerShows';
import PopulerMovies from './movies/PopulerMovies';
import { useEffect, useMemo } from 'react';

const MoviePage = () => {
    const watchlist = useSelector((store)=> store.movie.watchlist);
    const thisMovie = useSelector((store) => store.movie.clickedMovieData);
    const genreData = useSelector((store) => store.movie.allgenre);
    const backdrop = useSelector((store) => store.movie.backdrop);

    const dispatch = useDispatch();
    console.log(watchlist)
    useGenre();
    usePopulerShows();

    const genreId = thisMovie?.genre_ids || [];

    const handleGenre = (genreData, genreId) => {
        let genreArr = [];
        genreId.map((id) => {
            genreArr.push(genreData?.filter((item) => item?.id === id));
        });
        return genreArr;
    };

    const nestedArray = useMemo(() => handleGenre(genreData, genreId), [genreData, genreId]);

    const removeDuplicatesAndStoreAsObject = (nestedArray) => {
        const flattenedArray = nestedArray.flat();
        const uniqueGenresMap = new Map();
        flattenedArray.forEach(genre => {
            if (genre && !uniqueGenresMap.has(genre.id)) {
                uniqueGenresMap.set(genre.id, genre);
            }
        });
        return Array.from(uniqueGenresMap.values());
    };




    const thisGenre = useMemo(() => removeDuplicatesAndStoreAsObject(nestedArray), [nestedArray]);

    if (!thisMovie) {
        return <div>Loading...</div>;
    }

    const { id, poster_path, vote_average, title, name, overview, release_date, backdrop_path } = thisMovie;

    const handleWatchlist = ()=>{
        dispatch(addToWatchlist(thisMovie))
        console.log("added ")
    }


    return (
        <div className='flex  '>
            <div className='flex md:h-full bg-red-300  mt-20 flex-wrap'>
                <img className='md:w-screen md:fixed fixed h-screen object-cover blur-sm' src={IMG_CDN + backdrop_path} alt="" />
                <div className="fixed inset-0 bg-black opacity-70 md:opacity-60"></div>
            </div>
            <div className='md:pt-28 pt-28 mt-10 justify-center md:p-5 w-screen h-screen md:bg-gradient-to-t md:from-black flex left-0 absolute'>
                <div className='rounded-lg h-fit drop-shadow-xl mx-32'>
                    <img className='rounded-xl' src={IMG_CDN + poster_path} alt="" />
                </div>
                <div className='text-white md:pl-10 md:mb-0 w-full flex flex-col md:items-start items-center'>
                    <h1 className='md:text-6xl text-3xl my-2 px-5 md:mb-8 md:px-6'>{title}</h1>
                    <div className='mb-6'>
                        <ul className='flex'>
                            {thisGenre?.map((item, index) =>
                                (<li key={index} className='px-4 py-2 text-red-100 rounded-full text-md mx-2 bg-red-600'>{item.name}</li>)
                            )}
                        </ul>
                    </div>
                    <p className='md:text-lg md:w-3/4 text-wrap md:px-1 w-fit mx-5 text-left text-sm md:text-md'>{overview}</p>
                    <div className='flex'>
                        <h3 className='md:px-6 mt-4'>🎬 {release_date}</h3>
                        <h3 className='md:text-xl md:px-6 mt-4'>⭐ {parseFloat(vote_average.toFixed(1))}</h3>
                    </div>
                    <div className='flex my-4'>
                        <button className='mx-4 py-4 px-10 rounded-xl text-xl font-semibold bg-neutral-100 text-neutral-950'>
                            Play Now
                        </button>
                        <button onClick={handleWatchlist} className='mx-4 py-4 px-10 rounded-xl text-xl font-semibold border'>
                            + Add to watchlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
