import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDiscoveryMovies } from '../redux/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useDiscovery = () => {
    //fatch the data From TMDB API and update store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addDiscoveryMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useDiscovery;
