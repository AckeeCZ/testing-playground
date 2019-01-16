# `modules/core`

`core` module encapsulates:

-   configuration of `fela`, `redux` (and `redux-saga`), `react-router`, `sentry`
-   initialization of `errorBoundary` HOC and localization module from the `ackee-frontend-toolkit`

Each of these configuration or initialization has its own sub-module, see the `modules/` directory.

All HOCs from these sub-modules (`withErrorBoundary`, `withTranslatable`, `withRouter`) are composed to one at the `containers/Enhancers.js` file.

The main part of the `components/Core.jsx` component looks like this:

```js
<Redux {...redux}>
    <Fela {...fela}>
        <Router>
            <Enhancers>{children}</Enhancers>
        </Router>
    </Fela>
</Redux>
```

All those extensions are then nicely placed as React components in well-arranged structure.

The `Core.jsx` component is then rendered inside a `core/index.js` HOC with the configuration provided by a developer.

## `modules/`

### `error-boundary`

Intialize `errorBoundary` HOC from the `ackee-frontend-toolkit` with custom error message component - `components/ErrorMessage.jsx`. The component is then rendered if any error occurs under the HOC scope.

### [`fela`](http://fela.js.org/)

In the `components/Fela.jsx` a Fela renderer is created,
which receives fonts and static CSS files with CSS reset (optional). Then the renderer is passed to `FelaProvider` component.

> You can add a Fela plugin or enhancer in `config/index.js` file.

### [`localization`](https://github.com/AckeeCZ/Foolkit/tree/master/src/modules/localization)

Initialize `translatable` HOC and `localizationReducerFactory` reducer from the `localization` module placed at `ackee-frontend-toolkit`

### `redux`

In the `components/Redux.jsx`, the Redux `Provider` component with new a store object. The store is returned by `createStore` function placed at `utilities/createStore.js`. The `utilities/` directory also contains `createRootReducer.js` and `rceateRootSaga.js` files with sufficiently self-describing names.

> **DO NOT** connect sagas and reducers from other modules in `createRootSaga` and in `createRootReducer` files.<br/>**DO** it so in the global services in `services/sagas` and `services/reducers`.

### `router`

In the `components/Router.jsx` is rendered `ConnectedRouter` component from the `connected-react-router` with a `history` object created at `config/index.js`. The config file also contains initialized `routerMiddleware` middleware and `connectRouter` reducer (with the same `history` object).

### `sentry`

Only **required configuration of Sentry is to provide `dsn` of your project** that has been created at sentry's website.

By default Sentry logs all uncaught errors from redux sagas, any error catched with the `errorBoundary` HOC.

At this moment, Sentry doesn't capture current redux state when an exception is reported. Sentry has been recently upgraded and I couldn't find any working Redux middleware to be able to do it (5.12. 2018).
