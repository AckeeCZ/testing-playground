import { Petrus, sagaEffects } from 'Modules/auth/dependencies';
import types from '../actionTypes';

const { put, take, takeEvery } = sagaEffects;

function* handleLoginForm(action) {
    yield action.startSubmit();

    yield put(Petrus.actions.login(action.data));

    const result = yield take([Petrus.actionTypes.AUTH_LOGIN_SUCCESS, Petrus.actionTypes.AUTH_LOGIN_FAILURE]);

    let payload;

    if (result.type === Petrus.actionTypes.AUTH_LOGIN_FAILURE) {
        payload = {
            _error: 'Login failed',
        };
    }

    yield action.stopSubmit(payload);
}

export default function*() {
    yield takeEvery(types.LOGIN_FORM, handleLoginForm);
}
