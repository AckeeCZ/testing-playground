import {
    combineReducers,
    formReducer,
    translateReducer,
    connectRouterWithHistory,
} from '../dependencies';

export default function createRootReducer(reducers = {}) {
    const rootReducer = combineReducers({
        ...reducers,
        translate: translateReducer,
        form: formReducer,
        router: connectRouterWithHistory,
    });

    return rootReducer;
}
