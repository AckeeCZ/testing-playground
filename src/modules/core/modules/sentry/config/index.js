import { Sentry, Consts, config } from '../dependencies';

const options = {
    // TODO: add PUBLIC 'dsn' of your project here:
    dsn: '',

    debug: process.env.NODE_ENV === Consts.env.DEVELOPMENT,
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
