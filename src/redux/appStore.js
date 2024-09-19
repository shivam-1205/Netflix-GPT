import { configureStore } from "@reduxjs/toolkit";
import gptReducer from "../redux/gptSlice";
import langReducer from "../redux/langSlice";
import movieReducer from "../redux/movieSlice";
import userReducer from "../redux/userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        language: langReducer,
    },
});
export default appStore;
