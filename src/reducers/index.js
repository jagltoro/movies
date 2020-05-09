import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import movieDetails from './movieDetails';
import similarMovies from './similarMovies';
import movieCast from './movieCast';
import upcomingMovies from './upcomingMovies';
import search from './search';

const rootReducer = combineReducers({
    nowPlaying,
    movieDetails,
    similarMovies,
    movieCast,
    upcomingMovies,
    search
});

export default rootReducer;
