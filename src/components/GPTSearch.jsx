import React from "react";
import { BG_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import SearchGptBar from "./SearchGptBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMG_URL} alt="logo" />
      </div>
      <SearchGptBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
