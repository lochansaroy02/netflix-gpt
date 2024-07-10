import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        topRatedMovies: null,
        nowPlaying: null,
        populer: null,
        genre: null,
        allgenre: null,
        
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
        addGenre: (state, action) => {
            state.genre = action.payload;
        },
        addAllGenre: (state, action) => {
            state.allgenre = action.payload;
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

export const { addMovies, addTrailer, addGenre, addPopulerMovies,addNowPlayingMovies,addSelectedMovie, addTopRatedMovies,addBackdrop,addTopRated,addThisMovie,addAllGenre } = movieSlice.actions;
export default movieSlice.reducer;