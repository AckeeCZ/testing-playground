const appName = 'abibuch' || process.env.REACT_APP_NAME;

const config = {
    api: {
        base: `http://api-${appName}-development.ack.ee/api`,
    },
    devTools: true,
};

export default config;
