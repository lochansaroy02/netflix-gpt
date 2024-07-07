import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { OPTIONS } from '../../utils/constant';
import { addTrandingShows } from '../../utils/tvSlice';

const useTrandingShows = () => {
    const tvData = useSelector((store) => store.tvshow.populer);
    const dispatch = useDispatch();
    const getTVdata = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', OPTIONS);
        const data = await response?.json();
        dispatch(addTrandingShows(data))

    }

    useEffect(() => {
        getTVdata();
    }, []);
}

export default useTrandingShows;