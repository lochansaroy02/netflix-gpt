import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
const VideoBackground = () => {

    const movieData = useSelector((store) => store.movie.nowPlaying)

    const trailerData = useSelector((store) => store.movie.trailerVideo)
    console.log(trailerData)
    const Id = movieData?.results[0]?.id
    console.log(Id)
    useTrailer(Id)
    console.log(movieData)
    return (
        trailerData &&

      (  <div>
            {<div className="bg-red-300">
                <iframe
                    class="w-screen aspect-video  "
                    src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=1&loop=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>}
        </div>)

    )
}

export default VideoBackground;
