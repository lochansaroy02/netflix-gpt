import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: null,
        trailerVideo: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addMovies,addTrailer } = movieSlice.actions;
export default movieSlice.reducer;