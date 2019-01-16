import { take } from 'redux-saga/effects';
import { routingSelector, runRouteDependencies } from '@ackee/chris';
import { LOCATION_CHANGE } from 'connected-react-router';

import { shouldRunRouteActions } from '../utilities';

export default function* routingSaga(handlers, customOptions = {}, selector = routingSelector) {
    const options = {
        skipEqualLocations: false,
        initialTrigger: true,
        ...customOptions,
    };

    // initial trigger
    if (options.initialTrigger) {
        yield runRouteDependencies(handlers, selector);
    }

    let prevAction = {
        payload: {},
    };

    while (true) {
        const action = yield take(LOCATION_CHANGE);

        if (shouldRunRouteActions(prevAction, action, options.skipEqualLocations)) {
            yield runRouteDependencies(handlers, selector);
        }

        prevAction = action;
    }
}
