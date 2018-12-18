import resets from '../styles/resets.css';

const applyStaticCSS = (renderer, staticCSS, reset) => {
    const cssFiles = Array.isArray(staticCSS) ? staticCSS : [staticCSS];

    if (reset) {
        cssFiles.push(resets);
    }

    const cssString = cssFiles.reduce((acc, item) => acc + item.toString(), '');

    renderer.renderStatic(cssString);
};

export default applyStaticCSS;
