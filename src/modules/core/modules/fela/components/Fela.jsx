import { React, PropTypes, Provider, ThemeProvider, createRenderer } from '../dependencies';

import { applyStaticCSS, applyFonts } from '../utilities';
import config from '../config';

const Fela = ({ staticCSS, theme, reset, children, fonts }) => {
    const renderer = createRenderer(config);

    applyStaticCSS(renderer, staticCSS, reset);
    applyFonts(renderer, fonts);

    return (
        <Provider renderer={renderer}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
    );
};

Fela.propTypes = {
    // eslint-disable-next-line
    theme: PropTypes.object,
    staticCSS: PropTypes.arrayOf(PropTypes.array.isRequired),
    reset: PropTypes.bool,
    children: PropTypes.node.isRequired,
    fonts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            files: PropTypes.array.isRequired,
            options: PropTypes.shape(),
        }).isRequired,
    ),
};

Fela.defaultProps = {
    theme: {},
    staticCSS: [],
    reset: true,
    fonts: [],
};

export default Fela;
