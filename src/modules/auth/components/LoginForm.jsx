import { React, PropTypes, Form, Field, Input, Button, FelaComponent } from '../dependencies';

const rule = props => ({
    fontSize: '150px',
    color: 'red',
});

const LoginForm = ({ handleSubmit, intl, submitting, error }) => (
    <div>
        <FelaComponent style={rule} as="h1">
            ahoj
        </FelaComponent>
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

            <Button type="primary" disabled={submitting} id="submitButton">
                {intl.formatMessage({ id: 'login.submit' })}
            </Button>
            {error && <p>{error}</p>}
        </Form>
    </div>
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
