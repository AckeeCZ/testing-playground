import { reducer as auth } from 'Modules/auth';
import { reducer as history } from 'ackee-frontend-toolkit/lib/modules/routing-history';

// NOTE:
// Do not use combineReducers() here,
// export reducers as plain object, not as a function.
const reducers = {
  auth,
  history,
};

export default reducers;
