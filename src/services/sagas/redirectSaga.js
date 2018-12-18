import { takeEvery, put } from 'redux-saga/effects';
import { replace } from 'connected-react-router';

function* redirect(_action) {
    switch (_action.type) {
    }
}

export default function*() {
    yield takeEvery('*', redirect);
}
