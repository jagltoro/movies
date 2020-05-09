import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function nowPlaying(state = initialState.nowPlaying, action) {
  switch (action.type) {
    case types.LOAD_NOW_MOVIES_SUCCESS:
      return Object.assign({}, action.nowPlaying);

    default:
      return state;
  }
}
