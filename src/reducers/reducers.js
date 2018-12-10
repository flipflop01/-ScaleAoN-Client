import {ADD_TASK, ADD_ITEM, NEW_PROJECT} from '../actions/actions';

const initialState = {};

export default (state = initialState, action) => {

    if (action.type === ADD_TASK) {
        return Object.assign({}, state, {});
    }

    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {});
    }

    if (action.type === NEW_PROJECT) {
        return Object.assign({}, state, {});
    }

    return state;
};
