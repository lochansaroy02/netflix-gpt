import React, { useEffect } from 'react'
import { IMG_CDN, LOGO } from '../utils/constant'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedMovie } from '../utils/movieSlice'
import CardShimmer from './Shimmer/CardShimmer'



const MovieCard = ({ poster_url, id,title }) => {
    const movieData = useSelector((store) => store.movie.nowPlaying);
    const tvData = useSelector((store) => store.tvshow.populer); 
    const navigate = useNavigate(); 
    const dispatch = useDispatch()

    const IdArr = useSelector((store)=> store.movie.movieId)
    



    
    useEffect(()=>{
        //   dispatch(addSelectedMovie(idArr))  
    },[])
    const openImage = ()=>{
        navigate(`/movie/${id}`);
        dispatch(addSelectedMovie(id))
    }   
    return (movieData  || tvData)? (
        <div className='w-36 md:w-48 rounded-md pr-4'>
            <img onClick={openImage} className='cursor-pointer rounded-md' src={IMG_CDN + poster_url} alt="error" />
            <h1 className='text-white'> {title}</h1>
        </div>
       
    ) : (
        <CardShimmer />
    );
}

export default MovieCard
