import React from 'react'
import MovieCard from '../MovieCard'
import useTopRated from '../../hooks/tvSeries/useTopRated'
import { useSelector } from 'react-redux';

const TopRatedTVshows = () => {

  const tvData = useSelector((store) => store.tvshow.topRated); 
  let topRatedShows = tvData?.results;
  useTopRated()
  return (
    <div className='text-white '>

    <div className='flex  '>
        {topRatedShows?.map((movie) => (
            <div >

                <MovieCard key={movie.id} poster_url={movie.poster_path} id={movie.id} title={movie.name} />
            </div>
        ))}
    </div>
</div>
  )
}

export default TopRatedTVshows