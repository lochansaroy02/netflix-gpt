import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
import useMovies from "../hooks/useMovies";

const VideoBackground = () => {

    const movieData = useSelector((store) => store.movie.nowPlaying)

    const trailerData = useSelector((store) => store.movie.trailerVideo)
    console.log(trailerData)
    const Id = movieData?.results[0]?.id
    useTrailer(Id)

    return (

        trailerData &&
        (<div className="bg-red-300">

            <iframe
                class="w-screen aspect-video  "
                src={`https://www.youtube.com/embed/${trailerData.key}?autoplay=1&mute=1&loop=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            {/* <iframe
                className="w-screen  aspect-video"
                src={"https://www.youtube.com/embed/" + trailerData.key + "?si=znwJRx1Yhgg33eCL&amp;controls=0?autoplay=1&mute=1"}
                // src={"https://www.youtube.com/embed/" + trailerData?.key + "?si=znwJRx1Yhgg33eCL&amp?autoplay=1&mute=1"}
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe> */}
        </div>)
    )
}

export default VideoBackground;
