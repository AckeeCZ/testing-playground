import { React, hot, Auth, Switch, Route, Layout } from '../dependencies';

import Navbar from './Navbar';
import HomePage from './HomePage';
import NoMatchPage from './NoMatchPage';

const { Header, Content, Footer } = Layout;
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
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Navbar navItems={navItems} />
            </Header>
            <Content style={{ padding: '100px', marginTop: 64, height: '85vh' }}>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/auth" component={Auth} />
                    <Route component={NoMatchPage} />
                </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>BorečekBaji ©2018</Footer>
        </Layout>
    );
};

export default hot(module)(App);
