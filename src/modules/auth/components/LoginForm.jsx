import { React, PropTypes, Form, Field, Input } from '../dependencies';

const LoginForm = ({ handleSubmit, intl, submitting, error }) => (
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
        <button type="submit" disabled={submitting} id="submitButton">
            {intl.formatMessage({ id: 'login.submit' })}
        </button>

        {error && <p>{error}</p>}
    </Form>
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
