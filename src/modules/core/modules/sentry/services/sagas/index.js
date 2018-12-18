import { Sentry, types, sagaEffects } from '../../dependencies';

const { takeEvery } = sagaEffects;

function errorHandler(action) {
    const { error, extra } = action;

    Sentry.withScope(scope => {
        if (typeof extra === 'object') {
            for (const [key, value] of Object.entries(extra)) {
                scope.setExtra(key, value);
            }
        }

        Sentry.captureException(error);
    });
}

export default function*() {
    // LOG_ERROR is dispatched by the errorBoundary HOC (in componentDidCatched method)
    yield takeEvery(types.logging.LOG_ERROR, errorHandler);
}
