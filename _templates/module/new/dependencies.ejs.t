---
to: src/modules/<%= name %>/dependencies.js
---
export { createSelector } from 'reselect';

export { createType } from 'ackee-frontend-toolkit/es/helpers';
export { runSagas } from 'ackee-frontend-toolkit/es/sagas/routing';

export { api } from 'Config/http-client';

export * from 'Modules/sharedDependencies';
