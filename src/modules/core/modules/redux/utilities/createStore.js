import {
    applyMiddleware,
    compose,
    createStore,
    routerMiddlewareWithHistory,
    createSagaMiddleware,
    Consts,
    Sentry,
} from '../dependencies';

import createRootReducer from './createRootReducer';
import createRootSaga from './createRootSaga';

const configureStore = ({ initialState, reducers, saga, middlewares: customMiddlewares }) => {
    const isNotProd = process.env.NODE_ENV !== Consts.env.PRODUCTION;
    const sagaMiddleware = createSagaMiddleware({
        onError(e) {
            if (isNotProd) {
                console.error(e);
            }
            Sentry.captureException(e);
        },
    });
    const middlewares = [routerMiddlewareWithHistory, sagaMiddleware].concat(customMiddlewares);
    const middleware = applyMiddleware(...middlewares);
    const enhancerArgs = [middleware];

    if (isNotProd) {
        // eslint-disable-next-line
        const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
        enhancerArgs.push(reduxDevTools ? reduxDevTools() : r => r);
    }

    const rootReducer = createRootReducer(reducers);
    const enhancer = compose(...enhancerArgs);
    /* eslint-disable no-underscore-dangle */
    const store = createStore(rootReducer, initialState, enhancer);

    const rootSaga = createRootSaga(saga);
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
