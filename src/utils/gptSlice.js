import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptState: false,
        movieName: null,
        moviesList: null
    },
    reducers: {
        toggleGPTState: (state) => {
            state.gptState = !state.gptState
        },
        pushMoviesList: (state, action) => {
            state.moviesList = action.payload;

        },
        pushMovieName: (state, action) => {
            // movie name
            state.movieName = action.payload;

        }
    }
})

export const { toggleGPTState, pushMovieName,pushMoviesList } = gptSlice.actions;
export default gptSlice.reducer; 
