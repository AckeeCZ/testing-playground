import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import { FelaComponent } from 'react-fela';

import * as rules from './Input.rules';

const InputField = ({ input, label, id, disabled, meta: { error, touched }, type, withLabel, style, small }) => {
    const showError = touched && error;

    return (
        <FelaComponent showError={showError} small={small} style={rules.formInput}>
            {withLabel && (
                <FelaComponent style={rules.formLabel}>
                    <label htmlFor={id}>{label}</label>
                </FelaComponent>
            )}

            <Input
                {...{
                    id,
                    disabled,
                    type,
                    style,
                    placeholder: withLabel ? null : label,
                    ...input,
                }}
            />
        </FelaComponent>
    );
};

InputField.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.shape({
        error: PropTypes.string,
        touched: PropTypes.bool,
    }).isRequired,
    type: PropTypes.string.isRequired,
    withLabel: PropTypes.bool,
    // Reason: it's general style object with very varying shape
    // eslint-disable-next-line
    style: PropTypes.object,
    small: PropTypes.bool,
};

InputField.defaultProps = {
    disabled: false,
    withLabel: false,
    style: {},
    small: false,
};

export default InputField;
