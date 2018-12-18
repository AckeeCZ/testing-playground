import { take } from 'redux-saga/effects';
import { runRouteActions } from 'ackee-frontend-toolkit/es/sagas/routing';
import { routingSelector } from 'ackee-frontend-toolkit/es/selectors';
import { LOCATION_CHANGE } from 'connected-react-router';

import { shouldRunRouteActions } from '../utilities';

export default function* routingSaga(
    handlers,
    customOptions = {},
    selector = routingSelector,
) {
    const options = {
        skipEqualLocations: false,
        initialTrigger: true,
        ...customOptions,
    };

    // initial trigger
    if (options.initialTrigger) {
        yield runRouteActions(handlers, selector);
    }

    let prevAction = {
        payload: {},
    };

    while (true) {
        const action = yield take(LOCATION_CHANGE);

        if (
            shouldRunRouteActions(
                prevAction,
                action,
                options.skipEqualLocations,
            )
        ) {
            yield runRouteActions(handlers, selector);
        }

        prevAction = action;
    }
}
