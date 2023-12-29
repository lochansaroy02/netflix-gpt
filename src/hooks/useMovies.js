import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constant";


const useMovies = () => {

    const dispatch = useDispatch()

    const getMovieData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
        const json = await data.json();
        console.log(json)
        dispatch(addMovies(json))
    }

    useEffect(() => {
        getMovieData()

    }, []);
}
export default useMovies;