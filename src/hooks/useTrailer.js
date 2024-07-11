import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constant";

const useTrailer = () => {
    const thisId = useSelector((store)=> store.movie.movieId)
    const dispatch = useDispatch();
 
    const trailerData = useSelector((store) => store.movie.trailerVideo)
  

    const videoData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + thisId + '/videos?language=en-US', OPTIONS);
        const json = await data.json();
        console.log(json)
        const filterData = json?.results?.filter((el) => el.name === "Official Trailer")
        let trailer = filterData?.length ? filterData?.[0] : json?.results?.[0];
        dispatch(addTrailer(trailer))   
        




    }
    useEffect(() => {
       !trailerData && videoData()
    }, []);


}
export default useTrailer;