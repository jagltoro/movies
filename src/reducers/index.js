import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import movieDetails from './movieDetails';
import similarMovies from './similarMovies';
import movieCast from './movieCast';

const rootReducer = combineReducers({
    nowPlaying,
    movieDetails,
    similarMovies,
    movieCast
});

export default rootReducer;
