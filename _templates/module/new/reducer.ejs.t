---
to: src/modules/<%= name %>/services/reducer.js
---
import types from './actionTypes';

const initialState = {
    isFetching: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_DATA:
            return {
                ...state,
                isFetching: true,
            };

        case types.REQUEST_DATA_COMPLETED:
            return {
                ...state,
                isFetching: false,
            };

        case types.SET_DATA:
            return {
                ...state,
            };

        default:
            return state;
    }
}
