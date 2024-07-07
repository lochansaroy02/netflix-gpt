import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: 'tvshow',
    initialState: {
        populer: null,
        topRated: null,
        tranding: null
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
    },
});

export const { addPopulerShows,addTopRatedShows,addTrandingShows } = tvSlice.actions;
export default tvSlice.reducer;
