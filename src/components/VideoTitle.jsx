import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black p-2 px-8 text-lg  rounded-md hover:bg-opacity-60">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-8 text-lg bg-opacity-80 rounded-md mx-2 hover:bg-opacity-60">
          ⏺ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
