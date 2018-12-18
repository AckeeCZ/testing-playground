import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import { childrenPropType } from 'ackee-frontend-toolkit/es/components';

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'grey',
};

const SimpleLoader = ({ children, showLoader, text }) => (
    <div>
        {children}
        {showLoader && <FelaComponent style={style}>{text}</FelaComponent>}
    </div>
);

SimpleLoader.propTypes = {
    children: childrenPropType.isRequired,
    showLoader: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default SimpleLoader;
