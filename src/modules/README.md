# Modules

A "module" is in our skeleton defined as directory containing at least `index.js` and `dependencies.js` files.

-   The `index.js` file makes available its module content outside of its scope. It's only entry point for other modules.
-   The `dependencies.js` file makes outer content available for its module scope.

---

## Table of contents

-   [Initial modules](#initial-modules)
-   [Recommended module structure](#module-structure)
-   [Creating a new module](#creating-a-new-module)

---

## Initial modules

### `application`

An entry point for your application. It contains basic usage example of the `react-router-dom`.

### `auth` (optional - may not be included)

A module for an authentication, including `LoginForm` component and mainly sagas for [`@ackee/petrus`](https://github.com/AckeeCZ/petrus) configuration.
[Read more](auth/README.md).

### `core`

This module encapsulates core logic and configurations of an entire applicatio, such a `error-boundary`, `fela`, `localization`, `redux`, `router` and `sentry`. [Read more](core/README.md).

---

## Recommended module Structure

Note that each of these folders is optional, however a module must contain `index.js` and `dependencies.js` files.

```text
/user-profile
    /components
    /containers
    /config
    /constants
    /HOC
    /services
        /actions
        /actionTypes
        /reducers
        /sagas
        /selectors
        /utilities (services utilities)
    /modules
    /utilities (module utilities)
    index.js (required)
    dependencies.js (required)
    README.md
```

### `components`

[Presentational components](../components/README.md).

### `containers`

[Container components](../containers/README.md).

### `services`

This directory should follow the same structure as [the global `services`](../services/README.md).

### `modules`

A module can include also `modules` (sub-modules) with the same structure as a root module with the only exception. And that's, sub-modules mustn't include another `modules` directory.

### `utilities`

Utilities functions for `components`, `containers`, `HOC`, .etc, but aren't anyhow connected with the `services`, are placed here.

### `index.js`

It's one and **only entry point** for rest of the application. All exports from the module are placed here.

> **Put in the index.js only exports that are going to be certainly used**.

```javascript
// in user-profile/index.js
export { default as UserProfile } from './containers/UserProfile';

// in some-other-module/dependencies.js
export { UserProfile } from 'Modules/user-profile';
```

```js
// DO import components from only from index.js entry file
import { UserProfile } from 'Modules/user-profile';

// DO NOT import components directly
import UserProfile from 'Modules/user-profile/containers/UserProfile';
```

### `dependencies.js`

It's one and only file from which a module can access rest of the application. All imports for that module goes here.
e.g.:

```javascript
// in user-profile/dependencies.js
export * as Selectors from 'Selectors';

// in user-profile/containers/UserProfile.js
import { Selectors } from '../dependencies';

// UserProfile container has now access to any global selector through the dependencies file
```

```js
// DO place external components to the module's dependencies.js file
export { default as AppLoader } from 'Components/AppLoader';
// then in 'modules/user-profile/Foo/Foo.js' component:
import { AppLoader } from '../../dependencies';

// DO NOT import external directly
// in 'modules/user-profile/Foo/Foo.js' component:
import AppLoader from 'Components/AppLoader';
```

### `README.md`

It would have been nice if each module had its own brief README with a short description of its core logic.

---

## Creating a new module

Open your CLI and type: `npm run create-module module-name`.
