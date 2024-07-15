import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
const VideoBackground = () => {

    const movieData = useSelector((store) => store.movie.nowPlaying)

    const trailerData = useSelector((store) => store.movie.trailerVideo)
    const id = useSelector((store)=> store.movie.movieId)
    useTrailer(id)
    return (
        trailerData &&

        (
            <div className=""> 
                {<div className=" md:w-screen  my-0  absolute top-20  bg-black"> 
                    <iframe
                        class=" aspect-video w-screen  "
                        src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=0&loop=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>}
            </div>)

    )
}

export default VideoBackground;
