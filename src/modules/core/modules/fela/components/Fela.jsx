import { React, Component, PropTypes, RendererProvider, ThemeProvider, createRenderer } from '../dependencies';

import { applyStaticCSS, applyFonts } from '../utilities';
import config from '../config';

class Fela extends Component {
    static propTypes = {
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

    static defaultProps = {
        theme: {},
        staticCSS: [],
        reset: true,
        fonts: [],
    };

    constructor(props) {
        super(props);

        this.renderer = createRenderer(config);
    }

    componentDidMount() {
        const { staticCSS, reset, fonts } = this.props;

        applyStaticCSS(this.renderer, staticCSS, reset);
        applyFonts(this.renderer, fonts);
    }

    render() {
        const { theme, children } = this.props;

        return (
            <RendererProvider renderer={this.renderer}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </RendererProvider>
        );
    }
}

export default Fela;
