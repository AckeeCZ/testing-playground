import { React, FelaComponent, Link, FormattedMessage, PropTypes } from '../../../dependencies';

import rule from './NavItem.rule';

const NavItem = ({ to, messageId }) => {
    return (
        <FelaComponent style={rule}>
            {({ className }) => (
                <Link
                    {...{
                        to,
                        className,
                    }}
                >
                    <FormattedMessage id={messageId} />
                </Link>
            )}
        </FelaComponent>
    );
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    messageId: PropTypes.string.isRequired,
};

export default NavItem;
