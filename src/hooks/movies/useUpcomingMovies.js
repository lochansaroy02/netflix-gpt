import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { OPTIONS } from "../../utils/constant";
import { addMovies } from "../../utils/movieSlice";

const useUpcomingMovies = () => {
    const movieData = useSelector((store) => store.movie.nowPlaying);
    const dispatch = useDispatch();
    const [retryCount, setRetryCount] = useState(0);

    const getMovieData = async () => {
        try {
            const data = await fetch('https://moviesverse1.p.rapidapi.com/upcoming-movies', OPTIONS);
            if (!data.ok) {
                if (data.status === 429 && retryCount < 3) { // Assuming 429 is the status code for rate limiting
                    setRetryCount(retryCount + 1);
                    setTimeout(getMovieData, 2 ** retryCount * 1000); // Exponential backoff
                    return;
                }
                throw new Error('Failed to fetch data');
            }
            const json = await data.json();
            console.log(json);
            dispatch(addMovies(json));
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!movieData) {
            getMovieData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieData]);

    return movieData;
};

export default useUpcomingMovies;
