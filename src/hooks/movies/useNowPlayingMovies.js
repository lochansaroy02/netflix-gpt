import React from 'react'
import { OPTIONS } from '../../utils/constant';

const useNowPlayingMovies = () => {
 
      
    const getTVdata =  async () =>  {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', OPTIONS);
        const data = await response?.json();
        dispatch(addNowPlayingMovies(data))
        
    }

    useEffect(() => {
        getTVdata();
    }, []);
}

export default useNowPlayingMovies