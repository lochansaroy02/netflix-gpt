import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlaying: null,
        trailerVideo: null,
        movieId: null,
        backdrop : null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addSelectedMovie: (state,action)=>{
            state.movieId = action.payload;
        },
        addBackdrop: (state,action) =>{
            state.backdrop = action.payload;
        }
    }
})

export const { addMovies, addTrailer,addSelectedMovie,addBackdrop } = movieSlice.actions;
export default movieSlice.reducer;