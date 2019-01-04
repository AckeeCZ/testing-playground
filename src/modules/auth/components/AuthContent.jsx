import { React, FormattedMessage, PropTypes } from '../dependencies';

const texts = {
    logout: <FormattedMessage id="logout" />,
};

function AuthContent({ logout, userEmail }) {
    return (
        <>
            <div>
                Signed in user: <span id="userEmail">{userEmail}</span>
            </div>
            <button id="logoutBtn" type="button" onClick={logout}>
                {texts.logout}
            </button>
        </>
    );
}

AuthContent.propTypes = {
    logout: PropTypes.func.isRequired,
    userEmail: PropTypes.string.isRequired,
};

export default AuthContent;
