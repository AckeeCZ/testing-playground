---
to: src/modules/<%= name %>/services/actionTypes.js
---
import { createType } from '../dependencies';

export default {
    ...createType('REQUEST_DATA'),
    SET_DATA: 'SET_DATA',
};
