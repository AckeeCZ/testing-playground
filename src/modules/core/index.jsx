import { React, Suspense, ReactDOM, serviceWorker } from './dependencies';
import Core from './components/Core';
import { initializeSentry } from './modules/sentry';

const defaultConfig = {
    serviceWorker: false,
    sentry: true,
};

export default function CoreWrapper(customConfig, rootId = 'root') {
    const config = {
        ...defaultConfig,
        ...customConfig,
    };

    const render = (Component, SuspenseFallback) => {
        if (config.sentry) {
            initializeSentry();
        }

        ReactDOM.render(
            <Core {...config}>
                {props => (
                    <Suspense fallback={<SuspenseFallback />}>
                        <Component {...props} />
                    </Suspense>
                )}
            </Core>,
            document.getElementById(rootId),
        );

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA
        config.serviceWorker ? serviceWorker.register() : serviceWorker.unregister();
    };

    return {
        render,
    };
}
