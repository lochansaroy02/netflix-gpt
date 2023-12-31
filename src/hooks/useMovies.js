import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useMovies = () => {

    const movieData = useSelector((store) => store.movie.nowPlaying)
    const dispatch = useDispatch()

    const getMovieData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
        const json = await data?.json();

        dispatch(addMovies(json))

    }


    useEffect(() => {
        !movieData &&  getMovieData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}
export default useMovies;