# sagas

Please respect rules below when you are connecting / adding a new saga.

* * *

## `ackeeToolkit/`

This folder should launch only sagas from [`ackee-frontend-toolkit`](https://gitlab.ack.ee/Web/frontend-toolkit).

## `modules/`

The modules folder contains sagas from... well, modules, which are imported as follow:

```js
import { saga as moduleName } from 'Modules/moduleName';
```

## `routing/`

Here you can connect sagas that will triggered every time their key matches with current location.

-   `routing/handlers.js` - Hooked up handlers are triggered every time the route matches current `location`
-   `routing/authHandlers.js` - The only difference to classic `routing/handlers` is that they are active only if an user is authorized and stop when user logouts.
-   `routing/routingSaga.js` - A wrapper saga for the `runRouteActions` saga (form the frontend toolkit), that can prevent multiple handlers triggers if the `location` is same as previous one (see `./utilities/location.js`).

Best practice is to define route handlers on the module level and then export them only as an object. The object is then passed to `combineDependenciesHandlers` utility with key of its module and with `Handlers` suffix, as you can see below:

```js
import { routingHandlers as userProfileHandlers } from 'Modules/user-profile';

const routingHandlers = combineDependenciesHandlers({
    userProfileHandlers,
});
```

More about `combineDependenciesHandlers` utility and how it works, you can find [here](https://gitlab.ack.ee/Web/frontend-toolkit/blob/development/docs/sagas/combineDependenciesHandlers.md).

## `authSaga.js`

Here, you can hook up all sagas that need to run only if a user is authorized (i.e. they can access authorized API endpoints).

## `redirectSaga.js`
