import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
const VideoBackground = () => {

    const movieData = useSelector((store) => store.movie.nowPlaying)

    const trailerData = useSelector((store) => store.movie.trailerVideo)
    const Id = movieData?.results[0]?.id
    useTrailer(Id)
    return (
        trailerData &&

        (


            <div className="">
                {<div className="w-screen  my-0  bg-black   ">
                    <iframe
                        class=" aspect-video w-screen "
                        src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=1&loop=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>}
            </div>)

    )
}

export default VideoBackground;
