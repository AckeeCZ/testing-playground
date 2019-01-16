import { all } from 'redux-saga/effects';
import { routingHistory, combineDependenciesHandlers } from '@ackee/chris';

import routingSaga from './routingSaga';

const previousLocationSelector = routingHistory.previousLocationSelectorFactory('history');

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

    yield all([routingSaga(handlers, options), routingSaga(postHandlers, options, previousLocationSelector)]);
}
