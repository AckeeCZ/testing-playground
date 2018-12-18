import { React, hot, Auth, Switch, Route } from '../dependencies';

import Container from './Container';
import Navbar from './Navbar';
import HomePage from './HomePage';
import NoMatchPage from './NoMatchPage';

const navItems = [
  {
    messageId: 'page.home.title',
    to: '/',
  },
  {
    messageId: 'page.auth.title',
    to: '/auth',
  },
  {
    messageId: 'page.noMatch.title',
    to: '/no-match',
  },
];

const App = () => {
  return (
    <Container>
      <Navbar navItems={navItems} />

      <Switch>
        <Route path="/" component={HomePage} exact />

        <Route path="/auth" component={Auth} />

        <Route component={NoMatchPage} />
      </Switch>
    </Container>
  );
};

export default hot(module)(App);
