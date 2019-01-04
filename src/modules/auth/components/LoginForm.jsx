import { React, PropTypes, Form, Field, Input, FelaComponent, Alert } from '../dependencies';

import { rule } from './LoginForm.rule';

const LoginForm = ({ handleSubmit, intl, submitting, error }) => (
    <FelaComponent rule={rule}>
        <Form onSubmit={handleSubmit}>
            <Field
                disabled={submitting}
                id="email"
                name="email"
                component={Input}
                type="text"
                label={intl.formatMessage({ id: 'login.email' })}
                withLabel
            />
            <Field
                disabled={submitting}
                id="password"
                name="password"
                component={Input}
                type="password"
                label={intl.formatMessage({ id: 'login.password' })}
                withLabel
            />
            <input
                type="submit"
                className="ant-btn ant-btn-primary"
                disabled={submitting}
                id="submitButton"
                value={intl.formatMessage({ id: 'login.submit' })}
            />
            {error && <Alert message={error} type="error" className="logError" style={{ marginTop: '15px' }} />}
        </Form>
    </FelaComponent>
);

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

LoginForm.defaultProps = {
    error: '',
};

export default LoginForm;
