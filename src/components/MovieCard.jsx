import React from "react";
import { IMG_CON_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CON_URL + posterPath} alt="movie Card" />
    </div>
  );
};

export default MovieCard;
