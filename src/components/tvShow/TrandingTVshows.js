import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import useTrandingShows from '../../hooks/tvSeries/useTrandingShows';

const TrandingTVshows = () => {

    const tvData = useSelector((store) => store.tvshow.tranding);
    let trandingShows = tvData?.results;
    useTrandingShows();
    return (
        <div className='text-white '>

        <div className='flex  '>
            {trandingShows?.map((movie) => (
                <div >
    
                    <MovieCard key={movie.id} poster_url={movie.poster_path} id={movie.id} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrandingTVshows;