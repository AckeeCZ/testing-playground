import { all } from 'redux-saga/effects';

import { handleSubmitFormSaga } from 'ackee-frontend-toolkit/es/modules/forms';
import { saga as routingHistory } from 'ackee-frontend-toolkit/lib/modules/routing-history';

export default function* ackeeToolkit() {
    yield all([handleSubmitFormSaga(), routingHistory()]);
}
