import { connect } from '../dependencies';

import { logout } from '../services/actions';
import { userEmailSelector } from '../services/selectors';

import AuthContent from '../components/AuthContent';

const mapStateToProps = state => ({
    userEmail: userEmailSelector(state),
});

const mapDispatchToProps = {
    logout,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthContent);
