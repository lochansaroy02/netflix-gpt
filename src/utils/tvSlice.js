import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: 'tvshow',
    initialState: {
        populer: null,
        topRated: null,
        tranding: null,
        allData : null,
        genre:null
    },
    reducers: {
        addPopulerShows: (state, action) => {
            state.populer = action.payload;
        },
        addTopRatedShows: (state, action) => {
            state.topRated = action.payload;
        },
        addTrandingShows: (state, action) => {
            state.tranding = action.payload;
        },
        addAllData: (state, action) => {
            state.allData = action.payload;
        },
        addGenre: (state, action) => {
            state.genre = action.payload;
        },
    },
});

export const { addPopulerShows,addTopRatedShows,addTrandingShows,addAllData,addGenre } = tvSlice.actions;
export default tvSlice.reducer;
