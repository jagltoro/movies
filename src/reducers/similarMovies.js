import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loadSimilar(state = initialState.similar, action) {
    switch (action.type) {
        case types.LOAD_SIMILAR_SUCCESS:
            return Object.assign({},action.similar);

        default:
            return state;
    }
}
