import { React, PropTypes, Menu, FormattedMessage, Link } from '../../dependencies';

const Navbar = ({ navItems }) => {
    return (
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            {navItems.map(navItem => (
                <Menu.Item key={navItem.messageId}>
                    <Link to={navItem.to}>
                        <FormattedMessage id={navItem.messageId} />
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

Navbar.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default Navbar;
