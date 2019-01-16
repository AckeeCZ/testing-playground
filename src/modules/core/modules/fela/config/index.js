import {
    felaMonolithic,
    felaPluginValidator,
    felaPluginUnit,
    felaPluginNamedKeys,
    felaPluginFriendlyPseudoClass,
    Consts,
    namedKeys,
} from '../dependencies';

const isNotProd = process.env.NODE_ENV !== Consts.env.PRODUCTION;

const enhancers = [];
const plugins = [];

// docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-unit
const defaultUnit = 'px';
plugins.push(felaPluginUnit(defaultUnit));

// docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
plugins.push(felaPluginFriendlyPseudoClass());

// docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
plugins.push(felaPluginNamedKeys(namedKeys));

if (isNotProd) {
    enhancers.push(
        felaMonolithic({
            prettySelectors: true,
        }),
    );

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
