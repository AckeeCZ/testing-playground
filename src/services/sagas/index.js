import { all } from 'redux-saga/effects';

import { saga as localization } from '@ackee/jerome';
import { saga as httpClient } from 'Config/antonio';

import modules from './modules';
import ackeeToolkit from './ackeeToolkit';
import { routeHandlers } from './routing';
import authSaga from './authSaga';

/**
 * Root generator for all application sagas
 */
export default function*() {
  yield all([httpClient(), localization(), modules(), ackeeToolkit(), routeHandlers(), authSaga()]);
}
