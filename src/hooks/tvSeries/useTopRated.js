import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "../../utils/constant";
import { addTopRatedShows } from "../../utils/tvSlice";

const useTopRated = () => {

    
    const dispatch = useDispatch();

     const getTVdata =  async () =>  {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', OPTIONS);
        const data = await response?.json();
        dispatch(addTopRatedShows(data))
        
    }

    useEffect(() => {
        getTVdata();
    }, []);
};

export default useTopRated;
