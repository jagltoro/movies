import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loadUpcoming(state = initialState.upcomingMovies, action) {
  switch (action.type) {
    case types.LOAD_UPCOMING_MOVIES_SUCCESS:
      return Object.assign({}, action.upcoming);

    default:
      return state;
  }
}
