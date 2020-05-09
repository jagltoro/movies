import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function search(state = initialState.search, action) {
  switch (action.type) {
    case types.SEARCH_MOVIE_SUCCESS:
      return Object.assign({}, action.search);

    default:
      return state;
  }
}
