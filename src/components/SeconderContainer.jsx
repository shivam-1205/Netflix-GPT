import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconderContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-36 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.TopRatedMovies} />
          <MovieList title={"Popular "} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.UpComingMovies} />
          <MovieList title={"Discovery"} movies={movies.discoveryMovies} />
        </div>
      </div>
    )
  );
};

export default SeconderContainer;
