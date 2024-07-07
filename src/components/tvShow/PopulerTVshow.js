import React from 'react'
import { useSelector } from 'react-redux';
import MovieRow from '../MovieRow';
import useTVShows from '../../hooks/tvSeries/usePopulerShows';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../MovieCard';
import usePopulerShows from '../../hooks/tvSeries/usePopulerShows';

const PopulerTVshow = () => {
   
    const tvData = useSelector((store) => store.tvshow.populer); 
    let populerShows = tvData?.results;
    usePopulerShows();
    return (
        <div className='text-white '>

            <div className='flex  '>
                {populerShows?.map((movie) => (
                    <div >
                        <MovieCard key={movie.id} poster_url={movie.poster_path} id={movie.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopulerTVshow;