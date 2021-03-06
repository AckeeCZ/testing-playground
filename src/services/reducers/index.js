import { reducer as auth } from 'Modules/auth';
import { routingHistory } from '@ackee/chris';

// NOTE:
// Do not use combineReducers() here,
// export reducers as plain object, not as a function.
const reducers = {
    auth,
    history: routingHistory.reducer,
};

export default reducers;
