import React from 'react'
import TvShowsRow from './PopulerTVshow';
import { useSelector } from 'react-redux';
import usePopulerShows from '../../hooks/tvSeries/usePopulerShows';
import PopulerTVshow from './PopulerTVshow';
import TopRatedTVshows from './TopRatedTVshows';
import useTrandingShows from '../../hooks/tvSeries/useTrandingShows';
import TrandingTVshows from './TrandingTVshows';

const TvShows = () => {


  return (
    <div className='w-screen overflow-x-hidden'>


      <div className='mx-4 my-8 w-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]'>
      <h1>
        Tranding 
      </h1>
      <TrandingTVshows />
      </div>

      <div className='px-6  mx-4 my-8 w-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]'>
        <h1>Populer</h1>
        <PopulerTVshow />
      </div>
      <div className='mx-4 my-8 w-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600 md:overflow-x-scroll overflow-x-scroll scrollbar-rounded-[100%]'>
    <h1>Top Rated</h1>
        <TopRatedTVshows />
      </div>
      
    </div>

  )
}

export default TvShows