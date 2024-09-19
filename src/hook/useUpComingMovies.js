import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpComingMovies } from '../redux/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpComingMovies = () => {
    //fatch the data From TMDB API and update store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addUpComingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useUpComingMovies;
