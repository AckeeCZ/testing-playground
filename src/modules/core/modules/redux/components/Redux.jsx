import { React, PropTypes, Provider } from '../dependencies';

import { createStore } from '../utilities';

const Redux = ({ children, initialState, reducers, saga, middlewares }) => {
    const store = createStore({ initialState, reducers, saga, middlewares });

    return <Provider store={store}>{children}</Provider>;
};

Redux.propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line
    initialState: PropTypes.object,
    // eslint-disable-next-line
    reducers: PropTypes.object.isRequired,
    saga: PropTypes.func,
    middlewares: PropTypes.arrayOf(PropTypes.func),
};

Redux.defaultProps = {
    initialState: {},
    *saga() {
        yield;
    },
    middlewares: [],
};

export default Redux;
