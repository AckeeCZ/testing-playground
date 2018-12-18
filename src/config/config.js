import { merge } from 'lodash';

import devConfig from './config.development';
import stageConfig from './config.stage';
import productionConfig from './config.production';

const configs = {
    development: devConfig,
    stage: stageConfig,
    production: productionConfig,
};

const env = process.env.NODE_ENV;
const envConfig = configs[env];

const defaults = {
    // default configuration goes here
    appName: process.env.REACT_APP_NAME,
    devTools: true,
    api: {
        trips: '/v1/admin/trips',
        trip: '/v1/admin/trips/:id',
        signin: '/v1/auth/sign-in',
        signup: '/v1/auth/sign-up',
        me: '/v1/users/me',
        refresh: '/v1/auth/refresh',
    },
    firebase: {
        notifications: userId => ({
            path: `/notifications/${userId}`,
            store: `notifications.${userId}`,
        }),
        notificationsCount: userId => ({
            path: `/notifications/${userId}/count`,
            storeAs: `notifications_${userId}_count`,
        }),
    },
    chat: {
        supportedImageTypes: ['image/jpeg', 'image/png'],
    },
    date: 'HH:mm DD.MM.YYYY',
    forms: {
        login: 'loginForm',
    },
    imageServer: {
        options: {
            width: 250,
            height: 250,
            crop: 'fill',
        },
    },
    map: {
        center: {
            lat: 50,
            lng: 16,
        },
        zoom: 7,
    },
};

export default merge(defaults, envConfig);
