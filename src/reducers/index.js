import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import movieDetails from './movieDetails';

const rootReducer = combineReducers({
    nowPlaying,
    movieDetails,
});

export default rootReducer;
