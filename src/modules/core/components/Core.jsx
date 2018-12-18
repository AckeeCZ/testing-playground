import { React, PropTypes } from '../dependencies';

import { Fela } from '../modules/fela';
import { Redux } from '../modules/redux';
import { Router } from '../modules/router';
import Enhancers from '../containers/Enhancers';

const Core = ({ children, fela, redux }) => {
    return (
        <Redux {...redux}>
            <Fela {...fela}>
                <Router>
                    <Enhancers>{children}</Enhancers>
                </Router>
            </Fela>
        </Redux>
    );
};

Core.propTypes = {
    children: PropTypes.func.isRequired,
    // eslint-disable-next-line
    fela: PropTypes.object,
    redux: PropTypes.shape({
        reducers: PropTypes.object,
        saga: PropTypes.func,
        middlewares: PropTypes.array,
    }).isRequired,
};

Core.defaultProps = {
    fela: {},
    redux: {},
};

export default Core;
