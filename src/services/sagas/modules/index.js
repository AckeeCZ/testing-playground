import { all } from 'redux-saga/effects';

import { saga as auth } from 'Modules/auth';

export default function* modulesSaga() {
  yield all([auth()]);
}
