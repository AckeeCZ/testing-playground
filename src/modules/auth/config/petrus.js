import { Petrus } from '../dependencies';

import authenticate from '../services/sagas/authenticate';
import refreshTokens from '../services/sagas/refreshTokens';
import getAuthUser from '../services/sagas/getAuthUser';

// docs: https://github.com/AckeeCZ/petrus#configureconfig-object--object
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
