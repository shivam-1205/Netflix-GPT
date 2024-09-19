import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        PopularMovies: null,
        TopRatedMovies: null


    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.UpComingMovies = action.payload
        },
        addDiscoveryMovies: (state, action) => {
            state.discoveryMovies = action.payload
        },
        addTailer: (state, action) => {
            state.trailerVideo = action.payload
        },
    },
});

export const { addNowPlayingMovies, addTailer, addPopularMovies, addTopRatedMovies, addUpComingMovies, addDiscoveryMovies } = movieSlice.actions;
export default movieSlice.reducer;