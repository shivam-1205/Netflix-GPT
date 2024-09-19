import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        ShowGptSearch: false,
        movieName: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.ShowGptSearch = !state.ShowGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieName, movieResults } = action.payload;
            state.movieName = movieName
            state.movieResults = movieResults;
        }
    },
});

export const { toggleGptSearch, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;