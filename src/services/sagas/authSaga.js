import { all } from 'redux-saga/effects';
import { withAuthSession } from '@ackee/petrus';

import { authRouteHandlers } from './routing';

// NOTE:
// this saga will be running only if user is authorized,
// and canceled on logout
function* authSaga() {
  yield all([authRouteHandlers()]);
}

export default function*() {
  yield withAuthSession(authSaga);
}
