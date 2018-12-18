import { createSelector, Petrus } from '../dependencies';

export const userEmailSelector = createSelector(Petrus.selectors.authUser, user => (user ? user.email : ''));
