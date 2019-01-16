This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Global table of contents

-   [Development tips & recommendations](src/README.md)
-   Skeleton entities
    -   [Components](src/components/README.md)
    -   [Config](src/config/README.md)
    -   [Constants](src/constants/README.md)
    -   [Containers](src/containers/README.md)
    -   [Modules](src/modules/README.md)
    -   [Services](src/services/README.md)

---

## Local table of contents

-   [Available Scripts](#available-scripts)
-   [Displaing ESLint rules violation](#eslint-rules-violation)

---

## <a name="available-scripts"></a> Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches only the test runner, without watch mode.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build:(dev|stage|prod)`

-   #### `yarn build:dev`

    Both `NODE_ENV` and `BUILD_ENV` variables are set to 'development'.

-   ### `yarn build:stage`

    The `NODE_ENV` variable is set to 'development' and the `BUILD_ENV` variable is set to 'stage'.

-   ### `yarn build:prod`
    Both `NODE_ENV` and `BUILD_ENV` variables are set to 'production'.

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn run analyze-dependencies`

This scripts uses the [`madge`](https://www.npmjs.com/package/madge) package to analyze dependency tree and find any circular dependencies.

### `yarn run create-module`

Creates a new module with the [`hygen`](https://www.npmjs.com/package/hygen) with template at `_templates/module`. The new module is then placed at `src/modules/your-module`.

#### Example

```sh
yarn run create-module user-profile
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---

### <a name="eslint-rules-violation"></a> How ESLint rules violation are being displayed

1. Default ESLint config - `eslint-config-react-app`

    - Errors are shown in a browser, as whole screen overlay, and also in a terminal. Warnings are shown in a browser console and also in a terminal.
    - There are defined in `eslint-config-react-app` configuration, maintained by the `create-react-app` team from Facebook.

2. Custom ESLint config - `eslintConfig` object in the `package.json`
    - Both errors and warnings are shown only in your editor. An error violation won't break the app build unlike error violation in the `eslint-config-react-app`.
    - This applies only before your eject (`yarn run eject`), then any error violation from your custom ESLint configuration will break the app build as well. Also errors and warnings are now displayed in a browser (as the whole screen overlay) and in a terminal.
