import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function movieCast(state = initialState.cast, action) {
    switch (action.type) {
        case types.LOAD_CAST_SUCCESS:
            return Object.assign({},action.cast);

        default:
            return state;
    }
}
