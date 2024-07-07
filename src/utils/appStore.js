import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import movieReducer from '../utils/movieSlice';
import gptReducer from '../utils/gptSlice';
import configReducer from '../utils/configSlice';
import tvReducer from '../utils/tvSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        config: configReducer,
        tvshow: tvReducer, // Ensure this matches the name used in the slice
    },
});

export default appStore;
