import { Petrus } from '../dependencies';
import types from './actionTypes';

const { login, logout } = Petrus.actions;

export { login, logout };

export const loginForm = () => ({
    type: types.LOGIN_FORM,
});
