import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        topRatedMovies: null,
        nowPlaying: null,
        populer: null,

        trailerVideo: null,
        movieId: null,
        backdrop: null,
        topRated: null,
        clickedMovieData: null
    },
    reducers: {

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPopulerMovies: (state, action) => {
            state.populer = action.payload;
        },

        
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addSelectedMovie: (state, action) => {
            state.movieId = action.payload;
        },
        addBackdrop: (state, action) => {
            state.backdrop = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addThisMovie: (state, action) => {
            state.clickedMovieData = action.payload;
        }

    }
})

export const { addMovies, addTrailer, addPopulerMovies,addNowPlayingMovies,addSelectedMovie, addTopRatedMovies,addBackdrop,addTopRated,addThisMovie } = movieSlice.actions;
export default movieSlice.reducer;