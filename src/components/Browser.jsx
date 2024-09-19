import { useSelector } from "react-redux";
import useDiscovery from "../hook/useDiscovery";
import useNowPlayMovies from "../hook/useNowPlayMovies";
import usePopularMovies from "../hook/usePopularMovies";
import useTopRatedMovies from "../hook/useTopRatedMovies";
import useUpComingMovies from "../hook/useUpComingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderContainer from "./SeconderContainer";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.ShowGptSearch);
  useNowPlayMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useDiscovery();

  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SeconderContainer />
        </>
      )}

      {/* 

      mainContainer
        - videoBackground
        - videoTitle
      SeconderContainer
         - movieList * n
         - card *n

      
      */}
    </div>
  );
};

export default Browser;
