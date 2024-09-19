import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../redux/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
    //fatch the data From TMDB API and update store
    const dispatch = useDispatch();

    const nowPopularMovies = useSelector(store => store.movies.PopularMovies)

    const getNowPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        !nowPopularMovies && getNowPopularMovies();
    }, []);
}

export default usePopularMovies;
