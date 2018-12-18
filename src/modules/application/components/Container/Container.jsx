import { React, childrenPropType, FelaComponent } from '../../dependencies';

import rule from './Container.rule';

const Container = ({ children }) => {
    return <FelaComponent style={rule}>{children}</FelaComponent>;
};

Container.propTypes = {
    children: childrenPropType.isRequired,
};

export default Container;
