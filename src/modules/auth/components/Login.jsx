import { Petrus } from '../dependencies';

import AuthLoader from './AuthLoader';
import AuthContent from '../containers/AuthContent';
import LoginForm from '../containers/LoginForm';

const { authorizable } = Petrus.HOC;

export default authorizable(AuthContent, LoginForm, AuthLoader);
