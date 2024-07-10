import React, { useEffect } from 'react'
import { IMG_CDN, LOGO } from '../utils/constant'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedMovie, addThisMovie } from '../utils/movieSlice'
import CardShimmer from './Shimmer/CardShimmer'


const MovieCard = ({thisMovie}) => {
    const movieData = useSelector((store) => store.movie.nowPlaying);
    const tvData = useSelector((store) => store.tvshow.populer); 
    const dispatch = useDispatch()
    
    const navigate = useNavigate();
    

    
    useEffect(()=>{
        //   dispatch(addSelectedMovie(idArr))  
    },[])
    const openImage = ()=>{
        navigate(`/${thisMovie.id}`);
            
        dispatch(addThisMovie(thisMovie))
        // navigate('/movie');
    }   
    return thisMovie ? (
        <div  className='w-36 md:w-48 rounded-md pr-4'>
            <img onClick={openImage} className='cursor-pointer rounded-md' src={IMG_CDN + thisMovie?.poster_path} alt="error" />
            <h1 className='text-white'> {thisMovie?.title}</h1>
        </div>
       
    ) : (
        <CardShimmer />
    );
}

export default MovieCard
