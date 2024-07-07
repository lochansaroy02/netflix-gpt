import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "../../utils/constant";
import { addPopulerShows } from "../../utils/tvSlice";

const usePopulerShows = () => {
    const tvData = useSelector((store) => store.tvshow.populer); 
    const dispatch = useDispatch();
     const getTVdata =  async () =>  {
        const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', OPTIONS);
        const data = await response?.json();
        
        dispatch(addPopulerShows(data))
        
    }

    useEffect(() => {
        getTVdata();
    }, []);
};

export default usePopulerShows;
