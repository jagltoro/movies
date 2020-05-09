import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loadSimilar(state = initialState.similarMovies, action) {
  switch (action.type) {
    case types.LOAD_SIMILAR_SUCCESS:
      return Object.assign({}, action.similar);

    default:
      return state;
  }
}
