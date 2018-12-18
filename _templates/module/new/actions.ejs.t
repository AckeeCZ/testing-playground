---
to: src/modules/<%= name %>/services/actions.js
---
import types from './actionTypes';

export const requestData = () => ({
    type: types.REQUEST_DATA,
});

export const setData = data => ({
    type: types.SET_DATA,
    data,
});
