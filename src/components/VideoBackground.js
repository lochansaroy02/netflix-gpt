import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = () => {

    const movieData = useSelector((store) => store.movie.movies)
    const trailerData = useSelector((store) => store.movie.trailerVideo)
    const { id } = movieData?.results[6]  
    useTrailer(id)







    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + trailerData.key + "?si=znwJRx1Yhgg33eCL&amp;controls=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    )
}

export default VideoBackground;
