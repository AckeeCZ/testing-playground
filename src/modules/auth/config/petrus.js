import { Petrus } from '../dependencies';

import authenticate from '../services/sagas/authenticate';
import refreshTokens from '../services/sagas/refreshTokens';
import getAuthUser from '../services/sagas/getAuthUser';

const { saga, reducer } = Petrus.configure({
    handlers: {
        authenticate,
        refreshTokens,
        getAuthUser,
    },
    options: {},
    initialState: {},
});

export { saga, reducer };
