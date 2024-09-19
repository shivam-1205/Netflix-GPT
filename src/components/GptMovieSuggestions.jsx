import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);

  if (!movieName) return null; //simmer ui

  return (
    <div className="p-4 m-5 bg-black bg-opacity-90 text-white">
      <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
