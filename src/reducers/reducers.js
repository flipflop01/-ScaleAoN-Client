import {ADD_TASK, DELETE_TASK, ADD_ITEM, DELETE_ITEM, NEW_PROJECT, DELETE_PROJECT} from '../actions/actions';

const initialState = {};

export default (state = initialState, action) => {

    if (action.type === ADD_TASK) {
        return Object.assign({}, state, {});
    }

    if (action.type === DELETE_TASK) {
        return Object.assign({}, state, {});
    }

    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {});
    }

    if (action.type === DELETE_ITEM) {
        return Object.assign({}, state, {});
    }

    if (action.type === NEW_PROJECT) {
        return Object.assign({}, state, {});
    }

    if (action.type === DELETE_PROJECT) {
        return Object.assign({}, state, {});
    }

    return state;
};
