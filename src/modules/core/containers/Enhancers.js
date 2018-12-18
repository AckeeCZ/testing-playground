import { compose } from '../dependencies';

// enhancers
import { withErrorBoundary } from '../modules/error-boundary';
import { withTranslatable } from '../modules/localization';

const Children = ({ children, location }) => children({ location });

export default compose(
    withTranslatable,
    withErrorBoundary,
)(Children);
