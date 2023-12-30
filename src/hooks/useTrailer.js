import { useEffect, useState } from "react";
import { addTrailer } from "../utils/movieSlice"
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constant";

const useTrailer = (id) => {
    const dispatch = useDispatch();




    const videoData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', OPTIONS);
        const json = await data.json();
        const filterData = json?.results?.filter((el) => el.name === "Official Trailer")
        const trailer = filterData?.length ? filterData[0] : json?.results[0];
        dispatch(addTrailer(trailer))


    }
    useEffect(() => {
        videoData()
    }, []);


}
export default useTrailer;