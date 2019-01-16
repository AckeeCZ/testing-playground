import { combineDependenciesHandlers } from '@ackee/chris';
import routingSaga from './routingSaga';

// eslint-disable-next-line
function* myAuthRouteSaga() {
    console.log('user is authorized and "/my-auth-route" route saga was triggered.');
}

const authHandlers = {
    '/my-auth-route': myAuthRouteSaga,
};

const authRoutingHandlers = combineDependenciesHandlers(authHandlers);

export default function*() {
    yield routingSaga(authRoutingHandlers, {
        skipEqualLocations: true,
    });
}
