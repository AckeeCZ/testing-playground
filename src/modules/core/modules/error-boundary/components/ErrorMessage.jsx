import { React, FelaComponent, FormattedMessage } from '../dependencies';

import * as rules from './ErrorMessage.rules';

const ErrorMessage = () => (
    <FelaComponent style={rules.message}>
        <FormattedMessage id="error.general" />
    </FelaComponent>
);

export default ErrorMessage;
