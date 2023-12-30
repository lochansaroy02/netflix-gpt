import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = (poster_url) => {
    return (
        <div className='w-36 md:w-48 rounded-md pr-4'>
            <img className='rounded-md' src={IMG_CDN + poster_url.poster_path} alt="error" />
        </div>
    )
}

export default MovieCard
