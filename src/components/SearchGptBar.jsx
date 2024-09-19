import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../redux/gptSlice";
import { API_OPTIONS, OPEN_AI_KEY } from "../utils/constants";
import language from "../utils/languageConstants";

const SearchGptBar = () => {
  const langKey = useSelector((store) => store.language.lang);

  const searchText = useRef(null);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const dispatch = useDispatch();

  // Function to search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();

      return json.results;
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  const handleGptSearchClick = async () => {
    setLoadingBtn(true);

    try {
      const openAi = new GoogleGenerativeAI(OPEN_AI_KEY);
      const model = openAi.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Act as a movie recommendation system suggest some movies for the query " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gaya, All Is Well, RRR and do not use any sign";

      const result = await model.generateContent(prompt);

      if (!result.response.text()) return alert("Something is wrong");

      // Split the result into an array of movie names
      const gptMovie = result.response.text().split(",");

      // Search each movie in TMDB API
      const promiseArray = gptMovie.map((movie) =>
        searchMovieTMDB(movie.trim())
      );
      const tmdbResult = await Promise.all(promiseArray);

      // Dispatch results to Redux store
      dispatch(
        addGptMovieResult({ movieName: gptMovie, movieResults: tmdbResult })
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request");
    } finally {
      setLoadingBtn(false);
    }
  };

  return (
    <div className="pt-44 flex justify-center">
      <form
        className="rounded-md w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[langKey].placeholders}
          className="p-2 m-2 rounded-md col-span-9"
        />

        <button
          className={`col-span-3 m-2 px-4 ${
            loadingBtn ? "bg-red-800" : "bg-red-700 hover:bg-red-600"
          } text-white rounded-lg`}
          onClick={handleGptSearchClick}
          disabled={loadingBtn}
        >
          {loadingBtn ? (
            <div className="w-5 h-5 border-t border-gray-300 border-solid rounded-full animate-spin"></div>
          ) : (
            language[langKey].search
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchGptBar;
