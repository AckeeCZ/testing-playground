import { React, FormattedMessage, FelaComponent } from '../../dependencies';

export const style = {
    marginTop: '100px',
    color: 'red',
};

const HomePage = () => {
    return (
        <FelaComponent style={style}>
            <FormattedMessage id="page.home.content" />
        </FelaComponent>
    );
};

export default HomePage;
