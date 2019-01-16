import { all } from 'redux-saga/effects';

import { saga as localization } from '@ackee/jerome';
import { saga as httpClient } from 'Config/antonio';
import { submitFormSaga as formSaga } from '@ackee/mateus';
import { routingHistory } from '@ackee/chris';

import modules from './modules';
import { routeHandlers } from './routing';
import authSaga from './authSaga';

/**
 * Root generator for all application sagas
 */
export default function*() {
    yield all([
        httpClient(),
        localization(),
        modules(),
        formSaga(),
        routingHistory.saga(),
        routeHandlers(),
        authSaga(),
    ]);
}
