import React from 'react';
import Core from 'Modules/core';

import theme from 'Styles/theme';
import vendors from 'Styles/vendors.css';

import reducers from 'Services/reducers';
import saga from 'Services/sagas';
import * as Consts from 'Consts';

import ApplicationLoader from 'Components/AppLoader';

const Application = React.lazy(() => import('Modules/application'));

const config = {
    redux: {
        reducers,
        saga,
        initialState: {},
        middlewares: [],
    },

    fela: {
        // NOTE: If you need to add plugin or enhancer,
        // do it so in the fela sub-module (/modules/core/modules/fela/config).
        theme,
        staticCSS: [vendors],
        fonts: [],
    },

    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker: false,

    // Enable Sentry only in prouduction environment
    sentry: process.env.NODE_ENV === Consts.env.PRODUCTION,
};

Core(config).render(Application, ApplicationLoader);
