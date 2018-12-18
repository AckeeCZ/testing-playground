import { sagaEffects, sentrySaga } from '../dependencies';

const { all } = sagaEffects;

// eslint-disable-next-line
const emptyGenerator = function*() {};

const createRootSaga = (saga = emptyGenerator) => {
    const sagas = [sentrySaga()];

    const rootSaga = function* rootSaga(...args) {
        yield all([...sagas, saga(...args)]);
    };

    return rootSaga;
};

export default createRootSaga;
