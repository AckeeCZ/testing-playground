import { Sentry, config, createSentryMiddleware, Petrus } from '../dependencies';

const options = {
    // TODO: add PUBLIC 'dsn' of your project here:
    dsn: '',

    debug: false,
    environment: process.env.NODE_ENV,
    release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
};

if (!options.dsn) {
    const projectName = window.encodeURIComponent(config.appName);
    const url = `https://sentree.ack.ee/sentry/${projectName}/settings/keys`;

    console.warn(`[Sentry]: Add 'dsn' of your project.\n${url}`);
}

export const initializeSentry = () => {
    Sentry.init(options);
};

// docs: https://github.com/vidit-sh/redux-sentry-middleware#sentry-middleware-for-redux
export const sentryMiddleware = createSentryMiddleware(Sentry, {
    // !!! YOU MAY NOT WANT TO SEND SOME SENSITIVE DATA TO SENTRY
    actionTransformer: action => action,
    stateTransformer: state => state,
    getUserContext: Petrus.selectors.authUser,
});
