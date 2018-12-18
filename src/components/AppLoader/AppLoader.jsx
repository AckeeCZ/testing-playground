import React from 'react';
import { FelaComponent } from 'react-fela';
import { FormattedMessage } from 'react-intl';

const texts = {
    loading: <FormattedMessage id="loader.title" />,
};

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    height: '100%',
    width: '100%',
};

const AppLoader = () => (
    <FelaComponent style={style} render="div">
        {texts.loading}
        ...
    </FelaComponent>
);

export default AppLoader;
