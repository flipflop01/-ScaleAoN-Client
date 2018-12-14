import {ADD_TASK, DELETE_TASK, ADD_ITEM, DELETE_ITEM, ADD_PROJECT, DELETE_PROJECT} from '../actions/actions';

const initialState = {
    projects: [
        {title: "HELKON100"},
        {title: "EZ460-EQ"},
        {title: "FJ110C"}
    ]
};

export const aonReducer = (state=initialState, action) => {
    if (action.type === ADD_PROJECT) {
        return Object.assign({}, state, {
            projects: [...state.projects, {
                title: action.title
            }]
        });
    }
    else if (action.type === ADD_ITEM) {
        let projects = state.projects.map((project, index) => {
            if (index !== action.projectIndex) {
                return project;
            }
            return Object.assign({}, project, {
                items: [...project.items, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            projects
        });
    }
    return state;
};
