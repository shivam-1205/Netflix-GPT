import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../redux/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
    //fatch the data From TMDB API and update store
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.TopRatedMovies)

    const getNowTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topRatedMovies && getNowTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;
