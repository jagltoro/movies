import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loadMovieDetails(state = initialState.movies, action) {
    switch (action.type) {
        case types.LOAD_MOVIE_DETAILS_SUCCESS:
            return Object.assign({},action.movies);

        default:
            return state;
    }
}
