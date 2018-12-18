import { all } from 'redux-saga/effects';
import { previousLocationSelectorFactory } from 'ackee-frontend-toolkit/lib/modules/routing-history';
import { combineDependenciesHandlers } from 'ackee-frontend-toolkit/es/sagas/helpers';

import routingSaga from './routingSaga';

const previousLocationSelector = previousLocationSelectorFactory('history');

// eslint-disable-next-line
function* homeSaga() {
    console.log('Root route handler was triggered.');
}

const routingHandlers = {
    '/': homeSaga,
};

const handlers = combineDependenciesHandlers(routingHandlers);

const postHandlers = combineDependenciesHandlers();

export default function*() {
    const options = {
        skipEqualLocations: true,
        initialTrigger: false,
    };

    yield all([
        routingSaga(handlers, options),
        routingSaga(postHandlers, options, previousLocationSelector),
    ]);
}
