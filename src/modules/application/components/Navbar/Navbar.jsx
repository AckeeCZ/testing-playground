import { React, FelaComponent, PropTypes } from '../../dependencies';

import NavItem from './NavItem';

import rule from './Navbar.rule';

const Navbar = ({ navItems }) => {
    return (
        <FelaComponent style={rule}>
            {navItems.map(navItem => (
                <NavItem key={navItem.to} {...navItem} />
            ))}
        </FelaComponent>
    );
};

Navbar.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape(NavItem.propTypes).isRequired).isRequired,
};

export default Navbar;
