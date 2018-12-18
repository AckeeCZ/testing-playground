---
to: src/modules/<%= name %>/services/saga.js
---
import {
    sagaEffects,
    api, 
    runSagas,
    config,
} from '../dependencies';

import * as actions from './actions';
import actionTypes from './actionTypes';

function* handleAction(action) {
    try {
        const data = yield api.get(
            config.api.ENDPOINT,
            {
                uriParams: {

                },
            }
        );
        yield sagaEffects.put(actions.setData(data));
    } catch (e) {
        // TODO: handle errors
    }
}

const handlers = {
    [actionTypes.ACTION]: handleAction,
};

export default function* () {
    yield sagaEffects.all([
        runSagas(handlers),
    ]);
}
