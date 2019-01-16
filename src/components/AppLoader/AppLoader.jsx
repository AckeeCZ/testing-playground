import React from 'react';
import { FelaComponent } from 'react-fela';
import { FormattedMessage } from 'react-intl';

import * as styles from './AppLoader.styles';

const texts = {
    loading: <FormattedMessage id="loader.title" />,
};

const AppLoader = () => (
    <FelaComponent style={styles.appLoader}>
        {texts.loading}
        ...
    </FelaComponent>
);

export default AppLoader;
