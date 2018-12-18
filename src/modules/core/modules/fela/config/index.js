import { felaMonolithic, felaPluginValidator, Consts } from '../dependencies';

const isNotProd = process.env.NODE_ENV !== Consts.env.PRODUCTION;

const enhancers = [];
const plugins = [];

if (isNotProd) {
    enhancers.push(felaMonolithic());

    // felaPluginValidator should be last plugin
    plugins.push(
        felaPluginValidator({
            logInvalid: true,
            deleteInvalid: true,
            useCSSLint: true,
        }),
    );
}

const config = {
    devMode: isNotProd,
    enhancers,
    plugins,
};

export default config;
